import SEO from './SEO'

const ORIGIN = 'https://yogaevolve.app'

export function HomeSEO() {
  return (
    <SEO
      title="Adaptive Yoga Trainer"
      description="Offline, privacy-first adaptive yoga trainer with real-time webcam pose tracking, 100+ poses, gamified achievements, and comprehensive yoga knowledge. Improve flexibility, strength, and mental well-being."
      path="/"
      keywords="yoga trainer, adaptive yoga, webcam yoga, pose tracking, online yoga, free yoga app, meditation, wellness, fitness"
      jsonld={{
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Yoga Evolve',
        url: ORIGIN,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'All',
        description: 'Privacy-first adaptive yoga trainer with real-time pose tracking.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        author: { '@type': 'Organization', name: 'Yoga Evolve' },
      }}
    />
  )
}

export function PosturesSEO() {
  return (
    <SEO
      title="Yoga Pose Library"
      description="Browse 100+ yoga poses with detailed instructions, benefits, body part targeting, and Sanskrit names. Filter by category or body part."
      path="/postures"
      keywords="yoga poses, asanas, pose library, yoga postures, yoga poses list, yoga asanas with pictures"
      jsonld={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Yoga Pose Library',
        description: 'A comprehensive collection of yoga poses with instructions and benefits.',
        numberOfItems: 100,
        url: `${ORIGIN}/postures`,
        itemListElement: [],
      }}
    />
  )
}

export function PracticeSEO() {
  return (
    <SEO
      title="Build Your Yoga Routine"
      description="Create custom yoga practice sessions. Choose poses, set hold durations, and practice with real-time AI pose matching. Track your progress with XP and achievements."
      path="/practice"
      keywords="yoga routine builder, custom yoga practice, yoga workout, practice yoga at home, yoga session"
      jsonld={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Practice Yoga at Home',
        description: 'Build a custom yoga practice routine with guided poses and real-time feedback.',
        step: [
          { '@type': 'HowToStep', text: 'Select poses from the library' },
          { '@type': 'HowToStep', text: 'Set hold duration for each pose' },
          { '@type': 'HowToStep', text: 'Start your session with webcam tracking' },
          { '@type': 'HowToStep', text: 'Receive real-time pose matching feedback' },
          { '@type': 'HowToStep', text: 'Earn XP and track your progress' },
        ],
      }}
    />
  )
}

export function BenefitsSEO() {
  return (
    <SEO
      title="Benefits of Yoga"
      description="Discover the physical, mental, and spiritual benefits of yoga. Learn about the 8 Limbs of Yoga, branches, pranayama techniques, and how yoga transforms well-being."
      path="/benefits"
      keywords="benefits of yoga, why yoga, yoga benefits, 8 limbs of yoga, hatha yoga, vinyasa, pranayama, meditation"
      jsonld={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Complete Guide to Yoga Benefits',
        description: 'Physical, mental, and spiritual benefits of yoga practice.',
        author: { '@type': 'Organization', name: 'Yoga Evolve' },
        about: { '@type': 'Thing', name: 'Yoga' },
      }}
    />
  )
}

export function DashboardSEO() {
  return (
    <SEO
      title="Yoga Progress Dashboard"
      description="Track your yoga journey with XP, levels, badges, streaks, and weekly activity charts. Monitor your progress across 19 achievements."
      path="/dashboard"
      keywords="yoga progress tracker, yoga achievements, yoga badges, yoga XP, yoga stats, fitness tracker"
      jsonld={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Yoga Progress Dashboard',
        description: 'Personal yoga practice analytics and achievements tracker.',
      }}
    />
  )
}

export function SessionSEO() {
  return (
    <SEO
      title="Yoga Practice Session"
      description="Active yoga session with real-time webcam pose tracking and feedback."
      path="/session"
      keywords="yoga session, practice yoga, yoga tracking, pose matching"
    />
  )
}

export function TestsSEO() {
  return (
    <SEO
      title="Yoga Knowledge Tests"
      description="Test your yoga knowledge across 10 categories with 32 quizzes. Assess your understanding of poses, philosophy, breathwork, and anatomy."
      path="/tests"
      keywords="yoga quiz, yoga knowledge test, yoga trivia, learn yoga, yoga assessment"
      jsonld={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Yoga Knowledge Tests',
        description: 'Comprehensive yoga knowledge assessment across 10 categories.',
      }}
    />
  )
}
