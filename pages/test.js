import React from "react";

export default function Button({ text, url }) {
  return (
    <a
      href={url}
      class="inline-block rounded-md px-6 py-3 bg-black text-gray-50 text-sm dark:border dark:border-gray-500"
    >
      Live Demo
    </a>
  );
}
