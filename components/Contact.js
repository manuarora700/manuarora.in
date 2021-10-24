import { useState, useRef } from "react";
import Link from "next/link";
// import useSWR from "swr";
import format from "comma-number";
// import { trackGoal } from "fathom-client";

// import fetcher from "@/lib/fetcher";
import SuccessMessage from "@/components/SuccessMessage";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Contact() {
  const Divider = () => {
    return (
      <div className="w-full my-8 border border-gray-200 dark:border-gray-600" />
    );
  };
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);
  //   const { data } = useSWR("/api/subscribers", fetcher);
  //   const subscriberCount = format(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: "loading" });

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: "error",
        message: error,
      });
      return;
    }

    // trackGoal("JYFUFMSF", 0);
    inputEl.current.value = "";
    setForm({
      state: "success",
      message: `Hooray! You're now on the list. Check your inbox or promotions for a mail.`,
    });
  };

  return (
    <div className="w-full p-6 my-4 border border-blue-200 rounded dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <h5 className="text-lg font-bold text-gray-900 md:text-xl dark:text-gray-100">
        Want to make a friend? Let's talk.
      </h5>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop a hi and lets find our shared interests.
      </p>
      <a
        href="https://wa.me/8943145293?text=Hi, Got your number from the portfolio"
        className="w-full h-8 px-4 py-1 mt-4 font-bold text-center text-gray-900 bg-green-400 rounded dark:bg-green-400 dark:text-gray-900"
        type="submit"
      >
        Chat on WhatsApp
      </a>

      <Divider />
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop in your email ID and I will get back to you.
      </p>
      {/* <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="azharmuham12@gmail.com"
          type="email"
          autoComplete="email"
          required
          className="block w-full px-4 py-2 mt-1 text-gray-900 bg-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <button
          className="absolute flex items-center justify-center h-8 px-4 font-bold text-gray-900 bg-gray-100 rounded right-1 top-1 dark:bg-gray-700 dark:text-gray-100 w-28"
          type="submit"
        >
          {form.state === "Sending" ? <LoadingSpinner /> : "Send"}
        </button>
      </form> */}

      {form.state === "error" ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === "success" ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200"></p>
      )}
    </div>
  );
}
