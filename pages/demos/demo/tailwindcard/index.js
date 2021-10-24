import React from "react";
import Link from "next/link";
import { NAME } from "constants/app";

export default function CardBasic() {
  return (
    <div>
      <div className="h-screen bg-gray-200">
        <div className="px-8">
          <Link href="https://manuarora.in/snippets/tailwind-card">
            <a>
              <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto ">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt="image-text"
                  className="w-full h-48 rounded-tr-md rounded-tl-md lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none"
                />
                <div className="p-8 bg-white rounded-bl-md rounded-br-md lg:rouned-bl-none lg:rounded-tr-md">
                  <h2 className="font-semibold text-gray-700">
                    Tailwind Ui Card
                  </h2>
                  <p className="mt-4 text-sm text-gray-600">
                    Tailwind UI card is built with Tailwindcss, this minimal
                    card can be used for several purposes including business
                    cards, pricing and in general.
                  </p>
                  <div className="flex items-center mt-8">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://manuarora.in/avatar.jpg"
                        alt="avatar"
                      />
                      <div className="ml-4">
                        <p className="text-sm font-semibold text-gray-800">
                          {NAME}
                        </p>
                        <p className="text-sm text-gray-400">Next JS</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center w-8 h-8 ml-auto bg-gray-200 rounded-full">
                      <svg
                        width="16"
                        viewBox="0 -22 512 511"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
