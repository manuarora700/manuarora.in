import { useState } from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Internship - Intel 🤘🏻">
        Got an Internship at Intel as a Machine Learning Intern. Developed a
        Pothole Detection System & Face Averaging system using Machine Learning.
      </Step>
      <Step title="Entrepreneurial Workshops 🔩">
        Organised workshops (Part of E-Cell) on topics like Entrepreneurship and
        Web Development.
      </Step>
      <Step title="Full-Stack Journey 🔩">
        Learnt NodeJS, MongoDB, MySQL along with React and the best practices to
        build products and web apps which can scale easily.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Startup - Aceternity 💣">
        Started a web development and digital marketing agency from scratch.
        Generated revenue and designed websites for clients.
      </Step>
      <Step title="React Enthusiast ⚒">
        Was introducted to React, took up a course on Udemy to get the hang of
        it. I haven't stopped since then.
      </Step>
      <Step title="Open Source Contributions ⚙️">
        Started contributing to open source on a daily basis. Contributed to
        smaller projects to learn more on the contributing part.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Started College 🔥">
        Opted for Computer Science B.Tech Degree from University of Petroleum
        and Energy Studies, Dehradun.
      </Step>
      <Step title="Introduced to Open Source ⚡️">
        My Domain was Open Source Software and Open Standards. I got to know
        about Free Software Foundation, Git and GitHub and Linux systems.
      </Step>
      <Step title="jQuery fanboy 🙌🏻">
        Started working with jQuery, I was amazed by the level of simplicity it
        provided back then.
      </Step>
      <Step title="C and C++ 🙌🏻">
        Started learning logics and basic programming fundamentals with Object
        Oriented Programming. C was intimidating, C++ was fun.
      </Step>
      <Step title="First Back 😂">
        I consider this as an achievement. If you're a CS Engineer, you must
        have a back in Mathematics.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Completed 12th Grade 📜">
        Completed 12th grade with 93.6% Marks in Science stream. Again, a big
        achievement for me.
      </Step>
      <Step title="Developed interest in Web Development 🚀">
        One of my friends introduced me to Web Development. I started off by
        making simple HTML, CSS websites with a keen interest in design.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Completed 10th Grade 📜">
        Scored 9/10 CGPA in 10th Grade. For me it was huge.
      </Step>
      <Step title="Wanted to take up Humanities 🌪❤️">
        I always wanted to become a Civil Servant. Though my parents didn't
        agree and that let me to opt for Science stream.
      </Step>
      <Step title="Theatre and Drama 💂🏼‍♀️">
        Acted in my first ever skit in school.
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title="First Computer 💻">
        I played GTA San Andreas all day, everyday.
      </Step>
    </ul>
    <Divider />
    <Year>2001</Year>
    <ul>
      <Step title="Moved to Jaipur, Rajasthan 🌆">
        We moved to Jaipur from our Hometown.
      </Step>
    </ul>
    <Divider />
    <Year>1998</Year>
    <ul>
      <Step title="An Enginner was Born in India 👶🏼 🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Created covidrescue.co.in 💊">
          Created <a href="https://www.covidrescue.co.in">covidrescue.co.in</a>
          to help people with verified leads on Oxygen, Remdesivir, Food, Beds,
          ICU, Medicines and more.
        </Step>
        <Step title="Created Covid-19 Vaccination slots notification system 💉">
          Integrated Vaccination slots notification system in covidrescue web
          app. Notified people whenever vaccination slot was available in their
          area and city.
        </Step>
      </ul>

      <Year>2020</Year>
      <ul>
        <Step title="Joined mroads 🎉">
          {" "}
          Joined{" "}
          <span className="font-bold">
            <span className="text-blue-500">m</span>roads
          </span>{" "}
          as a Software Development Engineer. Working on their Flagship product
          as a Front-End Developer.
        </Step>
        <Step title="Cleared GATE 2019 💯">
          Cleared GATE 2019 after 8 months of continuous studies. I still hate
          Computer System Architecture & Organization.
        </Step>
        <Step title="Competitive Programming 🏆">
          Cleared Hackerrank and Hackerearth contests. Got a strong grip on
          Competitive Programming.
        </Step>
        <Step title="Taught programming to students🥳">
          Taught fundamental programming to school students. It included Basic C
          programming, Introduction to Web Development and logic building.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Placements - Got Placed ✨">
          Had 3 offers in Hand. 1 On-Campus and 2 Off-Campus in the Software
          Developer (Full-Stack) roles.
        </Step>
        <Step title="Full-Stack Applications 🚀">
          Started freelancing, developed full-stack applications for clients
          ranging from E-Commerce stores to static landing pages.
        </Step>
        <Step title="GATE Preparation ⚛️">
          Started preparing for GATE (Graduate Aptitute Test in Engineering).
          Learnt all the Computer Science subjects again from scratch.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
