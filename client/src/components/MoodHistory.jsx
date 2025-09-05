import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const moodConfig = {
  Stressed: { emoji: "😥", bg: "bg-red-100", text: "text-red-600" },
  Anxious: { emoji: "😰", bg: "bg-orange-100", text: "text-orange-600" },
  Angry: { emoji: "😡", bg: "bg-red-200", text: "text-red-800" },
  Tired: { emoji: "😴", bg: "bg-purple-100", text: "text-purple-600" },
  Neutral: { emoji: "😐", bg: "bg-yellow-100", text: "text-yellow-600" },
  Happy: { emoji: "😊", bg: "bg-green-100", text: "text-green-600" },
};

export default function MoodHistory() {
  const { currentUser } = useSelector((state) => state.user);
  const [moodHistory, setMoodHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoodHistory = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/user/moodHistory?userId=${currentUser._id}`,
          {
            mode: "cors",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch mood history");
        }

        const data = await response.json();
                console.log(data);

        setMoodHistory(data.data);
      } catch (error) {
        console.error("Error fetching mood history:", error);
        alert("Failed to load mood history");
      } finally {
        setLoading(false);
      }
    };

    fetchMoodHistory();
  }, [currentUser._id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent  mb-8">
          Your Mood History
        </h1>

        {moodHistory.length === 0 ? (
          <div className="bg-white rounded-lg p-6 shadow-sm text-center text-gray-500">
            No mood history found
          </div>
        ) : (
          <div className="grid gap-4">
            {Array.isArray(moodHistory) && moodHistory.map((entry) => (
              <motion.div
                key={entry._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className={`${moodConfig[entry.result].bg} ${
                        moodConfig[entry.result].text
                      } rounded-full p-3 text-2xl`}
                    >
                      {moodConfig[entry.result].emoji}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 capitalize">
                        {entry.result.toLowerCase()}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(entry.createdAt).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`${
                      moodConfig[entry.result].text
                    } text-sm font-medium`}
                  >
                    {entry.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
