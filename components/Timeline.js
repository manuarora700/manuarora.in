import { useState } from "react";

const Divider = () => {
  return (
    <div className="w-full my-8 border border-gray-200 dark:border-gray-600" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="mb-4 text-lg font-bold tracking-tight text-gray-900 md:text-xl dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
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
      <div className="flex flex-col ml-6 text-gray-700 dark:text-gray-400">
        {children}
      </div>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2019</Year>
    <ul>
      <Step
        title={
          <div>
            Reached finals on{" "}
            <a
              className="pr-1 text-yellow-500"
              href="https://portal.coepvlab.ac.in/InTechOlympiad/welcome"
              target="_blank"
            >
              Intech Olympiad
            </a>
            2019 🎊
          </div>
        }
      >
        <div>
          Hustled to be among the 16 finalists from around 20,000 participants
          nation wide. Developed an{" "}
          <a
            className="pr-1 text-yellow-500"
            href="https://github.com/a3har/online_marketplace"
            target="_blank"
          >
            Online Marketplace for two-wheeler reselling
          </a>
          using WordPress and Django as part of the hackathon.
        </div>
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Developed interest in Web Development 🚀">
        Started noticing the power of HTML and CSS in developing real world
        applications. Messed around a little with WordPress and Django.
        Developed a hostel management system to automate hand written registers
        that had to be maintained manually
      </Step>
      <Step title="Joined University 📜">
        Moved to India to study Computer Science formally in Rajagiri School of
        Engineering and Technology.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Developed an online diary 📓">
        Developed a feature packed online diary using just C++ as part of the
        12th Grade CS Project. It had an address book, a TO-DO list, Tic Tac Toe
        and much more.
      </Step>
      <Step title="Plays on Stage Live 🤘🏼">
        It felt absolutely insane when an introverted kid like me decided to
        take this step and got to play with an amazing set of musicians.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Got my first smartphone 📱">
        I got a Samsung Galaxy Note 3 right after it launched. I finally felt
        like one of the cool kids.
      </Step>
      <Step title="Bought My First Guitar 🎸">
        I saved up some cash and bought my first acoustic guitar. I use this
        even to this day.
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="I Learn Visual Basic 🖥">
        This step made me feel more like a programmer since I could make
        programs with GUI. I made a simple address book application.
      </Step>
    </ul>
    <Divider />
    <Year>2009</Year>
    <ul>
      <Step title="I Learn C++ 🖥">
        Dad thought it would be a good idea for me ( 6th Grade ) to listen to my
        elder brother's C++ classes. He was right.
      </Step>
      <Step title="Our House Gets An Internet Connection 🌏">
        The entire family (5) had a 2 GB/ month connection. Spent most of my
        time on Farmville ( Facebook game ) planting crops.
      </Step>
    </ul>
    <Divider />
    <Year>2004</Year>
    <ul>
      <Step title="Joined School 📖">
        A place where I have a love / hate relationship. Hated the teachers,
        Loved the people. Friends I made at the starting remain the same to this
        day
      </Step>
    </ul>
    <Divider />
    <Year>1999</Year>
    <ul>
      <Step title="An Engineer was Born in Bahrain 👶🏼 🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step
          title={
            <div>
              Developed a dashboard for{" "}
              <a
                className="pr-1 text-yellow-500"
                href="https://apps.shopify.com/checkout-upsell-promotions"
                target="_blank"
              >
                Checkout Upsell & Promotions
              </a>{" "}
              💸
            </div>
          }
        >
          Worked on a brand new product for Glood.AI by creating a dashboard for
          it using React, TailwindCSS and other tools.
        </Step>
        <Step
          title={
            <div>
              Joined{" "}
              <a
                className="pr-1 text-yellow-500"
                href="https://glood.ai"
                target="_blank"
              >
                Glood.AI
              </a>{" "}
              🎉
            </div>
          }
        >
          <span>🔸Joined a blazing fast paced startup as employee #1</span>
          <span>
            🔸Worked on the flagship product{" "}
            <a
              className="pr-1 text-yellow-500"
              href="https://apps.shopify.com/recommendation-kit"
              target="_blank"
            >
              Personalized Recommendations.
            </a>
          </span>
          <span>
            🔸Catered to customer support to gather feedback and then
            implemented features / fixed bugs for the same.
          </span>
          <span>
            🔸Wore multiple hats and got to work with experienced veterans
          </span>
        </Step>
      </ul>

      <Year>2020</Year>
      <ul>
        <Step
          title={
            <div>
              Joined{" "}
              <a
                className="pr-1 text-yellow-500"
                href="https://www.cognizant.com"
                target="_blank"
              >
                Cognizant
              </a>{" "}
              🎉
            </div>
          }
        >
          <span>🔸Worked on cloud technologies like AWS IoT Greengrass</span>
          <span>
            🔸Developed a Career Portal using DotNet Core MVC, AWS
            ElasticBeanstalk and S3.
          </span>
        </Step>
        <Step title="Graduated with multiple job offers 👨🏼‍🎓">
          Had 3 offers in hand from Indias top MNCs. Decided to join Cognizant
          as a Programmer Analyst Trainee
        </Step>
        <Step title="Joined Verboculary as an intern 🎉">
          <span>
            🔸Developed reusable components in Angular, Ionic and Typescript for
            <a
              className="px-1 text-yellow-500"
              href="https://play.google.com/store/apps/details?id=com.GREninja.GRE.vocabulary"
              target="_blank"
            >
              GRE Ninja
            </a>
          </span>
          <span>🔸Designing and Prototyping of screens in Figma</span>
          <span>🔸Dockerization and Setting up CI / CD pipeline</span>
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Elected as Treasurer for CSI 🙋🏼‍♂️">
          <span>
            🔸Conducted IDEA Pitching, Technical Workshops, Poster Designing and
            other events as part of the EXEC-COM for Computer Society of India (
            CSI Student Branch ) .
          </span>
          <span>🔸Spearheaded Coder of the Month</span>
          <span>
            🔸Won second place for Code Debugging at the CSI STATE STUDENT
            CONVENTION
          </span>
        </Step>
        <Step title="Got hands dirty with Machine Learning 🧑🏼‍💻">
          <div>
            Developed a{" "}
            <a
              className="text-yellow-500 "
              href="https://github.com/a3har/Lab_report_detector"
              target="_blank"
            >
              model
            </a>{" "}
            to detect the important parts of a printed lab report. Initially
            used Yolo v4 to train the annotated images but then tried Detectron
            and found better results.{" "}
          </div>
        </Step>
        <Step title="Developed medical record documentation system 🧑🏼‍⚕️">
          <div>
            Created a{" "}
            <a
              className="text-yellow-500 "
              href="https://github.com/a3har/MRDS"
              target="_blank"
            >
              system
            </a>{" "}
            to digitize paper lab reports and extract structured data as part of
            my final year project at the university. Used AWS Textract and
            Regular Expression to achieve it and created a web service using
            Django
          </div>
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center px-4 py-2 mx-auto my-4 text-sm font-medium text-gray-900 rounded-md dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="w-4 h-4 ml-1"
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
