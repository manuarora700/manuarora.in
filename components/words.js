import { useState, useRef, Suspense } from "react";
import { format } from "date-fns";
import { signIn, useSession } from "next-auth/react";
import useSWR, { useSWRConfig } from "swr";
import { AiFillGithub } from "react-icons/ai";
import fetcher from "lib/fetcher";

const Form = {
  Initial: "Initial",
  Loading: "Loading",
  Success: "Success",
  ErrorState: "ErrorState",
};

export default function Words({ fallbackData }) {
  const { data: session } = useSession();
  console.log("session.user", session?.user);
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState({ state: null, message: "" });
  const inputEl = useRef(null);
  const { data: entries } = useSWR("/api/words", fetcher, {
    fallbackData,
  });

  const leaveEntry = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch("/api/words", {
      body: JSON.stringify({
        body: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.ErrorState,
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    mutate("/api/words");
    setForm({
      state: Form.Success,
      message: `Thanks for writing! You're awesome 👑`,
    });
  };

  return (
    <>
      <div className=" my-4 w-full  relative">
        {/* <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          Anything you would like to share?
        </h5> */}

        {!session && (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            href="/api/auth/signin/github"
            className="flex items-center justify-center my-4 font-bold px-4 py-2 bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 rounded w-64"
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            <AiFillGithub className="mr-2 " /> Login to write
          </a>
        )}
        {session?.user && (
          <form
            className="relative my-4 flex flex-col items-start"
            onSubmit={leaveEntry}
          >
            {/* <div
              class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
              style={{ "background-position": "10px 10px" }}
            ></div> */}
            <div className="w-full border border-slate-200 dark:border-slate-800 rounded-xl relative  mb-4 ">
              <textarea
                ref={inputEl}
                aria-label="Your message"
                placeholder="Your message..."
                required
                className="px-4 py-2 mt-1 focus:outline-none block w-full  rounded-md bg-transparent  text-gray-900 dark:text-gray-100"
              />
              <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
              <span className="absolute w-px -left-px h-[40%] top-4 bg-gradient-to-b from-blue-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
            </div>
            <button
              className="flex items-center justify-center  px-4 py-2 font-medium bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
              type="submit"
            >
              {form?.state === Form.Loading ? "Loading..." : "Write"}
            </button>
          </form>
        )}
        {form?.state === Form.ErrorState ? (
          <p className="text-sm text-red-500">{form?.message}</p>
        ) : form?.state === Form.Success ? (
          <p className="text-sm text-gray-500">{form?.message}</p>
        ) : (
          <p className="text-sm text-gray-800 dark:text-gray-200">
            Your name and email will be safe with me.
          </p>
        )}
      </div>
      <div className="h-px border-b  w-full border-slate-200 dark:border-slate-800 relative my-4">
        <span className="absolute w-[40%] -bottom-px left-px h-px bg-gradient-to-r from-blue-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
      </div>
      <div className="mt-4 space-y-8">
        {entries?.map((entry) => (
          <WordsEntry key={entry.id} entry={entry} user={session?.user} />
        ))}
      </div>
    </>
  );
}
function WordsEntry({ entry, user }) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e) => {
    e.preventDefault();

    await fetch(`/api/words/${entry.id}`, {
      method: "DELETE",
    });

    mutate("/api/words");
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="prose dark:prose-dark w-full break-words">
        {entry.body}
      </div>
      <div className="flex items-center space-x-3">
        <p className="text-sm text-gray-500">{entry.created_by}</p>
        <span className=" text-gray-200 dark:text-gray-800">/</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>
        {user && entry.created_by === user.name && (
          <>
            <span className="text-gray-200 dark:text-gray-800">/</span>
            <button
              className="text-sm text-red-600 dark:text-red-400"
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
