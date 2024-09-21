import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // Send the form data to your server or API
  };

  return (
    <div id="contact" className="bg-white ml-[55px] mr-[55px] rounded-lg">
      <div className="flex mt-[80px] items-center gap-56">
      <img
          src={require("../assets/images/wallpaperflare.com_wallpaper (5).jpg")}
          alt=""
          className="rounded-2xl w-[480px] h-[352px] ml-[80px]"
        />
        <div className="ml-[-55px]">
          <div className="text-3xl text-orange-950 drop-shadow mt-6">
            Get in Touch!
          </div>
          <div className="mt-2 mb-6 text-[20px]">
            <span className="text-3xl text-blue-600 italic">
              Contact-
            </span>
             us for any query!
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
                className="p-4 pl-10 text-sm text-gray-700"
              />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                className="p-2 pl-10 text-sm text-gray-700"
              />
            </div>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              className="p-4 pl-10 text-sm text-gray-700"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
            {submitted && (
              <div className="text-green-800 font-bold">
                Thank you for contacting us!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

