function getName() {
  return process.env.NAME || "Muhammad Azhar";
}

function getTitle() {
  return `${getName()} - Developer, Writer, Creator`;
}

export const NAME = process.env.NAME || "Muhammad Azhar";

export const TITLE = `${getName()} - Developer, Writer, Creator`;

export const DESCRIPTION =
  "Full-Stack developer, JavaScript enthusiast and a Learner.";

export const DOMAIN = process.env.DOMAIN || "a3har.com";
