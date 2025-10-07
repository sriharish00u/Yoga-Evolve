export type Pose = {
  name: string
  sanskrit?: string
  level?: 'beginner' | 'intermediate' | 'advanced'
  short: string
  alignmentCues?: string[]
  modifications?: string[]
  safety?: string[]
  tags?: string[]
  steps?: string[]
  image?: string
}

export const POSES: Pose[] = [
  {
    name: 'Mountain Pose',
    sanskrit: 'Tadasana',
    level: 'beginner',
    short: 'Standing foundational posture for alignment and grounding.',
    alignmentCues: ['Stack ankles under hips', 'Lift through the crown', 'Shoulders relaxed down'],
    modifications: ['Slight bend in knees if hamstrings are tight', 'Use wall support for balance'],
    safety: ['Avoid hyperextending the knees'],
    tags: ['standing', 'alignment', 'beginner'],
    steps: [
      'Stand with feet together or hip-width apart, toes spread.',
      'Distribute weight evenly across both feet.',
      'Engage thighs, lift kneecaps, tuck tailbone slightly.',
      'Roll shoulders back and down, palms forward.',
      'Lengthen spine, gaze forward, breathe for 5-10 breaths.'
    ],
    image: 'postures/tadasana.png'
  },
  {
    name: 'Downward-Facing Dog',
    sanskrit: 'Adho Mukha Svanasana',
    level: 'beginner',
    short: 'Inverted V — stretches hamstrings and shoulders, strengthens arms.',
    alignmentCues: ['Hands shoulder-width', 'Hips lift high', 'Lengthen the spine'],
    modifications: ['Bend the knees to keep a long spine', 'Use blocks under hands'],
    safety: ['Shoulder pain — reduce load or use forearm variant'],
    tags: ['inversion', 'standing', 'shoulders'],
    steps: [
      'From hands and knees, lift hips up and back.',
      'Hands shoulder-width, feet hip-width.',
      'Press chest toward thighs, hold 5 breaths.'
    ],
    image: 'postures/adhomukhasvanasana.png'
  },
  {
    name: 'Plank Pose',
    sanskrit: 'Phalakasana',
    level: 'beginner',
    short: 'Core-strengthening posture that prepares for arm balances.',
    alignmentCues: ['Shoulders over wrists', 'Neutral spine', 'Engage core'],
    modifications: ['Drop to knees for supported plank'],
    safety: ['Wrist pain — use fists or forearms'],
    tags: ['core', 'strength'],
    steps: [
      'From all fours, extend legs back, balance on hands and toes.',
      'Keep shoulders over wrists, body in a straight line.',
      'Engage core, hold for 5 breaths.'
    ],
    image: 'postures/phalakasana.png'
  },
  {
    name: 'Warrior I',
    sanskrit: 'Virabhadrasana I',
    level: 'beginner',
    short: 'Lunge with lifted arms, strengthens legs and opens chest.',
    alignmentCues: ['Front knee over ankle', 'Hips squared forward', 'Shoulders relaxed'],
    modifications: ['Shorten stance for stability', 'Hands on hips for shoulder relief'],
    safety: ['Avoid forcing hips to square if tight', 'Knee pain — reduce bend'],
    tags: ['standing', 'strength', 'hip opener'],
    steps: [
      'Step left foot back 3-4 feet, turn out 45 degrees.',
      'Bend right knee to 90 degrees, align over ankle.',
      'Square hips forward, raise arms overhead, palms facing.',
      'Gaze upward or forward, hold 5 breaths, switch sides.'
    ],
    image: 'postures/virabhadrasana1.png'
  },
  {
    name: 'Warrior II',
    sanskrit: 'Virabhadrasana II',
    level: 'beginner',
    short: 'Strong lunge with open hips — builds stamina and alignment.',
    alignmentCues: ['Front knee over ankle', 'Back foot grounded', 'Torso upright'],
    modifications: ['Shorten stance to reduce hip strain', 'Use a chair for support'],
    safety: ['Knee instability — keep knee tracking toes, don’t force depth'],
    tags: ['standing', 'hip opener', 'strength'],
    steps: [
      'From wide stance, turn right foot out 90 degrees, left foot slightly in.',
      'Bend right knee over ankle, extend arms parallel to floor.',
      'Gaze over right hand, hold 5 breaths, switch sides.'
    ],
    image: 'postures/virabhadrasana2.png'
  },
  {
    name: 'Triangle Pose',
    sanskrit: 'Trikonasana',
    level: 'intermediate',
    short: 'Lateral stretch with long spine and open chest.',
    alignmentCues: ['Lengthen both sides of torso', 'Don’t collapse the chest', 'Stack shoulders'],
    modifications: ['Use block under lower hand', 'Micro-bend in front knee'],
    safety: ['Neck strain — look down or keep neutral'],
    tags: ['standing', 'stretch', 'balance'],
    steps: [
      'Stand with feet 3-4 feet apart, right foot out 90 degrees, left at 45 degrees.',
      'Extend arms parallel to floor.',
      'Hinge at right hip, reach right hand to shin or floor, left arm up.',
      'Gaze at left hand, hold 5 breaths, switch sides.'
    ],
    image: 'postures/trikonasana.png'
  },
  {
    name: 'Tree Pose',
    sanskrit: 'Vrksasana',
    level: 'beginner',
    short: 'Single-leg balance to cultivate stability and focus.',
    alignmentCues: ['Root through standing foot', 'Press thigh into lifted foot', 'Open the hip'],
    modifications: ['Place toes on the ankle or shin (avoid knee)'],
    safety: ['Avoid placing foot on knee joint'],
    tags: ['balance', 'standing'],
    steps: [
      'Stand, shift weight to left foot.',
      'Place right foot on inner left thigh or calf.',
      'Hands to heart or overhead.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/vrksasana.png'
  },
  {
    name: 'Bridge Pose',
    sanskrit: 'Setu Bandha Sarvangasana',
    level: 'beginner',
    short: 'Gentle backbend to open chest and strengthen the posterior chain.',
    alignmentCues: ['Press evenly through feet', 'Lift hips, lengthen tailbone'],
    modifications: ['Place block under sacrum for support', 'Keep feet hip-width'],
    safety: ['Neck compression — avoid turning head while lifted'],
    tags: ['backbend', 'strength'],
    steps: [
      'Lie on back, knees bent, feet flat.',
      'Lift hips, interlace hands under back.',
      'Hold 5 breaths.'
    ],
    image: 'postures/setubandhasarvangasana.png'
  },
  {
    name: 'Child’s Pose',
    sanskrit: 'Balasana',
    level: 'beginner',
    short: 'Resting pose that gently stretches the back and hips.',
    alignmentCues: ['Allow forehead to rest', 'Breathe into the back body'],
    modifications: ['Widen knees for belly space', 'Use bolsters under torso'],
    safety: [],
    tags: ['rest', 'release'],
    steps: [
      'Kneel, sit on heels.',
      'Fold forward, arms extended.',
      'Forehead to floor, hold 5-10 breaths.'
    ],
    image: 'postures/balasana.png'
  },
  {
    name: 'Cobra Pose',
    sanskrit: 'Bhujangasana',
    level: 'beginner',
    short: 'Backbend that lengthens the spine and opens the chest.',
    alignmentCues: ['Keep pubic bone grounded', 'Lift through the sternum, not the neck'],
    modifications: ['Keep elbows bent for low cobra', 'Engage legs to protect lower back'],
    safety: ['Lower back pain — use gentler variation'],
    tags: ['backbend', 'spine'],
    steps: [
      'Lie face down, hands under shoulders.',
      'Inhale, lift chest, keep elbows bent.',
      'Gaze forward, hold 5 breaths.'
    ],
    image: 'postures/bhujangasana.png'
  },
  {
    name: 'Seated Forward Fold',
    sanskrit: 'Paschimottanasana',
    level: 'beginner',
    short: 'Hamstring and spine stretch; encourage length before depth.',
    alignmentCues: ['Lengthen spine before folding', 'Lead with the chest, not the head'],
    modifications: ['Bend knees or use strap around feet'],
    safety: ['Avoid forcing the fold with rounded spine'],
    tags: ['seated', 'stretch'],
    steps: [
      'Sit with legs extended, feet flexed.',
      'Inhale, lengthen spine; exhale, fold forward from hips.',
      'Reach hands to feet or shins.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/paschimottanasana.png'
  },
  {
    name: 'Chair Pose',
    sanskrit: 'Utkatasana',
    level: 'beginner',
    short: 'Powerful standing posture to build heat and leg strength.',
    alignmentCues: ['Sit back into hips', 'Knees track toes', 'Lift arms overhead'],
    modifications: ['Hands at heart for less shoulder strain', 'Use wall support'],
    safety: ['Knee issues — keep shallower bend'],
    tags: ['strength', 'standing'],
    steps: [
      'Stand with feet together, bend knees as if sitting.',
      'Raise arms overhead, palms facing or touching.',
      'Sink hips back, keep chest lifted.',
      'Hold for 5-10 breaths, release.'
    ],
    image: 'postures/utkatasana.png'
  },
  {
    name: 'Corpse Pose',
    sanskrit: 'Savasana',
    level: 'beginner',
    short: 'Final relaxation to integrate practice.',
    alignmentCues: ['Let the body soften', 'Breathe naturally'],
    modifications: ['Support knees with bolster for low back comfort'],
    safety: [],
    tags: ['rest', 'integration'],
    steps: [
      'Lie flat on back, legs apart, arms at sides, palms up.',
      'Close eyes, relax muscles.',
      'Breathe naturally for 5-10 minutes.'
    ],
    image: 'postures/savasana.png'
  },
  {
    name: 'Extended Side Angle Pose',
    sanskrit: 'Parsvakonasana',
    level: 'intermediate',
    short: 'Side stretch with deep lunge, opens hips and chest.',
    alignmentCues: ['Front knee over ankle', 'Rotate chest upward', 'Extend top arm over ear'],
    modifications: ['Rest forearm on thigh', 'Use block under hand'],
    safety: ['Avoid collapsing chest', 'Knee instability — align knee with toes'],
    tags: ['standing', 'stretch', 'balance'],
    steps: [
      'From wide stance, turn right foot out, bend right knee over ankle.',
      'Place right forearm on thigh or hand on floor, extend left arm over ear.',
      'Rotate chest open, gaze up or forward.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/parsvakonasana.png'
  },
  {
    name: 'Revolved Triangle Pose',
    sanskrit: 'Parivrtta Trikonasana',
    level: 'intermediate',
    short: 'Twisting pose that strengthens legs and enhances spinal mobility.',
    alignmentCues: ['Lengthen spine before twisting', 'Keep hips level', 'Extend top arm vertically'],
    modifications: ['Use block under hand', 'Shorten stance for stability'],
    safety: ['Avoid forcing twist if spine is tight', 'Neck strain — gaze down'],
    tags: ['standing', 'twist', 'balance'],
    steps: [
      'From triangle stance, place left hand outside right foot.',
      'Twist torso, extend right arm up.',
      'Gaze at right hand, hold 5 breaths, switch sides.'
    ],
    image: 'postures/parivrttatrikonasana.png'
  },
  {
    name: 'Revolved Side Angle Pose',
    sanskrit: 'Parivrtta Parsvakonasana',
    level: 'intermediate',
    short: 'Deep spinal twist with lunge, improves balance and digestion.',
    alignmentCues: ['Front knee over ankle', 'Twist from torso', 'Press palms together'],
    modifications: ['Place back knee down', 'Use block under hand'],
    safety: ['Knee pain — reduce lunge depth', 'Avoid over-twisting neck'],
    tags: ['standing', 'twist', 'strength'],
    steps: [
      'From warrior II, place left elbow outside right knee.',
      'Press palms together, twist torso, gaze upward.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/parivrttaparsvakonasana.png'
  },
  {
    name: 'Wide-Legged Forward Bend',
    sanskrit: 'Prasarita Padottanasana',
    level: 'intermediate',
    short: 'Stretches hamstrings and calves, calms the mind.',
    alignmentCues: ['Keep feet parallel', 'Lengthen spine before folding', 'Engage quads'],
    modifications: ['Use blocks under hands', 'Bend knees slightly'],
    safety: ['Avoid rounding spine', 'Hamstring strain — don’t force depth'],
    tags: ['standing', 'stretch', 'forward bend'],
    steps: [
      'Stand with feet wide apart, toes slightly in.',
      'Hinge at hips, bring head toward floor, hands on floor or blocks.',
      'Lengthen spine, hold for 5-10 breaths.'
    ],
    image: 'postures/prasaritapadottanasana.png'
  },
  {
    name: 'Standing Forward Bend',
    sanskrit: 'Uttanasana',
    level: 'beginner',
    short: 'Deep hamstring and back stretch, promotes relaxation.',
    alignmentCues: ['Hinge at hips', 'Lengthen spine', 'Relax neck'],
    modifications: ['Bend knees for tight hamstrings', 'Use blocks under hands'],
    safety: ['Avoid forcing head down', 'Back issues — keep slight bend in knees'],
    tags: ['standing', 'forward bend', 'stretch'],
    steps: [
      'Stand, hinge at hips, bring head toward floor.',
      'Place hands on floor or shins.',
      'Hold 5-10 breaths.'
    ],
    image: 'postures/uttanasana.png'
  },
  {
    name: 'Gate Pose',
    sanskrit: 'Parighasana',
    level: 'intermediate',
    short: 'Side stretch that opens chest and stretches hamstrings.',
    alignmentCues: ['Extend leg straight', 'Keep torso long', 'Reach over extended leg'],
    modifications: ['Use block under hand', 'Bend extended knee slightly'],
    safety: ['Avoid collapsing side body', 'Hamstring strain — ease into stretch'],
    tags: ['standing', 'stretch', 'side bend'],
    steps: [
      'Kneel, extend right leg to side, toes pointing right.',
      'Reach right arm to right foot, left arm over ear.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/parighasana.png'
  },
  {
    name: 'Low Lunge',
    sanskrit: 'Anjaneyasana',
    level: 'beginner',
    short: 'Hip opener and quad stretch, improves balance.',
    alignmentCues: ['Front knee over ankle', 'Back knee grounded', 'Lift chest'],
    modifications: ['Use blocks under hands', 'Rest hands on front knee'],
    safety: ['Knee pain — pad back knee', 'Avoid over-arching lower back'],
    tags: ['standing', 'hip opener', 'stretch'],
    steps: [
      'From lunge, lower left knee to floor, right knee over ankle.',
      'Raise arms overhead, arch back slightly.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/anjaneyasana.png'
  },
  {
    name: 'Easy Pose',
    sanskrit: 'Sukhasana',
    level: 'beginner',
    short: 'Comfortable seated posture for meditation and hip opening.',
    alignmentCues: ['Sit on sit bones', 'Lengthen spine', 'Relax shoulders'],
    modifications: ['Sit on blanket for elevation', 'Use wall for back support'],
    safety: ['Knee discomfort — use props under knees'],
    tags: ['seated', 'meditation', 'hip opener'],
    steps: [
      'Sit on floor with legs crossed, shins parallel.',
      'Place hands on knees, palms up or down.',
      'Lengthen spine, relax shoulders.',
      'Close eyes, breathe deeply for 1-5 minutes.'
    ],
    image: 'postures/sukhasana.png'
  },
  {
    name: 'Staff Pose',
    sanskrit: 'Dandasana',
    level: 'beginner',
    short: 'Seated posture for spinal alignment and core strength.',
    alignmentCues: ['Sit on sit bones', 'Flex feet', 'Press thighs down'],
    modifications: ['Sit on folded blanket', 'Use wall for back support'],
    safety: ['Hamstring tightness — slightly bend knees'],
    tags: ['seated', 'alignment', 'core'],
    steps: [
      'Sit with legs extended forward, feet flexed.',
      'Place hands beside hips, fingers forward.',
      'Lengthen spine, press thighs down.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/dandasana.png'
  },
  {
    name: 'Bound Angle Pose',
    sanskrit: 'Baddha Konasana',
    level: 'beginner',
    short: 'Hip opener that stretches inner thighs and groin.',
    alignmentCues: ['Soles together', 'Lengthen spine', 'Gently press knees down'],
    modifications: ['Sit on blanket', 'Use blocks under knees'],
    safety: ['Avoid forcing knees down', 'Hip pain — ease into stretch'],
    tags: ['seated', 'hip opener', 'stretch'],
    steps: [
      'Sit with soles of feet together, knees out.',
      'Hold feet, lengthen spine.',
      'Gently press knees down with elbows if comfortable.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/baddhakonasana.png'
  },
  {
    name: 'Head-to-Knee Forward Bend',
    sanskrit: 'Janu Sirsasana',
    level: 'intermediate',
    short: 'Asymmetrical forward bend, stretches hamstrings and spine.',
    alignmentCues: ['Square hips to extended leg', 'Lengthen spine before folding', 'Keep foot flexed'],
    modifications: ['Use strap around foot', 'Bend extended knee slightly'],
    safety: ['Avoid rounding spine', 'Hamstring strain — don’t force reach'],
    tags: ['seated', 'forward bend', 'stretch'],
    steps: [
      'Sit with right leg extended, left foot to inner right thigh.',
      'Inhale lengthen, exhale fold over right leg.',
      'Reach hands to foot or shin.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/janusirsasana.png'
  },
  {
    name: 'Wide-Angle Seated Forward Bend',
    sanskrit: 'Upavistha Konasana',
    level: 'intermediate',
    short: 'Deep stretch for inner thighs and hamstrings.',
    alignmentCues: ['Keep toes pointing up', 'Lengthen spine before folding', 'Engage quads'],
    modifications: ['Use bolster under torso', 'Bend knees slightly'],
    safety: ['Avoid forcing fold', 'Hamstring strain — ease into stretch'],
    tags: ['seated', 'forward bend', 'stretch'],
    steps: [
      'Sit with legs spread wide, toes pointing up.',
      'Inhale, lengthen spine; exhale, fold forward from hips.',
      'Place hands on floor or reach for feet.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/upavisthakonasana.png'
  },
  {
    name: 'Three-Limbed Forward Bend',
    sanskrit: 'Triang Mukhaikapada Paschimottanasana',
    level: 'intermediate',
    short: 'Asymmetrical forward bend with spinal stretch.',
    alignmentCues: ['Square hips to extended leg', 'Keep spine long', 'Flex extended foot'],
    modifications: ['Use strap around foot', 'Sit on blanket for elevation'],
    safety: ['Avoid rounding spine', 'Knee discomfort — use prop support'],
    tags: ['seated', 'forward bend', 'stretch'],
    steps: [
      'Sit with right leg bent, heel near pelvis, left leg extended.',
      'Inhale, lengthen spine; exhale, fold over left leg.',
      'Reach for foot or shin, hold for 5 breaths, switch sides.'
    ],
    image: 'postures/triangmukhaikapada.png'
  },
  {
    name: 'Marichi’s Pose I',
    sanskrit: 'Marichyasana I',
    level: 'intermediate',
    short: 'Seated twist with forward bend, aids digestion.',
    alignmentCues: ['Lengthen spine before twisting', 'Keep bent knee grounded', 'Shoulders relaxed'],
    modifications: ['Use strap to bind', 'Sit on blanket'],
    safety: ['Avoid forcing bind', 'Back pain — reduce twist'],
    tags: ['seated', 'twist', 'forward bend'],
    steps: [
      'Sit with right leg bent, foot flat, left leg extended.',
      'Wrap right arm around right knee, left hand back.',
      'Twist right, hold for 5 breaths, switch sides.'
    ],
    image: 'postures/marichyasana1.png'
  },
  {
    name: 'Marichi’s Pose II',
    sanskrit: 'Marichyasana II',
    level: 'advanced',
    short: 'Deep twist with lotus leg, enhances spinal mobility.',
    alignmentCues: ['Keep lotus leg stable', 'Lengthen spine', 'Twist from torso'],
    modifications: ['Skip lotus, bend knee', 'Use strap for bind'],
    safety: ['Knee pain — avoid lotus position', 'Avoid forcing twist'],
    tags: ['seated', 'twist', 'advanced'],
    steps: [
      'Sit with right leg in lotus, left leg bent, foot flat.',
      'Wrap left arm around left knee, right hand back.',
      'Twist left, hold for 5 breaths, switch sides.'
    ],
    image: 'postures/marichyasana2.png'
  },
  {
    name: 'Marichi’s Pose IV',
    sanskrit: 'Marichyasana IV',
    level: 'advanced',
    short: 'Advanced twist with lotus and bind, opens hips.',
    alignmentCues: ['Stable lotus leg', 'Lengthen spine', 'Twist evenly'],
    modifications: ['Skip lotus, bend knee', 'Use strap for bind'],
    safety: ['Knee pain — avoid lotus', 'Back strain — reduce twist'],
    tags: ['seated', 'twist', 'advanced'],
    steps: [
      'Sit, right leg in lotus, left leg bent, foot flat.',
      'Wrap right arm around back, left arm around left knee.',
      'Twist left, hold 5 breaths, switch sides.'
    ],
    image: 'postures/marichyasana4.png'
  },
  {
    name: 'Reclining Bound Angle Pose',
    sanskrit: 'Supta Baddha Konasana',
    level: 'beginner',
    short: 'Restorative pose that opens hips and chest.',
    alignmentCues: ['Soles together', 'Relax knees outward', 'Keep spine neutral'],
    modifications: ['Use blocks under knees', 'Place bolster under back'],
    safety: ['Hip discomfort — use more support', 'Avoid forcing knees down'],
    tags: ['supine', 'restorative', 'hip opener'],
    steps: [
      'Lie on back, soles together, knees out.',
      'Place arms at sides or overhead.',
      'Relax for 5-10 breaths.'
    ],
    image: 'postures/suptabaddhakonasana.png'
  },
  {
    name: 'Happy Baby Pose',
    sanskrit: 'Ananda Balasana',
    level: 'beginner',
    short: 'Gentle hip opener, releases lower back.',
    alignmentCues: ['Keep spine flat', 'Hold outer feet', 'Knees wide'],
    modifications: ['Hold thighs instead of feet', 'Use strap around feet'],
    safety: ['Avoid pulling neck', 'Lower back pain — reduce pull'],
    tags: ['supine', 'hip opener', 'restorative'],
    steps: [
      'Lie on back, draw knees to chest.',
      'Grab outer feet, knees wide.',
      'Gently rock side to side, hold for 5 breaths.'
    ],
    image: 'postures/anandabalasana.png'
  },
  {
    name: 'Legs-Up-The-Wall Pose',
    sanskrit: 'Viparita Karani',
    level: 'beginner',
    short: 'Restorative inversion to relieve tired legs.',
    alignmentCues: ['Hips close to wall', 'Legs straight up', 'Relax arms'],
    modifications: ['Use bolster under hips', 'Bend knees slightly'],
    safety: ['Avoid if high blood pressure', 'Neck strain — keep head neutral'],
    tags: ['supine', 'restorative', 'inversion'],
    steps: [
      'Sit next to wall, swing legs up wall.',
      'Lie back, hips close to wall.',
      'Arms at sides, relax for 5-10 minutes.'
    ],
    image: 'postures/viparitakarani.png'
  },
  {
    name: 'Reclining Spinal Twist',
    sanskrit: 'Jathara Parivartanasana',
    level: 'beginner',
    short: 'Gentle twist to aid digestion and relax back.',
    alignmentCues: ['Keep shoulders grounded', 'Drop knees gently', 'Gaze opposite twist'],
    modifications: ['Use bolster under knees', 'Keep one leg straight'],
    safety: ['Avoid forcing twist', 'Back pain — reduce range'],
    tags: ['supine', 'twist', 'restorative'],
    steps: [
      'Lie on back, arms out in T.',
      'Draw knees to chest, drop to right.',
      'Gaze left, hold 5 breaths, switch sides.'
    ],
    image: 'postures/jatharaparivartanasana.png'
  },
  {
    name: 'Reclining Hand-to-Big-Toe Pose',
    sanskrit: 'Supta Padangusthasana',
    level: 'beginner',
    short: 'Hamstring stretch that relieves lower back tension.',
    alignmentCues: ['Keep extended leg grounded', 'Hold toe or strap', 'Spine flat'],
    modifications: ['Use strap around foot', 'Bend supporting knee'],
    safety: ['Avoid overextending leg', 'Hamstring strain — ease into stretch'],
    tags: ['supine', 'stretch', 'restorative'],
    steps: [
      'Lie on back, lift right leg, hold big toe with right hand.',
      'Extend leg toward ceiling, keep left leg on floor.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/suptapadangusthasana.png'
  },
  {
    name: 'Locust Pose',
    sanskrit: 'Salabhasana',
    level: 'beginner',
    short: 'Back strengthener, improves posture and energy.',
    alignmentCues: ['Lift chest and legs evenly', 'Keep neck neutral', 'Engage glutes'],
    modifications: ['Lift one leg at a time', 'Keep arms by sides'],
    safety: ['Lower back pain — lift less', 'Neck strain — gaze down'],
    tags: ['prone', 'backbend', 'strength'],
    steps: [
      'Lie face down, arms at sides.',
      'Inhale, lift head, chest, arms, and legs.',
      'Hold for 5 breaths.'
    ],
    image: 'postures/salabhasana.png'
  },
  {
    name: 'Bow Pose',
    sanskrit: 'Dhanurasana',
    level: 'intermediate',
    short: 'Deep backbend, stretches front body, boosts energy.',
    alignmentCues: ['Grab ankles, not feet', 'Lift thighs and chest', 'Keep neck neutral'],
    modifications: ['Use strap around ankles', 'Lift chest only for beginners'],
    safety: ['Avoid if lower back issues', 'Don’t force lift'],
    tags: ['prone', 'backbend', 'stretch'],
    steps: [
      'Lie face down, bend knees, grab ankles.',
      'Inhale, lift chest and thighs.',
      'Hold 5 breaths.'
    ],
    image: 'postures/dhanurasana.png'
  },
  {
    name: 'Crocodile Pose',
    sanskrit: 'Makarasana',
    level: 'beginner',
    short: 'Restorative prone pose, aids breathing and relaxation.',
    alignmentCues: ['Forehead on hands', 'Legs relaxed', 'Breathe deeply'],
    modifications: ['Use blanket under chest', 'Widen legs for comfort'],
    safety: ['Neck discomfort — adjust hand position'],
    tags: ['prone', 'restorative', 'relaxation'],
    steps: [
      'Lie face down, forehead on stacked hands.',
      'Legs apart, heels in.',
      'Breathe deeply for 5-10 minutes.'
    ],
    image: 'postures/makarasana.png'
  },
  {
    name: 'Half Locust Pose',
    sanskrit: 'Ardha Shalabhasana',
    level: 'beginner',
    short: 'Asymmetrical back strengthener, improves balance.',
    alignmentCues: ['Lift one leg and opposite arm', 'Keep pelvis grounded', 'Gaze down'],
    modifications: ['Lift only leg or arm', 'Use cushion under hips'],
    safety: ['Avoid over-lifting', 'Back pain — reduce range'],
    tags: ['prone', 'backbend', 'strength'],
    steps: [
      'Lie face down.',
      'Lift right leg and left arm.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/ardhashalabhasana.png'
  },
  {
    name: 'Eagle Pose',
    sanskrit: 'Garudasana',
    level: 'intermediate',
    short: 'Balancing pose that stretches shoulders and hips.',
    alignmentCues: ['Cross thighs tightly', 'Wrap arms fully', 'Sink into standing leg'],
    modifications: ['Rest toes on floor', 'Cross arms without wrapping'],
    safety: ['Knee pain — avoid deep bend', 'Balance issues — use wall'],
    tags: ['balance', 'standing', 'stretch'],
    steps: [
      'Stand, cross right thigh over left, hook foot if possible.',
      'Cross left arm over right, bend elbows, palms together.',
      'Bend standing knee, hold 5 breaths, switch sides.'
    ],
    image: 'postures/garudasana.png'
  },
  {
    name: 'Side Plank Pose',
    sanskrit: 'Vasisthasana',
    level: 'intermediate',
    short: 'Strengthens arms and core, improves balance.',
    alignmentCues: ['Stack hips and shoulders', 'Engage core', 'Lift top arm straight'],
    modifications: ['Drop bottom knee to floor', 'Rest top arm on hip'],
    safety: ['Wrist pain — use forearm', 'Avoid collapsing hips'],
    tags: ['balance', 'core', 'strength'],
    steps: [
      'From plank, shift to right hand and outer foot.',
      'Stack left foot on right, raise left arm.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/vasisthasana.png'
  },
  {
    name: 'Crow Pose',
    sanskrit: 'Bakasana',
    level: 'intermediate',
    short: 'Arm balance that builds strength and confidence.',
    alignmentCues: ['Knees high on upper arms', 'Lean forward', 'Engage core'],
    modifications: ['Keep toes on floor', 'Use block under feet'],
    safety: ['Wrist pain — spread fingers wide', 'Avoid falling on head'],
    tags: ['balance', 'arm balance', 'core'],
    steps: [
      'Squat, place hands on floor shoulder-width.',
      'Bend elbows, place knees on upper arms.',
      'Lift feet, balance on hands, hold 5 breaths.'
    ],
    image: 'postures/bakasana.png'
  },
  {
    name: 'Dancer’s Pose',
    sanskrit: 'Natarajasana',
    level: 'intermediate',
    short: 'Balancing backbend, stretches quads and shoulders.',
    alignmentCues: ['Kick foot into hand', 'Extend opposite arm', 'Keep hips square'],
    modifications: ['Use strap to hold foot', 'Hold wall for balance'],
    safety: ['Avoid over-arching back', 'Knee pain — reduce kick'],
    tags: ['balance', 'backbend', 'stretch'],
    steps: [
      'Stand, grab right ankle with right hand.',
      'Extend left arm forward, kick foot into hand.',
      'Hinge forward, hold 5 breaths, switch sides.'
    ],
    image: 'postures/natarajasana.png'
  },
  {
    name: 'Side Crow Pose',
    sanskrit: 'Parsva Bakasana',
    level: 'advanced',
    short: 'Twisting arm balance, strengthens core and arms.',
    alignmentCues: ['Twist torso fully', 'Knees on one arm', 'Lean forward'],
    modifications: ['Keep toes on floor', 'Use block under feet'],
    safety: ['Wrist pain — spread fingers', 'Avoid falling on head'],
    tags: ['balance', 'arm balance', 'twist'],
    steps: [
      'Squat, twist torso to right, place hands on floor.',
      'Place knees on left upper arm, bend elbows.',
      'Lift feet, balance, hold 5 breaths, switch sides.'
    ],
    image: 'postures/parsvabakasana.png'
  },
  {
    name: 'Crow Pose (Knees Bent)',
    sanskrit: 'Kakasana',
    level: 'intermediate',
    short: 'Beginner-friendly arm balance, strengthens wrists.',
    alignmentCues: ['Knees on upper arms', 'Lean forward', 'Engage core'],
    modifications: ['Keep toes on floor', 'Use block under feet'],
    safety: ['Wrist pain — spread fingers', 'Avoid falling forward'],
    tags: ['balance', 'arm balance', 'core'],
    steps: [
      'Squat, place hands on floor shoulder-width.',
      'Bend elbows, place knees on upper arms, keep knees bent.',
      'Lift feet, balance, hold 5 breaths.'
    ],
    image: 'postures/kakasana.png'
  },
  {
    name: 'Scale Pose',
    sanskrit: 'Tulasana',
    level: 'advanced',
    short: 'Arm balance with lotus, strengthens core and arms.',
    alignmentCues: ['Press hands firmly', 'Lift hips', 'Engage core'],
    modifications: ['Use cross-legged position', 'Place blocks under hands'],
    safety: ['Knee pain — avoid lotus', 'Wrist strain — use props'],
    tags: ['balance', 'arm balance', 'advanced'],
    steps: [
      'Sit in lotus or cross-legged, place hands beside hips.',
      'Press hands down, lift hips and legs off floor.',
      'Balance, hold for 5 breaths.'
    ],
    image: 'postures/tulasana.png'
  },
  {
    name: 'Flying Pigeon Pose',
    sanskrit: 'Eka Pada Galavasana',
    level: 'advanced',
    short: 'Complex arm balance with hip opener.',
    alignmentCues: ['Shin on upper arms', 'Extend back leg', 'Lean forward'],
    modifications: ['Keep back toes on floor', 'Use blocks under hands'],
    safety: ['Wrist pain — spread fingers', 'Avoid falling forward'],
    tags: ['balance', 'arm balance', 'hip opener'],
    steps: [
      'Stand, place right shin over left upper arm.',
      'Bend elbows, lean forward, extend left leg back.',
      'Balance on hands, hold 5 breaths, switch sides.'
    ],
    image: 'postures/ekapadagalavasana.png'
  },
  {
    name: 'Half Moon Pose',
    sanskrit: 'Ardha Chandrasana',
    level: 'intermediate',
    short: 'Balancing pose with side stretch, strengthens legs.',
    alignmentCues: ['Lift leg parallel to floor', 'Stack hips', 'Extend top arm'],
    modifications: ['Use block under hand', 'Rest back against wall'],
    safety: ['Avoid locking standing knee', 'Balance issues — use support'],
    tags: ['balance', 'standing', 'stretch'],
    steps: [
      'From triangle, bend right knee, place right hand on floor.',
      'Lift left leg parallel to floor, extend left arm up.',
      'Gaze at floor or up, hold 5 breaths, switch sides.'
    ],
    image: 'postures/ardhachandrasana.png'
  },
  {
    name: 'Shoulder Stand',
    sanskrit: 'Sarvangasana',
    level: 'intermediate',
    short: 'Inversion that stimulates thyroid and calms mind.',
    alignmentCues: ['Lift legs vertically', 'Support lower back', 'Keep neck neutral'],
    modifications: ['Use blankets under shoulders', 'Bend knees if needed'],
    safety: ['Neck pain — avoid or use support', 'High blood pressure — skip'],
    tags: ['inversion', 'strength', 'calming'],
    steps: [
      'Lie on back, lift legs overhead.',
      'Support lower back with hands, elbows on floor.',
      'Extend legs up, hold 5-10 breaths.'
    ],
    image: 'postures/sarvangasana.png'
  },
  {
    name: 'Plow Pose',
    sanskrit: 'Halasana',
    level: 'intermediate',
    short: 'Inversion that stretches spine and calms nervous system.',
    alignmentCues: ['Toes touch floor behind head', 'Keep neck neutral', 'Support back'],
    modifications: ['Use blocks under feet', 'Bend knees to chest'],
    safety: ['Neck strain — use props', 'Avoid if high blood pressure'],
    tags: ['inversion', 'stretch', 'calming'],
    steps: [
      'From shoulder stand, lower toes to floor behind head.',
      'Hands interlocked or supporting back.',
      'Hold 5 breaths.'
    ],
    image: 'postures/halasana.png'
  },
  {
    name: 'Headstand',
    sanskrit: 'Sirsasana',
    level: 'advanced',
    short: 'Inversion that increases blood flow to brain, builds focus.',
    alignmentCues: ['Crown on floor', 'Elbows under shoulders', 'Lift legs straight'],
    modifications: ['Practice against wall', 'Keep knees bent'],
    safety: ['Neck pain — avoid', 'Use spotter for beginners'],
    tags: ['inversion', 'balance', 'advanced'],
    steps: [
      'Kneel, interlace fingers, place crown on floor.',
      'Lift knees, walk feet in.',
      'Lift legs up, balance, hold 5-10 breaths.'
    ],
    image: 'postures/sirsasana.png'
  },
  {
    name: 'Forearm Stand',
    sanskrit: 'Pincha Mayurasana',
    level: 'advanced',
    short: 'Inversion that strengthens arms and opens shoulders.',
    alignmentCues: ['Elbows under shoulders', 'Lift hips high', 'Engage core'],
    modifications: ['Practice against wall', 'Keep one leg down'],
    safety: ['Shoulder pain — avoid', 'Use spotter for beginners'],
    tags: ['inversion', 'balance', 'advanced'],
    steps: [
      'Forearms on floor, elbows under shoulders.',
      'Walk feet in, lift one leg, then both.',
      'Balance, hold 5 breaths.'
    ],
    image: 'postures/pinchamayurasana.png'
  },
  {
    name: 'Handstand',
    sanskrit: 'Adho Mukha Vrksasana',
    level: 'advanced',
    short: 'Full-body inversion, builds strength and balance.',
    alignmentCues: ['Hands shoulder-width', 'Stack hips over shoulders', 'Engage core'],
    modifications: ['Practice against wall', 'Keep one leg down'],
    safety: ['Wrist pain — use padding', 'Avoid if shoulder issues'],
    tags: ['inversion', 'balance', 'advanced'],
    steps: [
      'Place hands shoulder-width on floor, facing wall.',
      'Kick one leg up, then the other, balance against wall.',
      'Keep arms straight, hold for 5-10 breaths.'
    ],
    image: 'postures/adhomukhavrksasana.png'
  },
  {
    name: 'Camel Pose',
    sanskrit: 'Ustrasana',
    level: 'intermediate',
    short: 'Deep backbend that opens chest and boosts mood.',
    alignmentCues: ['Hips over knees', 'Lift chest', 'Keep neck neutral'],
    modifications: ['Hands on lower back', 'Tuck toes under'],
    safety: ['Lower back pain — reduce depth', 'Neck strain — gaze forward'],
    tags: ['backbend', 'stretch', 'energy'],
    steps: [
      'Kneel, hands on lower back.',
      'Arch back, reach for heels.',
      'Head back if comfortable, hold 5 breaths.'
    ],
    image: 'postures/ustrasana.png'
  },
  {
    name: 'Wheel Pose',
    sanskrit: 'Urdhva Dhanurasana',
    level: 'advanced',
    short: 'Full backbend that strengthens arms and opens heart.',
    alignmentCues: ['Hands by ears', 'Press evenly through feet', 'Lift hips high'],
    modifications: ['Use blocks under hands', 'Practice bridge pose instead'],
    safety: ['Shoulder pain — avoid', 'Lower back issues — reduce lift'],
    tags: ['backbend', 'strength', 'advanced'],
    steps: [
      'Lie on back, hands by ears, feet flat.',
      'Press up, straighten arms and legs.',
      'Hold 5 breaths.'
    ],
    image: 'postures/urdhvadhanurasana.png'
  },
  {
    name: 'Fish Pose',
    sanskrit: 'Matsyasana',
    level: 'intermediate',
    short: 'Backbend that opens throat and chest, aids breathing.',
    alignmentCues: ['Crown on floor', 'Lift chest', 'Extend legs'],
    modifications: ['Use bolster under back', 'Keep knees bent'],
    safety: ['Neck pain — use support', 'Avoid forcing head back'],
    tags: ['backbend', 'stretch', 'chest opener'],
    steps: [
      'Lie on back, legs extended.',
      'Lift chest, place crown on floor.',
      'Hands under hips, hold 5 breaths.'
    ],
    image: 'postures/matsyasana.png'
  },
  {
    name: 'Sphinx Pose',
    sanskrit: 'Sphuxtasana',
    level: 'beginner',
    short: 'Gentle backbend, strengthens spine, opens chest.',
    alignmentCues: ['Forearms grounded', 'Lift chest', 'Relax glutes'],
    modifications: ['Use blanket under hips', 'Rest chest lower'],
    safety: ['Lower back pain — reduce lift', 'Neck strain — gaze down'],
    tags: ['backbend', 'prone', 'beginner'],
    steps: [
      'Lie prone, forearms on floor.',
      'Lift chest, gaze forward.',
      'Hold 5 breaths.'
    ],
    image: 'postures/sphuxtasana.png'
  },
  {
    name: 'Upward-Facing Dog',
    sanskrit: 'Urdhva Mukha Svanasana',
    level: 'intermediate',
    short: 'Backbend that opens chest and strengthens arms.',
    alignmentCues: ['Press hands firmly', 'Lift thighs off floor', 'Shoulders away from ears'],
    modifications: ['Keep thighs on floor for cobra', 'Use blocks under hands'],
    safety: ['Lower back pain — reduce lift', 'Wrist pain — use padding'],
    tags: ['backbend', 'prone', 'strength'],
    steps: [
      'Lie prone, hands under shoulders.',
      'Press up, straighten arms, lift thighs off floor.',
      'Gaze forward, hold 5 breaths.'
    ],
    image: 'postures/urdhvamukhasvanasana.png'
  },
  {
    name: 'Pigeon Pose (Backbend)',
    sanskrit: 'Kapotasana',
    level: 'advanced',
    short: 'Deep backbend that opens chest and hips.',
    alignmentCues: ['Hips square', 'Lift chest', 'Reach for feet'],
    modifications: ['Use blocks under hands', 'Practice half pigeon'],
    safety: ['Back pain — reduce depth', 'Knee issues — use support'],
    tags: ['backbend', 'hip opener', 'advanced'],
    steps: [
      'Kneel, lean back, place hands near feet.',
      'Arch back, bring head toward feet.',
      'Hold 5 breaths.'
    ],
    image: 'postures/kapotasana.png'
  },
  {
    name: 'Bharadvaja’s Twist',
    sanskrit: 'Bharadvajasana',
    level: 'beginner',
    short: 'Gentle seated twist, improves spinal flexibility.',
    alignmentCues: ['Lengthen spine', 'Twist from torso', 'Keep hips grounded'],
    modifications: ['Sit on blanket', 'Use hand on knee instead of bind'],
    safety: ['Avoid forcing twist', 'Back pain — reduce range'],
    tags: ['twist', 'seated', 'beginner'],
    steps: [
      'Sit with legs extended, bend knees to left.',
      'Twist right, hand behind, left on knee.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/bharadvajasana.png'
  },
  {
    name: 'Half Lord of the Fishes',
    sanskrit: 'Ardha Matsyendrasana',
    level: 'intermediate',
    short: 'Deep spinal twist, massages organs, energizes spine.',
    alignmentCues: ['Lengthen spine', 'Twist from torso', 'Keep hips square'],
    modifications: ['Use strap for bind', 'Sit on blanket'],
    safety: ['Avoid forcing twist', 'Knee pain — adjust foot placement'],
    tags: ['twist', 'seated', 'stretch'],
    steps: [
      'Sit, right foot over left thigh.',
      'Twist left, elbow outside right knee.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/ardhamatsyendrasana.png'
  },
  {
    name: 'Marichi’s Pose III',
    sanskrit: 'Marichyasana III',
    level: 'intermediate',
    short: 'Seated spinal twist, stimulates digestion.',
    alignmentCues: ['Lengthen spine', 'Twist from torso', 'Keep bent knee grounded'],
    modifications: ['Use strap for bind', 'Sit on blanket'],
    safety: ['Avoid forcing twist', 'Back pain — reduce range'],
    tags: ['twist', 'seated', 'stretch'],
    steps: [
      'Sit, bend right knee, foot flat.',
      'Twist left, elbow outside knee.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/marichyasana3.png'
  },
  {
    name: 'Reclining Twist',
    sanskrit: 'Supta Parivartanasana',
    level: 'beginner',
    short: 'Gentle supine twist, aids digestion and relaxation.',
    alignmentCues: ['Keep shoulders grounded', 'Drop knees gently', 'Gaze opposite twist'],
    modifications: ['Use bolster under knees', 'Keep one leg straight'],
    safety: ['Avoid forcing twist', 'Back pain — reduce range'],
    tags: ['twist', 'supine', 'restorative'],
    steps: [
      'Lie back, knees to chest.',
      'Drop knees right, arms out.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/suptaparivartanasana.png'
  },
  {
    name: 'Supported Corpse Pose',
    sanskrit: 'Supported Savasana',
    level: 'beginner',
    short: 'Deep relaxation with support for ultimate rest.',
    alignmentCues: ['Let body soften', 'Support knees', 'Breathe naturally'],
    modifications: ['Use bolster under knees', 'Blanket under head'],
    safety: [],
    tags: ['restorative', 'supine', 'relaxation'],
    steps: [
      'Lie back with bolster under knees.',
      'Arms out, eyes closed.',
      'Relax for 10 minutes.'
    ],
    image: 'postures/supportedsavasana.png'
  },
  {
    name: 'Reclining Hero Pose',
    sanskrit: 'Supta Virasana',
    level: 'intermediate',
    short: 'Deep quad stretch, promotes relaxation.',
    alignmentCues: ['Sit between heels', 'Recline slowly', 'Keep spine long'],
    modifications: ['Use bolster under back', 'Keep knees slightly apart'],
    safety: ['Knee pain — avoid or use props', 'Lower back strain — reduce recline'],
    tags: ['restorative', 'supine', 'stretch'],
    steps: [
      'Sit between heels, lie back on bolster.',
      'Arms overhead.',
      'Hold 5 minutes.'
    ],
    image: 'postures/suptavirasana.png'
  },
  {
    name: 'Supported Fish Pose',
    sanskrit: 'Supported Matsyasana',
    level: 'beginner',
    short: 'Restorative chest opener, relieves tension.',
    alignmentCues: ['Block under upper back', 'Relax arms', 'Keep neck neutral'],
    modifications: ['Use rolled blanket instead of block', 'Keep knees bent'],
    safety: ['Neck pain — adjust head position', 'Avoid forcing chest lift'],
    tags: ['restorative', 'backbend', 'chest opener'],
    steps: [
      'Place block under upper back.',
      'Lie back, head down.',
      'Relax arms, hold 5-10 breaths.'
    ],
    image: 'postures/supportedmatsyasana.png'
  },
  {
    name: 'Wide Child’s Pose',
    sanskrit: 'Prasarita Balasana',
    level: 'beginner',
    short: 'Restorative pose, opens hips and relaxes back.',
    alignmentCues: ['Widen knees', 'Forehead to floor', 'Extend arms'],
    modifications: ['Use bolster under torso', 'Rest arms by sides'],
    safety: ['Knee discomfort — use padding', 'Avoid forcing stretch'],
    tags: ['restorative', 'stretch', 'relaxation'],
    steps: [
      'Kneel, spread knees wide, fold forward.',
      'Extend arms forward.',
      'Hold 5-10 breaths.'
    ],
    image: 'postures/prasaritabalasana.png'
  },
  {
    name: 'Cow Face Pose',
    sanskrit: 'Gomukhasana',
    level: 'intermediate',
    short: 'Hip and shoulder opener, improves posture.',
    alignmentCues: ['Stack knees', 'Lengthen spine', 'Clasp hands if possible'],
    modifications: ['Use strap for arm bind', 'Sit on blanket'],
    safety: ['Knee pain — use support', 'Shoulder strain — avoid bind'],
    tags: ['seated', 'hip opener', 'shoulder stretch'],
    steps: [
      'Sit, stack right knee over left, feet near hips.',
      'Raise right arm, bend elbow, reach hand down back.',
      'Reach left arm behind, clasp hands if possible.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/gomukhasana.png'
  },
  {
    name: 'Hero Pose',
    sanskrit: 'Virasana',
    level: 'beginner',
    short: 'Seated pose that stretches quads and ankles.',
    alignmentCues: ['Sit between heels', 'Lengthen spine', 'Hands on thighs'],
    modifications: ['Sit on block', 'Use blanket under shins'],
    safety: ['Knee pain — use props', 'Ankle discomfort — adjust position'],
    tags: ['seated', 'stretch', 'beginner'],
    steps: [
      'Kneel, sit between heels.',
      'Place hands on thighs, lengthen spine.',
      'Hold for 5-10 breaths.'
    ],
    image: 'postures/virasana.png'
  },
  {
    name: 'Accomplished Pose',
    sanskrit: 'Siddhasana',
    level: 'beginner',
    short: 'Seated meditation pose, opens hips.',
    alignmentCues: ['Heels near perineum', 'Lengthen spine', 'Hands on knees'],
    modifications: ['Sit on blanket', 'Use cross-legged position'],
    safety: ['Knee discomfort — use props', 'Avoid forcing heel placement'],
    tags: ['seated', 'meditation', 'beginner'],
    steps: [
      'Sit, place right heel near perineum, left heel over right.',
      'Rest hands on knees, palms up.',
      'Lengthen spine, hold for 1-5 minutes.'
    ],
    image: 'postures/siddhasana.png'
  },
  {
    name: 'Lotus Pose',
    sanskrit: 'Padmasana',
    level: 'intermediate',
    short: 'Classic meditation pose, deeply opens hips.',
    alignmentCues: ['Feet on thighs', 'Lengthen spine', 'Hands on knees'],
    modifications: ['Use half lotus', 'Sit on blanket'],
    safety: ['Knee pain — avoid forcing', 'Use props for support'],
    tags: ['seated', 'meditation', 'hip opener'],
    steps: [
      'Sit, place right foot on left thigh, left foot on right thigh.',
      'Rest hands on knees, palms up.',
      'Lengthen spine, hold for 1-5 minutes.'
    ],
    image: 'postures/padmasana.png'
  },
  {
    name: 'Half Lotus Pose',
    sanskrit: 'Ardha Padmasana',
    level: 'beginner',
    short: 'Preparatory pose for lotus, opens hips.',
    alignmentCues: ['One foot on thigh', 'Lengthen spine', 'Hands on knees'],
    modifications: ['Sit on blanket', 'Use cross-legged position'],
    safety: ['Knee pain — avoid forcing', 'Use props for comfort'],
    tags: ['seated', 'meditation', 'hip opener'],
    steps: [
      'Sit, place right foot on left thigh, left foot under right thigh.',
      'Rest hands on knees, palms up.',
      'Lengthen spine, hold for 5-10 breaths, switch sides.'
    ],
    image: 'postures/ardhapadmasana.png'
  },
  {
    name: 'Thread the Needle',
    sanskrit: 'Thread the Needle',
    level: 'beginner',
    short: 'Gentle shoulder and upper back stretch.',
    alignmentCues: ['Thread arm under body', 'Rest shoulder on floor', 'Keep hips square'],
    modifications: ['Use bolster under chest', 'Rest on forearm'],
    safety: ['Shoulder pain — reduce twist', 'Neck strain — keep neutral'],
    tags: ['supine', 'stretch', 'shoulder opener'],
    steps: [
      'Lie on back, thread right arm under body, rest shoulder on floor.',
      'Place right knee over left, twist gently.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/threadtheneedle.png'
  },
  {
    name: 'Supported Bridge Pose',
    sanskrit: 'Supported Setu Bandha Sarvangasana',
    level: 'beginner',
    short: 'Restorative backbend, opens chest, calms mind.',
    alignmentCues: ['Hips on block', 'Press feet evenly', 'Relax arms'],
    modifications: ['Use bolster instead of block', 'Keep feet wider'],
    safety: ['Lower back pain — adjust block height', 'Avoid over-lifting'],
    tags: ['restorative', 'backbend', 'relaxation'],
    steps: [
      'Lie on back, knees bent, feet flat.',
      'Place block under sacrum, lift hips.',
      'Relax arms, hold for 5-10 minutes.'
    ],
    image: 'postures/supportedsetubandhasana.png'
  },
  {
    name: 'Pigeon Pose',
    sanskrit: 'Eka Pada Rajakapotasana',
    level: 'intermediate',
    short: 'Deep hip opener, stretches thighs and groin.',
    alignmentCues: ['Square hips', 'Lengthen spine', 'Rest forehead if folding'],
    modifications: ['Use block under hip', 'Stay upright instead of folding'],
    safety: ['Knee pain — use support', 'Avoid forcing hips square'],
    tags: ['seated', 'hip opener', 'stretch'],
    steps: [
      'From all fours, bring right shin forward, left leg back.',
      'Square hips, fold forward over shin.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/ekapadarajakapotasana.png'
  },
  {
    name: 'Full Locust Pose',
    sanskrit: 'Shalabhasana B',
    level: 'intermediate',
    short: 'Strengthens entire back, improves posture.',
    alignmentCues: ['Lift chest and legs', 'Extend arms back', 'Keep neck neutral'],
    modifications: ['Lift one side at a time', 'Keep arms by sides'],
    safety: ['Lower back pain — reduce lift', 'Neck strain — gaze down'],
    tags: ['prone', 'backbend', 'strength'],
    steps: [
      'Lie face down, arms extended back.',
      'Lift chest, legs, and arms simultaneously.',
      'Hold 5 breaths.'
    ],
    image: 'postures/shalabhasanab.png'
  },
  {
    name: 'Four-Limbed Staff Pose',
    sanskrit: 'Chaturanga Dandasana',
    level: 'intermediate',
    short: 'Strengthens arms and core, builds endurance.',
    alignmentCues: ['Elbows over wrists', 'Keep body straight', 'Engage core'],
    modifications: ['Drop knees to floor', 'Lower halfway'],
    safety: ['Shoulder pain — keep elbows in', 'Wrist strain — use fists'],
    tags: ['prone', 'core', 'strength'],
    steps: [
      'From plank, lower body until elbows at 90 degrees.',
      'Keep body parallel to floor, elbows over wrists.',
      'Hold 5 breaths.'
    ],
    image: 'postures/chaturangadandasana.png'
  },
  {
    name: 'Warrior III',
    sanskrit: 'Virabhadrasana III',
    level: 'intermediate',
    short: 'Balancing pose that strengthens legs and core.',
    alignmentCues: ['Hips level', 'Extend arms forward', 'Lift back leg parallel'],
    modifications: ['Use wall for support', 'Keep hands at heart'],
    safety: ['Balance issues — use props', 'Avoid locking standing knee'],
    tags: ['balance', 'standing', 'strength'],
    steps: [
      'From standing, hinge forward, lift left leg back.',
      'Extend arms forward, body parallel to floor.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/virabhadrasana3.png'
  },
  {
    name: 'Revolved Half Moon Pose',
    sanskrit: 'Parivrtta Ardha Chandrasana',
    level: 'advanced',
    short: 'Twisting balance pose, strengthens core and legs.',
    alignmentCues: ['Twist from torso', 'Lift leg parallel', 'Keep hips level'],
    modifications: ['Use block under hand', 'Practice against wall'],
    safety: ['Balance issues — use support', 'Avoid over-twisting'],
    tags: ['balance', 'twist', 'advanced'],
    steps: [
      'From half moon, place left hand on floor, twist torso right.',
      'Extend right arm up, lift left leg parallel.',
      'Hold 5 breaths, switch sides.'
    ],
    image: 'postures/parivrttaardhachandrasana.png'
  },
  {
    name: 'Ear Pressure Pose',
    sanskrit: 'Karnapidasana',
    level: 'intermediate',
    short: 'Inversion with deep spinal stretch, calms mind.',
    alignmentCues: ['Knees near ears', 'Support back', 'Keep neck neutral'],
    modifications: ['Use blocks under feet', 'Keep knees bent'],
    safety: ['Neck pain — use support', 'Avoid if high blood pressure'],
    tags: ['inversion', 'stretch', 'calming'],
    steps: [
      'From plow pose, bend knees toward ears.',
      'Rest knees on floor near head, hands supporting back.',
      'Hold 5 breaths.'
    ],
    image: 'postures/karnapidasana.png'
  }
]