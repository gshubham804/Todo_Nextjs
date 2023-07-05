import React from 'react';
import Head from 'next/head';

const About = () => {
    return (
      <div>
        <Head>
          <title>About | Your Website</title>
        </Head>
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-8">
                About Us
              </h1>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis, dui id tristique sagittis, ipsum felis aliquet tortor, vel congue sapien metus vitae enim. Ut tincidunt, tortor eget tempus condimentum, urna lectus auctor lectus, id porttitor risus enim a tellus.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Nulla facilisi. Curabitur nec semper dolor, eu malesuada ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec finibus ligula vitae justo tristique dapibus. Ut in aliquam massa.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Integer ut orci ut neque efficitur pellentesque. Mauris placerat purus vel metus convallis, vel lacinia elit bibendum. Nulla facilisi. Duis ultrices, neque in malesuada viverra, metus quam consectetur lorem, a pellentesque ex turpis ac tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  