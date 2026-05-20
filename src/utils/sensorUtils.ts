// Sensor utilities for device interaction in yoga training
// Handles motion detection, heart rate monitoring, and adaptive feedback

export interface SensorData {
  motion: {
    acceleration: { x: number; y: number; z: number };
    gyroscope: { x: number; y: number; z: number };
    timestamp: number;
  };
  heartRate?: number;
  timestamp: number;
}

export interface SessionMetrics {
  averageHeartRate: number;
  motionStability: number;
  sessionDuration: number;
  poseAccuracy: number;
}

class SensorManager {
  private motionSensor: ((event: DeviceMotionEvent) => void) | null = null;
  private isActive = false;
  private dataCallbacks: ((data: SensorData) => void)[] = [];
  private sessionStartTime = 0;
  private sessionData: SensorData[] = [];

  // Initialize sensor permissions and setup
  async initialize(): Promise<boolean> {
    try {
      // Request motion sensor permission
      if (typeof DeviceMotionEvent !== 'undefined' &&
          'requestPermission' in DeviceMotionEvent) {
        const permission = await (DeviceMotionEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
        if (permission !== 'granted') {
          console.warn('Motion sensor permission denied');
          return false;
        }
      }

      // Request heart rate sensor permission (if available)
      if ('bluetooth' in navigator && typeof (navigator as Navigator & { bluetooth?: { getDevices: () => void } }).bluetooth?.getDevices === 'function') {
        // Heart rate sensor setup would go here
        console.log('Heart rate sensor available');
      }

      return true;
    } catch (error) {
      console.error('Sensor initialization failed:', error);
      return false;
    }
  }

  // Start sensor data collection
  startSession(): void {
    if (this.isActive) return;

    this.isActive = true;
    this.sessionStartTime = Date.now();
    this.sessionData = [];

    // Setup motion sensor listener
    const handleMotion = (event: DeviceMotionEvent) => {
      const data: SensorData = {
        motion: {
          acceleration: {
            x: event.acceleration?.x || 0,
            y: event.acceleration?.y || 0,
            z: event.acceleration?.z || 0,
          },
          gyroscope: {
            x: event.rotationRate?.alpha || 0,
            y: event.rotationRate?.beta || 0,
            z: event.rotationRate?.gamma || 0,
          },
          timestamp: event.timeStamp || Date.now(),
        },
        timestamp: Date.now(),
      };

      this.sessionData.push(data);
      this.dataCallbacks.forEach(callback => callback(data));
    };

    window.addEventListener('devicemotion', handleMotion);
    this.motionSensor = handleMotion;

    console.log('Sensor session started');
  }

  // Stop sensor data collection
  stopSession(): SessionMetrics {
    if (!this.isActive) {
      return {
        averageHeartRate: 0,
        motionStability: 0,
        sessionDuration: 0,
        poseAccuracy: 0,
      };
    }

    this.isActive = false;

    if (this.motionSensor) {
      window.removeEventListener('devicemotion', this.motionSensor);
      this.motionSensor = null;
    }

    const sessionDuration = (Date.now() - this.sessionStartTime) / 1000; // in seconds

    // Calculate session metrics
    const metrics = this.calculateSessionMetrics();

    console.log('Sensor session stopped', metrics);
    return { ...metrics, sessionDuration };
  }

  // Add callback for real-time sensor data
  onSensorData(callback: (data: SensorData) => void): void {
    this.dataCallbacks.push(callback);
  }

  // Remove sensor data callback
  removeSensorDataCallback(callback: (data: SensorData) => void): void {
    const index = this.dataCallbacks.indexOf(callback);
    if (index > -1) {
      this.dataCallbacks.splice(index, 1);
    }
  }

  // Calculate session metrics from collected data
  private calculateSessionMetrics(): Omit<SessionMetrics, 'sessionDuration'> {
    if (this.sessionData.length === 0) {
      return {
        averageHeartRate: 0,
        motionStability: 0,
        poseAccuracy: 0,
      };
    }

    // Calculate average heart rate (placeholder for now)
    const averageHeartRate = this.sessionData
      .filter(d => d.heartRate)
      .reduce((sum, d) => sum + (d.heartRate || 0), 0) / this.sessionData.length || 0;

    // Calculate motion stability (lower variance = more stable)
    const motionMagnitudes = this.sessionData.map(d =>
      Math.sqrt(
        d.motion.acceleration.x ** 2 +
        d.motion.acceleration.y ** 2 +
        d.motion.acceleration.z ** 2
      )
    );

    const avgMotion = motionMagnitudes.reduce((sum, mag) => sum + mag, 0) / motionMagnitudes.length;
    const motionVariance = motionMagnitudes.reduce((sum, mag) => sum + (mag - avgMotion) ** 2, 0) / motionMagnitudes.length;
    const motionStability = Math.max(0, 1 - motionVariance / 10); // Normalize to 0-1 scale

    // Calculate pose accuracy (simplified - based on motion consistency)
    const poseAccuracy = motionStability * 0.8 + (averageHeartRate > 0 ? 0.2 : 0); // Placeholder calculation

    return {
      averageHeartRate,
      motionStability,
      poseAccuracy,
    };
  }

  // Get current sensor status
  getStatus(): {
    isActive: boolean;
    hasMotionSensor: boolean;
    hasHeartRateSensor: boolean;
    sessionDuration: number;
  } {
    return {
      isActive: this.isActive,
      hasMotionSensor: typeof DeviceMotionEvent !== 'undefined',
      hasHeartRateSensor: false, // Placeholder - would check for actual heart rate sensor
      sessionDuration: this.isActive ? (Date.now() - this.sessionStartTime) / 1000 : 0,
    };
  }
}

// Export singleton instance
export const sensorManager = new SensorManager();

// Utility functions for pose detection and feedback
export const poseDetectionUtils = {
  // Calculate pose stability from motion data
  calculatePoseStability(sensorData: SensorData[]): number {
    if (sensorData.length < 10) return 0;

    const recentData = sensorData.slice(-10);
    const motionMagnitudes = recentData.map(d =>
      Math.sqrt(
        d.motion.acceleration.x ** 2 +
        d.motion.acceleration.y ** 2 +
        d.motion.acceleration.z ** 2
      )
    );

    const avgMotion = motionMagnitudes.reduce((sum, mag) => sum + mag, 0) / motionMagnitudes.length;
    const variance = motionMagnitudes.reduce((sum, mag) => sum + (mag - avgMotion) ** 2, 0) / motionMagnitudes.length;

    return Math.max(0, Math.min(1, 1 - variance / 5)); // Normalize to 0-1 scale
  },

  // Generate adaptive feedback based on sensor data
  generateFeedback(metrics: SessionMetrics): string {
    let feedback = '';

    if (metrics.motionStability > 0.8) {
      feedback += 'Excellent stability! Your pose is very steady. ';
    } else if (metrics.motionStability > 0.6) {
      feedback += 'Good stability. Try to hold your balance a bit more. ';
    } else {
      feedback += 'Focus on improving your balance and stability. ';
    }

    if (metrics.averageHeartRate > 0) {
      if (metrics.averageHeartRate < 60) {
        feedback += 'Your heart rate is calm - perfect for relaxation poses. ';
      } else if (metrics.averageHeartRate < 80) {
        feedback += 'Your heart rate indicates moderate intensity. ';
      } else {
        feedback += 'Your heart rate is elevated - consider easier poses or longer rests. ';
      }
    }

    return feedback.trim();
  },

  // Suggest pose adjustments based on sensor data
  suggestAdjustments(sensorData: SensorData[]): string[] {
    const suggestions: string[] = [];
    const recentData = sensorData.slice(-5);

    if (recentData.length < 5) return suggestions;

    const avgAccel = recentData.reduce((sum, d) => ({
      x: sum.x + d.motion.acceleration.x,
      y: sum.y + d.motion.acceleration.y,
      z: sum.z + d.motion.acceleration.z,
    }), { x: 0, y: 0, z: 0 });

    avgAccel.x /= recentData.length;
    avgAccel.y /= recentData.length;
    avgAccel.z /= recentData.length;

    // Simple suggestions based on acceleration patterns
    if (Math.abs(avgAccel.x) > 2) {
      suggestions.push('Try to center your weight more evenly');
    }

    if (Math.abs(avgAccel.y) > 2) {
      suggestions.push('Focus on maintaining steady breathing');
    }

    if (Math.abs(avgAccel.z) > 2) {
      suggestions.push('Ground yourself more firmly');
    }

    return suggestions;
  },
};
