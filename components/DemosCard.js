import Link from "next/link";
// import Image from "next/image";

export default function DemosCard({ title, description, link, logo, ...rest }) {
  return (
    <Link href={link}>
      <a
        className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full"
        {...rest}
      >
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </a>
    </Link>
  );
}
