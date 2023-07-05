import React from 'react';
import Head from 'next/head';

const Contact = () => {
    return (
      <div>
        <Head>
          <title>Contact Us | Your Website</title>
        </Head>
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-8">
                Contact Us
              </h1>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                If you have any questions or inquiries, please feel free to reach out to us using the contact form below. We will get back to you as soon as possible.
              </p>
              <form className="mb-8">
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-800 mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-800 mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-800 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  className="bg-primary text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-primary-dark focus:outline-none focus:ring-primary-dark"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  