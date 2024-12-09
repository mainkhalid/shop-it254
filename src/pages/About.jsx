import React from 'react';

const About = () => {
  return (
    <div className="px-4 py-10 mt-8 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Visit Us</h1>
        <p className="text-gray-500 mb-6">
          Our office is located at the heart of the city. Feel free to visit us anytime!
        </p>
        <div className="overflow-hidden rounded-lg shadow-lg border border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8191868781723!2d36.8218727!3d-1.2822771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5df97cb23%3A0x9daffd912c011926!2sBihi%20Towers!5e0!3m2!1sen!2ske!4v1733780195324!5m2!1sen!2ske"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
