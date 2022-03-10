const st = require("@sergeymyssak/nextjs-sitemap");

const { configureSitemap } = st;

async function fetchDynamicPaths() {
  return ["infinite", "givetrack", "cuckoo", "monax"];
}

async function getDynamicPaths() {
  const paths = await fetchDynamicPaths();

  return paths.map((item) => `/caseStudy/${item}`);
}

getDynamicPaths().then((paths) => {
  const Sitemap = configureSitemap({
    domains: [{ domain: "zircon.tech", defaultLocale: "en" }],
    include: paths,
    excludeIndex: false,
    pagesConfig: {
      "/blog/*": {
        priority: "1",
        changefreq: "daily",
      },
    },
    trailingSlash: false,
    targetDirectory: __dirname + "/public",
    pagesDirectory: __dirname + "/pages",
  });

  Sitemap.generateSitemap();
});
