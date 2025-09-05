import { motion } from 'framer-motion';

const moodConfig = {
  Stressed: { emoji: '😥', bg: 'bg-red-100', text: 'text-red-600' },
  Anxious: { emoji: '😰', bg: 'bg-orange-100', text: 'text-orange-600' },
  Angry: { emoji: '😡', bg: 'bg-red-200', text: 'text-red-800' },
  Tired: { emoji: '😴', bg: 'bg-purple-100', text: 'text-purple-600' },
  Neutral: { emoji: '😐', bg: 'bg-yellow-100', text: 'text-yellow-600' },
  Happy: { emoji: '😊', bg: 'bg-green-100', text: 'text-green-600' },
};

const dietPlans = {
  Stressed: [
    {
      name: "Oatmeal with Berries",
      image: "https://images.unsplash.com/photo-1608500218809-9f3d4138d0cf",
      time: "Breakfast",
      description: "High in fiber and antioxidants to combat stress hormones"
    },
    {
      name: "Walnut Snack Mix",
      image: "https://images.unsplash.com/photo-1616128417859-3a984dd35f02",
      time: "Snack",
      description: "Omega-3 fatty acids support brain health"
    },
    {
      name: "Salmon with Asparagus",
      image: "https://images.unsplash.com/photo-1558030006-450675393462",
      time: "Dinner",
      description: "Rich in EPA/DHA to reduce cortisol levels"
    },
    {
      name: "Lentil Soup",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
      time: "Lunch",
      description: "Magnesium-rich meal for nervous system support"
    }
  ],
  Anxious: [
    {
      name: "Avocado Toast",
      image: "https://images.unsplash.com/photo-1558030006-450675393462",
      time: "Breakfast",
      description: "Healthy fats and B vitamins to calm nervous system"
    },
    {
      name: "Turkey Wrap",
      image: "https://images.unsplash.com/photo-1572449043416-55f4685c9f27",
      time: "Lunch",
      description: "Tryptophan helps boost serotonin production"
    },
    {
      name: "Chamomile Tea",
      image: "https://images.unsplash.com/photo-1615200373471-0edb7ac3c5b9",
      time: "Snack",
      description: "Natural relaxant with apigenin to reduce anxiety"
    },
    {
      name: "Pumpkin Seeds",
      image: "https://images.unsplash.com/photo-1603052875300-810c85d0a2c4",
      time: "Snack",
      description: "High in magnesium for anxiety reduction"
    }
  ],
  Angry: [
    {
      name: "Spinach Smoothie",
      image: "https://images.unsplash.com/photo-1541696432-82e44b6e1db4",
      time: "Breakfast",
      description: "Magnesium-rich greens to help relax muscles"
    },
    {
      name: "Quinoa Salad",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      time: "Lunch",
      description: "Complex carbs stabilize blood sugar levels"
    },
    {
      name: "Dark Chocolate",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1d",
      time: "Snack",
      description: "Boosts serotonin levels and reduces cortisol"
    },
    {
      name: "Baked Cod",
      image: "https://images.unsplash.com/photo-1559479083-c1f6e1386d62",
      time: "Dinner",
      description: "Vitamin B6 helps regulate emotional response"
    }
  ],
  Tired: [
    {
      name: "Chia Pudding",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6",
      time: "Breakfast",
      description: "Slow-release energy from omega-3s and fiber"
    },
    {
      name: "Quinoa Bowl",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      time: "Lunch",
      description: "Complex carbs and protein for sustained energy"
    },
    {
      name: "Trail Mix",
      image: "https://images.unsplash.com/photo-1587745858520-5cb2d5343a0d",
      time: "Snack",
      description: "Quick energy boost from nuts and dried fruits"
    },
    {
      name: "Green Tea",
      image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2",
      time: "Morning",
      description: "L-theanine improves focus without jitters"
    }
  ],
  Neutral: [
    {
      name: "Greek Yogurt Parfait",
      image: "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7",
      time: "Breakfast",
      description: "Probiotics and protein for gut-brain balance"
    },
    {
      name: "Balanced Buddha Bowl",
      image: "https://images.unsplash.com/photo-1550547660-3c6b6b5b5b5b",
      time: "Lunch",
      description: "Mix of whole grains, veggies, and lean protein"
    },
    {
      name: "Mixed Nuts",
      image: "https://images.unsplash.com/photo-1615486363719-7d0b6824aa71",
      time: "Snack",
      description: "Healthy fats and minerals for overall wellness"
    },
    {
      name: "Vegetable Stir-Fry",
      image: "https://images.unsplash.com/photo-1567333970807-8923d56e4f43",
      time: "Dinner",
      description: "Antioxidant-rich meal for cellular health"
    }
  ],
  Happy: [
    {
      name: "Tropical Smoothie",
      image: "https://images.unsplash.com/photo-1505252585461-04db2280bc41",
      time: "Breakfast",
      description: "Vitamin C boost to maintain positive mood"
    },
    {
      name: "Salmon Salad",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      time: "Lunch",
      description: "Omega-3s support continued brain health"
    },
    {
      name: "Grilled Chicken",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710",
      time: "Dinner",
      description: "Lean protein with tryptophan to sustain serotonin"
    },
    {
      name: "Berry Parfait",
      image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5",
      time: "Snack",
      description: "Antioxidants protect dopamine pathways"
    }
  ]
};

// eslint-disable-next-line react/prop-types
export default function DietPlan({ moodResult }) {
  const currentDiet = dietPlans[moodResult] || [];

  if (!moodResult) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Complete your mood analysis to get diet recommendations</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Diet Recommendations for
            <span className={`${moodConfig[moodResult].text} ml-2`}>
              {moodResult} {moodConfig[moodResult].emoji}
            </span>
          </h1>
          <p className="text-gray-600">Foods to help maintain and improve your mood</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentDiet.map((meal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <img 
                  src={meal.image} 
                  alt={meal.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                  {meal.time}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{meal.name}</h3>
                <p className="text-gray-600">{meal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}