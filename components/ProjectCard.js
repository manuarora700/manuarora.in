import Icons from "./Icons";

export default function ProjectCard({ title, description, href, Icon, tags }) {
  return (
    <a
      className="w-full mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center p-4 border border-gray-200 rounded dark:border-gray-800">
        <div className="w-8 h-full ml-2 mr-4">{Icon && <Icon />}</div>
        <div>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
          <div className="flex pt-2 space-x-2 md:flex-row">
            {tags?.map((tag, idx) => (
              <p
                key={idx}
                className={`leading-5 dark:border text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  `}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
