import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-[#00FF00] font-mono leading-snug">
      {/* Header */}
      <header className="py-4 border-b border-[#555]">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold">HackDay 2024 - Powered by Nexus SJCET</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to HackDay 2024</h2>
          <p className="text-lg mb-6">
            A celebration of creativity, code, and collaboration—powered by caffeine, creativity, and the FOSS spirit.
          </p>
          <button className="bg-[#333] border border-[#00FF00] px-6 py-3 text-[#00FF00] hover:bg-[#555] transition duration-200">
            Join the Fun Now!
          </button>
        </section>

        {/* About Hackathon Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-3">What’s the Vibe? 🤖</h3>
          <p className="text-[#00FF00] mb-4">
            HackDay 2024 is all about breaking boundaries, learning by doing, and building something epic with your creativity and passion.
            Whether you're a seasoned coder or a first-time hacker, this hackathon has something for everyone.
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>✨ Workshops for skill-building and exploration</li>
            <li>💡 Challenges & Competitions to ignite your creativity</li>
            <li>🤝 Meet peers, mentors, and potential collaborators</li>
            <li>🏆 Amazing Prizes for your innovative ideas</li>
          </ul>
        </section>

        {/* About the Organizers */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-3">Who Runs This Magic?</h3>
          <p className="text-[#00FF00] mb-4">
            HackDay 2024 is hosted by the <strong>Nexus SJCET</strong>, the FOSS club that lives, breathes, and thrives on innovation, creativity, and coffee.
          </p>
          <p className="text-[#00FF00] mb-4">
            We believe in creating safe, inclusive, and engaging spaces for learning, building, and sharing.
          </p>
        </section>

        {/* Why HackDay Section */}
        <section className="mb-12 bg-[#222] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3">Why HackDay?</h3>
          <p className="text-[#00FF00] mb-4">
            Because innovation is better when shared. HackDay 2024 is your opportunity to learn, connect, and build with others who share your passion for problem-solving and innovation.
          </p>
          <p className="text-[#00FF00] mb-4">
            Whether you’re here to prototype an idea, solve a problem, or just meet cool people—HackDay has your back.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center my-12">
          <h3 className="text-2xl font-semibold mb-4">Ready to Hack?</h3>
          <button className="bg-[#333] border border-[#00FF00] px-8 py-4 text-[#00FF00] hover:bg-[#555] transition duration-200">
            Register Now!
          </button>
        </section>
      </main>
    </div>
  );
}
