import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewsLetter = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [loading, setLoading] = useState(false); // State for loading

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter an email address!");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setLoading(true); // Start loading state
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_ACCESS_KEY, // Accessing from .env
          email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for subscribing!");
        setEmail(""); // Clear input
      } else {
        alert("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="w-[65%] flex flex-col items-center h-[40vh] justify-center m-auto mb-8">
      <h1 className="text-2xl font-bold text-gray-500">
        Get Exclusive Offer On Your Email
      </h1>
      <p className="text-sm text-gray-500">
        Subscribe to our newsletter and stay up to date
      </p>
      <div className="mt-4">
        <input
          className="p-2 w-[300px] mr-2 focus:outline-none border border-green-300 rounded"
          type="email"
          placeholder="Your Email"
          value={email} // Controlled input
          onChange={handleChange} // Update state
        />
        <button
          className={`${
            loading ? "bg-gray-300" : "bg-transparent"
          } border border-green-400 text-gray-500 hover:bg-green-100 rounded py-2 px-6 text-lg font-bold transition duration-200 cursor-pointer`}
          onClick={handleSubmit} 
          disabled={loading} 
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
