import React from 'react'

const About = () => {
  return ( 
    <div>
        <div>
        <section className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to our website! We are passionate about building modern web applications that are fast, beautiful, and easy to use.
          </p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to deliver high-quality digital experiences that empower users and help businesses grow. We believe in the power of technology to make life better and more efficient.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">What We Do</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Design and develop responsive web applications</li>
              <li>Focus on user experience and accessibility</li>
              <li>Utilize modern technologies like React and Tailwind CSS</li>
              <li>Collaborate with clients to bring their ideas to life</li>
            </ul>
          </div>
        </section>
        </div>
    </div>
  )
}

export default About