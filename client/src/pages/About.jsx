const AboutPage = () => {
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-500 to-blue-500 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to MoodVibe 🌈
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your companion in emotional wellness and self-discovery
          </p>
      
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At MoodVibe, we believe in empowering individuals to understand, 
            track, and improve their emotional well-being through intuitive tools 
            and compassionate support.
          </p>
        </div>

        {/* What We Offer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="p-6 bg-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">📊 Mood Tracking</h3>
            <p className="text-gray-600">
              Visualize your emotional patterns with our intuitive tracking system
            </p>
          </div>
          <div className="p-6 bg-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">💡 Personalized Insights</h3>
            <p className="text-gray-600">
              AI-powered recommendations based on your unique emotional profile
            </p>
          </div>
          <div className="p-6 bg-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">🧘 Wellness Resources</h3>
            <p className="text-gray-600">
              Curated exercises, meditations, and expert-approved content
            </p>
          </div>
          <div className="p-6 bg-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">🤝 Support Community</h3>
            <p className="text-gray-600">
              Connect with others on similar emotional wellness journeys
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Story
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="/team-photo.jpg" 
                alt="MoodVibe team" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Founded in 2023 by a team of mental health advocates and 
                tech enthusiasts, MoodVibe emerged from a simple question: 
                How can we make emotional awareness accessible to everyone?
              </p>
              <p className="text-gray-600">
                What started as a university project has grown into a platform 
                serving thousands of users worldwide, with features developed 
                in collaboration with licensed therapists and UX experts.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3">Empathy First</h3>
              <p className="text-gray-600">
                We design every feature with compassion and understanding
              </p>
            </div>
            <div className="p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3">Privacy Protected</h3>
              <p className="text-gray-600">
                Your data remains confidential and secure
              </p>
            </div>
            <div className="p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-3">Continuous Growth</h3>
              <p className="text-gray-600">
                We evolve with user feedback and mental health research
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Emotional Wellness Journey?
          </h3>
          {/* <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Join MoodVibe Today
          </button> */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">
            💌 Contact us: hello@moodvibe.com
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2023 MoodVibe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
