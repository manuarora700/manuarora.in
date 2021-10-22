export const appConfig = {
  title: getTitle(),
  name: getName(),
  description: "Full-Stack developer, JavaScript enthusiast and a Learner.",
  domain: process.env.DOMAIN || "a3har.com",
  github: "https://github.com/a3har",
  twitter: "https://twitter.com/musthafa_azhar",
  linkedIn: "https://www.linkedin.com/in/a3har/",
  instagram: "https://www.instagram.com/m_a3har/",
};

export function getName() {
  return process.env.NAME || "Muhammad Azhar";
}

export function getTitle() {
  return `${getName()} - Developer, Writer, Creator`;
}
