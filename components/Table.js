import React from "react";

export default function Table({ headers, body }) {
  return (
    <table className="table pl-4 p-4 bg-white dark:bg-gray-700 shadow-lg rounded-md">
      <thead className="ml-10">
        <tr>
          {headers.map((header) => (
            <th className="border-b-2 p-4 dark:border-dark-5 dark:text-gray-100 whitespace-nowrap font-normal text-gray-900">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row) => (
          <tr className="text-gray-700">
            {row.map((data) => (
              <td className="border-b-2 p-4 dark:border-dark-5 dark:text-gray-100">
                {data}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
