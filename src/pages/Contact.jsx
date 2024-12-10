import React from 'react'
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  
    // Add the access key from the environment variable
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Message Sent Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        toast.error(data.message);
        setResult("");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Something went wrong. Please try again later.");
      setResult("");
    }
  };  

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'>
        
  <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
        <label htmlFor="name">Name </label>
        <input  className='w-full border border-green-400 rounded py-3 px-4 mt-2 focus:outline-none' type="text" placeholder='Name' required name='name'/>
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4'>
        <label htmlFor="email">Email </label>
        <input  className='w-full border border-green-400 rounded py-3 px-4 mt-2 focus:outline-none' type="email" placeholder='Example@gmail.com' required name='email'/>
        </div>
        
    </div>
    <div className="text-left my-6">
      <label htmlFor="message">Message</label>
      <textarea name="message" 
       className="w-full border border-green-400 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none"
       placeholder='Message/Query' 
       required id=""></textarea>
    </div>
    <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-12 mb-10 rounded">
   {result ? result : "Send Message"}
   </button>

  </form>
    </div>



  )
}

export default ContactForm