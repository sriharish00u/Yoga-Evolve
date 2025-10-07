import matplotlib.pyplot as plt
import matplotlib.patches as patches

def draw_stick_figure(ax):
    # Head
    head = patches.Circle((0.5, 0.8), 0.05, fill=False, linewidth=3)
    ax.add_patch(head)
    # Body
    ax.plot([0.5, 0.5], [0.7, 0.5], color='black', linewidth=3)
    # Arms
    ax.plot([0.3, 0.7], [0.65, 0.65], color='black', linewidth=3)
    # Legs
    ax.plot([0.5, 0.35], [0.5, 0.3], color='black', linewidth=3)
    ax.plot([0.5, 0.65], [0.5, 0.3], color='black', linewidth=3)

def generate_posture_image(posture_name, filename):
    fig, ax = plt.subplots(figsize=(2, 3))
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')

    draw_stick_figure(ax)

    # Add posture name text below the figure
    plt.text(0.5, 0.1, posture_name, fontsize=12, ha='center', va='center', fontweight='bold')

    plt.savefig(filename, bbox_inches='tight', transparent=True)
    plt.close()

if __name__ == "__main__":
    sample_posture = "Tadasana"
    output_file = "projects/Yoga/postures/sample_tadasana.png"
    generate_posture_image(sample_posture, output_file)
    print(f"Sample image generated: {output_file}")
