function getName() {
  return process.env.NAME || "Muhammad Azhar";
}

function getTitle() {
  return `${getName()} - Developer, Builder`;
}

export const NAME = process.env.NAME || "Muhammad Azhar";

export const TITLE = `${getName()} - Developer, Builder`;

export const DESCRIPTION =
  "Full-Stack developer, JavaScript enthusiast and a Learner.";

export const DOMAIN = process.env.DOMAIN || "a3har.com";
