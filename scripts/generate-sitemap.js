const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const routes = await globby(["app/**/page.tsx", "data/**/*.mdx", "!app/api/**"]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${routes
              .filter((route) => !route.includes("["))
              .map((routeFile) => {
                let path = routeFile
                  .replace("app", "")
                  .replace("data", "")
                  .replace("/page.tsx", "")
                  .replace(".mdx", "");

                if (path === "/page.tsx" || path === "/index" || path === "") {
                  path = "";
                }

                return `
                        <url>
                            <loc>${`https://manuarora.in${path}`}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.xml", formatted);
})();
