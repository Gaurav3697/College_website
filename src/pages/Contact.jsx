"use client";

import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../app/firebase";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false)

  const SubmitHandler = async (e) => {
    setDisableBtn(true)
    e.preventDefault();
    try {
      await addDoc(collection(db, "college_contact"), {
        name,
        email,
        message,
      });
      toast.success("Sent Successfully");
      setDisableBtn(false)
    } catch (error) {
      console.log(error)
      toast.error("Some Error occured");

      setDisableBtn(false)
    }

  };

  return (
    <div
      id="contact"
      className="bg-white w-screen h-auto flex justify-center m-auto py-10 overflow-x-hidden"
    >
      <div className="w-full lg:w-1/2 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <form className="p-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
          onClick={SubmitHandler}
            disabled={disableBtn}
            type="submit"
            className={`w-full py-3 px-6 rounded-lg text-white font-bold ${disableBtn ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'}`}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
