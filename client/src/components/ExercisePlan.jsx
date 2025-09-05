import { motion } from "framer-motion";

const moodConfig = {
  Stressed: { emoji: "😥", bg: "bg-red-100", text: "text-red-600" },
  Anxious: { emoji: "😰", bg: "bg-orange-100", text: "text-orange-600" },
  Angry: { emoji: "😡", bg: "bg-red-200", text: "text-red-800" },
  Tired: { emoji: "😴", bg: "bg-purple-100", text: "text-purple-600" },
  Neutral: { emoji: "😐", bg: "bg-yellow-100", text: "text-yellow-600" },
  Happy: { emoji: "😊", bg: "bg-green-100", text: "text-green-600" },
};

const exercisePlans = {
  Stressed: [
    {
      name: "Yoga Flow",
      video: "https://www.youtube.com/watch?v=4pKly2JojMw",
      duration: "20-30 mins",
      type: "Mind-Body",
      description: "Gentle yoga to release tension and calm the mind",
    },
    {
      name: "Guided Meditation Walk",
      video: "https://www.youtube.com/watch?v=Q4Q8OBeVJzo",
      duration: "45 mins",
      type: "Low Intensity",
      description: "Mindful walking combined with meditation techniques",
    },
    {
      name: "Swimming Techniques",
      video: "https://www.youtube.com/watch?v=pFN2n7CRqhw",
      duration: "30 mins",
      type: "Full Body",
      description: "Low-impact exercise to release muscle tension",
    },
    {
      name: "Pilates Routine",
      video: "https://www.youtube.com/watch?v=T1qWGTEn-LA",
      duration: "25 mins",
      type: "Core Focus",
      description: "Improve posture and relieve back tension",
    },
  ],
  Anxious: [
    {
      name: "Tai Chi",
      video: "https://www.youtube.com/watch?v=6AaF5xL5V_0",
      duration: "25-35 mins",
      type: "Meditative",
      description: "Slow movements to center your thoughts",
    },
    {
      name: "Box Breathing Exercise",
      video: "https://www.youtube.com/watch?v=GZzhk9jEkkI",
      duration: "10 mins",
      type: "Breathwork",
      description: "4-7-8 breathing pattern to calm nervous system",
    },
    {
      name: "Indoor Cycling",
      video: "https://www.youtube.com/watch?v=7D_mop-j8Hw",
      duration: "30 mins",
      type: "Cardio",
      description: "Rhythmic exercise to boost endorphins",
    },
    {
      name: "Yin Yoga",
      video: "https://www.youtube.com/watch?v=4hA4xq2Q6es",
      duration: "40 mins",
      type: "Restorative",
      description: "Long-held poses to release deep tension",
    },
  ],
  Angry: [
    {
      name: "Boxing Workout",
      video: "https://www.youtube.com/watch?v=Hf7Wp7VG7Qw",
      duration: "20 mins",
      type: "High Intensity",
      description: "Punching bag workout to release pent-up energy",
    },
    {
      name: "Kickboxing",
      video: "https://www.youtube.com/watch?v=ZMJSwtq4DGg",
      duration: "25 mins",
      type: "Martial Arts",
      description: "Full-body workout to channel aggressive energy",
    },
    {
      name: "Rowing Machine",
      video: "https://www.youtube.com/watch?v=QhZ2Z3u5huk",
      duration: "20 mins",
      type: "Cardio",
      description: "Rhythmic full-body movement for stress release",
    },
    {
      name: "Power Cleans",
      video: "https://www.youtube.com/watch?v=ayB1s1ln8Zg",
      duration: "30 mins",
      type: "Weightlifting",
      description: "Explosive lifts to release frustration",
    },
  ],
  Tired: [
    {
      name: "Restorative Yoga",
      video: "https://www.youtube.com/watch?v=8wZxOQT7P4o",
      duration: "30 mins",
      type: "Low Impact",
      description: "Supported poses to gently rejuvenate",
    },
    {
      name: "Walking Lunges",
      video: "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
      duration: "15 mins",
      type: "Bodyweight",
      description: "Low-intensity movement to boost circulation",
    },
    {
      name: "Pilates Reformer",
      video: "https://www.youtube.com/watch?v=2Jj3msX7q6I",
      duration: "40 mins",
      type: "Controlled",
      description: "Equipment-assisted exercises for gradual energy build",
    },
    {
      name: "Qi Gong",
      video: "https://www.youtube.com/watch?v=6oHx5Boa8-0",
      duration: "25 mins",
      type: "Energy Work",
      description: "Ancient Chinese practice for vitality restoration",
    },
  ],
  Neutral: [
    {
      name: "Circuit Training",
      video: "https://www.youtube.com/watch?v=eTxO3D-8K-U",
      duration: "45 mins",
      type: "Mixed",
      description: "Varied exercises to maintain balanced fitness",
    },
    {
      name: "Hiking Preparation",
      video: "https://www.youtube.com/watch?v=3zvWVjJwjiM",
      duration: "60 mins",
      type: "Outdoor",
      description: "Nature immersion for mental clarity",
    },
    {
      name: "TRX Suspension",
      video: "https://www.youtube.com/watch?v=47A9-_Bp3CA",
      duration: "30 mins",
      type: "Resistance",
      description: "Bodyweight exercises using suspension straps",
    },
    {
      name: "Barre Workout",
      video: "https://www.youtube.com/watch?v=9WQJPnOQ7L0",
      duration: "40 mins",
      type: "Flexibility",
      description: "Ballet-inspired movements for posture and grace",
    },
  ],
  Happy: [
    {
      name: "Acro Yoga",
      video: "https://www.youtube.com/watch?v=-1x5Vg7H8po",
      duration: "50 mins",
      type: "Partner",
      description: "Social yoga practice to share positive energy",
    },
    {
      name: "Rock Climbing Basics",
      video: "https://www.youtube.com/watch?v=3mF2M8XAg4c",
      duration: "60 mins",
      type: "Adventure",
      description: "Challenge yourself while maintaining joy",
    },
    {
      name: "Dance Cardio",
      video: "https://www.youtube.com/watch?v=GF1N_lWjODs",
      duration: "45 mins",
      type: "Fun",
      description: "Upbeat routines to sustain positive mood",
    },
    {
      name: "Martial Arts Basics",
      video: "https://www.youtube.com/watch?v=IkL4q2bO_4M",
      duration: "50 mins",
      type: "Discipline",
      description: "Structured movement to channel happiness productively",
    },
  ],
};

export default function ExercisePlan({ moodResult }) {
  const currentExercises = exercisePlans[moodResult] || [];

  if (!moodResult) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Complete your mood analysis to get exercise recommendations
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Exercise Recommendations for
            <span className={`${moodConfig[moodResult].text} ml-2`}>
              {moodResult} {moodConfig[moodResult].emoji}
            </span>
          </h1>
          <p className="text-gray-600">
            Activities to match and enhance your current mood
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentExercises.map((exercise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <video
                  src={exercise.video}
                  controls
                  className="w-full h-full object-cover"
                  title={exercise.name}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {exercise.name}
                  </h3>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-white/20 text-white px-2 py-1 rounded-md text-sm">
                      {exercise.duration}
                    </span>
                    <span className="bg-white/20 text-white px-2 py-1 rounded-md text-sm">
                      {exercise.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600">{exercise.description}</p>
                <div className="mt-4 flex gap-2">
                  {/* <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                    View Details
                  </button>
                  <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors">
                    Save Plan
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
