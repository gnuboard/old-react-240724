import React from 'react';

function Home() {
  return (
    <div>
        {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome to Our Website</h2>
          <p className="mt-4 text-lg text-gray-600">We provide the best services to help you succeed.</p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center dark:text-white">Our Features</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-slate-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Feature One</h3>
              <p className="mt-4 text-gray-600 dark:text-slate-400">Description of feature one.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-slate-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Feature Two</h3>
              <p className="mt-4 text-gray-600 dark:text-slate-400">Description of feature two.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-slate-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Feature Three</h3>
              <p className="mt-4 text-gray-600 dark:text-slate-400">Description of feature three.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Us</h2>
          <p className="mt-4 text-lg text-gray- dark:text-slate-400">Information about your company and what you do.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">Get in touch with us for more information.</p>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:text-white"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:text-white"
              rows="4"
            ></textarea>
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
