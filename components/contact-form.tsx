"use client";

import { FormEvent, useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const firstName = formRef.current["first-name"].value;
    const lastName = formRef.current["last-name"].value;
    const email = formRef.current.email.value;
    const subject = formRef.current.subject.value;
    const message = formRef.current.message.value;

    try {
      const res = await fetch("/api/email", {
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          subject,
          message,
          type: "contact",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.text();
      alert(result);
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred, if this persists, please contact us directly at support@cronshot.io"
      );
    }
  };

  return (
    <form className="max-w-xl mx-auto" ref={formRef}>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label
            className="block text-gray-800 text-sm font-medium mb-1"
            htmlFor="first-name"
          >
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            id="first-name"
            type="text"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block text-gray-800 text-sm font-medium mb-1"
            htmlFor="last-name"
          >
            Last Name <span className="text-red-600">*</span>
          </label>
          <input
            id="last-name"
            type="text"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label
            className="block text-gray-800 text-sm font-medium mb-1"
            htmlFor="email"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
            placeholder="Enter your email address"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label
            className="block text-gray-800 text-sm font-medium mb-1"
            htmlFor="subject"
          >
            Subject <span className="text-red-600">*</span>
          </label>
          <input
            id="subject"
            type="text"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
            placeholder="How can we help you?"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label
            className="block text-gray-800 text-sm font-medium mb-1"
            htmlFor="message"
          >
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent resize-none"
            placeholder="Write your message"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-4">
        <div className="w-full px-3">
          <button
            type="submit"
            className="w-full py-2.5 px-6 bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors duration-150 shadow-sm cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
      <div className="text-sm text-gray-600 mt-4">
        By clicking "send" you consent to allow CronShot to store and process
        the personal information submitted above and agree to our{" "}
        <a className="underline" href="/terms">
          terms and conditions
        </a>{" "}
        as well as our{" "}
        <a className="underline" href="/privacy">
          Privacy Policy
        </a>
      </div>
    </form>
  );
}