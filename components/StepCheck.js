// export default function StepCheck({ title }) {
//   return (
//     <div className="step flex items-center py-2">
//       <div className="flex items-center text-green-700 dark:text-green-300">
//         {/* <span className="sr-only">Check</span> */}
//         <svg
//           className="h-5 w-5 mr-2"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>

//         <p className="font-small text-gray-900 dark:text-gray-100">{title}</p>
//       </div>
//     </div>
//   );
// }

export default function StepCheck({ title }) {
  return (
    <div className="flex font-small items-baseline mb-2">
      <div className="h-4 w-4 mr-2">
        <svg
          className="h-5 w-5 mr-2 text-green-500 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <span>{title}</span>
    </div>
  );
}
