import React from 'react'

const About = () => {
  return ( 
    <div>
      <div>
        <section className="max-w-3xl mx-auto p-8 bg-gray-800 rounded-lg shadow-md mt-10">
          <h1 className="text-4xl font-extrabold text-white mb-4 font-serif tracking-tight">
            About Us
          </h1>
          <p className="text-lg text-white mb-6 font-sans">
            Welcome to our website! We are passionate about building modern web applications that are fast, beautiful, and easy to use.
          </p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2 font-mono">
              Our Mission
            </h2>
            <p className="text-white font-sans">
              Our mission is to deliver high-quality digital experiences that empower users and help businesses grow. We believe in the power of technology to make life better and more efficient.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2 font-mono">
              What We Do
            </h2>
            <ul className="list-disc list-inside text-white space-y-1 font-sans">
              <li>Design and develop responsive web applications</li>
              <li>Focus on user experience and accessibility</li>
              <li>Utilize modern technologies like React and Tailwind CSS</li>
              <li>Collaborate with clients to bring their ideas to life</li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl font-extrabold font-serif tracking-wide shadow-lg">
              Made with ❤️ by Zeeshan Ahmed
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About