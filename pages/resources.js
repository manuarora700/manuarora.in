import Container from "@/components/Container";
import ResourcesCard from "@/components/ResourcesCard";

export default function Snippets({ snippets }) {
  // TODO: Make sections for each type, ex: Javascript, HTML CSS etc
  return (
    <Container
      title="Resources – Manu Arora"
      description="Helpful websites that I've been using for years that have helped me in developing
      applications and much more"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Resources
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Helpful{" "}
          <span className="bg-gray-100 border rounded-md px-1 py-0.5 tracking-tight dark:text-gray-300 dark:bg-gray-700">
            websites
          </span>{" "}
          that I've been using for years that have helped me in developing
          applications and much more. 🔥
        </p>

        <h2 className="font-bold text-xl md:text-2xl tracking-tight mt-8 text-black dark:text-white border-b-4 border-green-300">
          Utilities
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {/* https://hypercolor.dev/ */}
          <ResourcesCard
            title="Get Avaataars"
            link="https://getavataaars.com/"
            websiteLink="getavataaars.com"
            description="Generate free avatars for multipurpose use."
          />
          <ResourcesCard
            title="Hypercolor"
            link="https://hypercolor.dev"
            websiteLink="hypercolor.dev"
            description="Tailwind gradients"
          />
          <ResourcesCard
            title="Undesign - Free Resoureces"
            link="https://undesign.learn.uno/"
            websiteLink="undesign.learn.uno"
            description="Generate free Icons, illustrations and more"
          />
          <ResourcesCard
            title="Haikei app"
            link="https://app.haikei.app/"
            websiteLink="app.haikei.app"
            description="Generate SVG bogs, waves (single, multiple)."
          />
          <ResourcesCard
            title="Ray"
            link="https://ray.so/"
            websiteLink="ray.so"
            description="Convert code to beautiful images"
          />
          <ResourcesCard
            title="Neumorphism design"
            link="https://neumorphism.io/"
            websiteLink="neumorphism.io"
            description="Get neuphormism theme layouts for your cards and websites"
          />
        </div>

        <h2 className="font-bold text-xl md:text-2xl tracking-tight mt-8 text-black dark:text-white border-b-4 border-green-300">
          User Interface
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {/* https://storyset.com/ */}
          <ResourcesCard
            title="Story Set"
            link="https://storyset.com/"
            websiteLink="storyset.com"
            description="Beautiful illustrations and icons"
          />
          <ResourcesCard
            title="Tailwind UI Kit"
            link="https://www.tailwind-kit.com/"
            websiteLink="tailwind-kit.com"
            description="Free tailwind UI Components"
          />
          <ResourcesCard
            title="UI Gradients"
            link="https://uigradients.com"
            websiteLink="uigradients.com"
            description="Get different gradient range"
          />

          <ResourcesCard
            title="Minimal Icons Pack"
            link="https://www.heroicons.com"
            websiteLink="heroicons.com"
            description="Get free icons"
          />
          <ResourcesCard
            title="Waves & SVG blobs"
            link="https://getwaves.io/"
            websiteLink="getwaves.io"
            description="Generate waves for your website."
          />

          <ResourcesCard
            title="Color schemes"
            link="https://www.happyhues.co/"
            websiteLink="happyhues.co"
            description="Color schemes for a page"
          />
          <ResourcesCard
            title="Free Illustrations"
            link="https://lukaszadam.com/illustrations"
            websiteLink="lukaszadam.com"
            description="Free illustrations and icons"
          />
          <ResourcesCard
            title="Paper Illustrations"
            link="https://iconscout.com/paper-illustrations"
            websiteLink="iconscout.com"
            description="Free paper illustrations"
          />
          <ResourcesCard
            title="Background generator"
            link="https://bgjar.com/"
            websiteLink="bgjar.com"
            description="Generate beautfiful backgrounds"
          />
          <ResourcesCard
            title="Avatar Library"
            link="https://limitlessdesigns.io/avatar-illustrations/"
            websiteLink="limitlessdesigns.io"
            description="Free and unique Avatars"
          />

          {/* https://bgjar.com/ */}
        </div>
        <h2 className="font-bold text-xl md:text-2xl tracking-tight mt-8 text-black dark:text-white border-b-4 border-green-300">
          Everyday use
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {/* https://css.gg/ */}
          <ResourcesCard
            title="Free Icons (700+)"
            link="https://css.gg/"
            websiteLink="css.gg"
            description="Collection of 700+ free icons"
          />
          <ResourcesCard
            title="Lorem Ipsum"
            link="https://loripsum.net/"
            websiteLink="loripsum.net"
            description="Advanced lorem text"
          />
          <ResourcesCard
            title="Browser Lite"
            link="https://marketplace.visualstudio.com/items?itemName=antfu.browse-lite"
            websiteLink="marketplace.visualstudio.com"
            description="Browser inside VSCode"
          />

          <ResourcesCard
            title="Site Inspector"
            link="https://www.getsiteinspector.com/"
            websiteLink="getsiteinspector.com"
            description="Inspect your site for errors"
          />
          <ResourcesCard
            title="Public APIs"
            link="https://public-apis.xyz/"
            websiteLink="public-apis.xyz"
            description="Collection of public apis"
          />
          <ResourcesCard
            title="EasyDB"
            link="https://easydb.io/"
            websiteLink="easydb.io"
            description="One click DB deploy - no server"
          />

          <ResourcesCard
            title="Background Remover"
            link="https://www.remove.bg/"
            websiteLink="remove.bg"
            description="Remove bg in one click"
          />
          <ResourcesCard
            title="Meta tag generator"
            link="https://metatags.io/"
            websiteLink="metatags.io"
            description="Generate meta tags for any site"
          />
          <ResourcesCard
            title="Picsum photos"
            link="https://picsum.photos/"
            websiteLink="picsum.photos"
            description="Placeholder randon images"
          />
          <ResourcesCard
            title="Code image"
            link="https://codeimg.io/"
            websiteLink="codeimg.io"
            description="Convert code into beautiful snippets"
          />
          <ResourcesCard
            title="Responsively"
            link="https://responsively.app/"
            websiteLink="responsively.app"
            description="Tool to check responsiveness"
          />
          <ResourcesCard
            title="Dev Fonts"
            link="https://devfonts.gafi.dev/"
            websiteLink="devfonts.gafi.dev"
            description="Dev fonts for developers"
          />
          <ResourcesCard
            title="Peek Links"
            link="https://peek.link/index.html"
            websiteLink="peek.link"
            description="Custom thumbnails for social media"
          />
          <ResourcesCard
            title="100 Day UI"
            link="https://100dailyui.webflow.io/ "
            websiteLink="100dailyui.webflow.io"
            description="Free Figma mockups and elements"
          />
          {/* https://100dailyui.webflow.io/ */}

          {/* https://resumeworded.com/ */}
        </div>
        <h2 className="font-bold text-xl md:text-2xl tracking-tight mt-8 text-black dark:text-white border-b-4 border-green-300">
          Free Themes
        </h2>
        {/* https://themesberg.com/product/ui-kit/pixel-free-bootstrap-5-ui-kit */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          <ResourcesCard
            title="Free Pixel Theme"
            link="https://themesberg.com/product/ui-kit/pixel-free-bootstrap-5-ui-kit"
            websiteLink="themesberg.com"
            description="Free modern, clean Bootstrap 4+ Theme"
          />
          <ResourcesCard
            title="Free Templates"
            link="http://www.mashup-template.com/templates.html"
            websiteLink="mashup-template.com"
            description="Modern HTML templates"
          />
          <ResourcesCard
            title="Landing Stock"
            link="https://landingstock.com/"
            websiteLink="landingstock.com"
            description="Free landing page designs"
          />
          <ResourcesCard
            title="Free Themes & Templates"
            link="https://www.creative-tim.com/templates/free"
            websiteLink="creative-tim.com"
            description="Get free themes, templates & UI Kits"
          />
        </div>

        <h2 className="font-bold text-xl md:text-2xl tracking-tight mt-8 text-black dark:text-white border-b-4 border-green-300">
          Productivity
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          <ResourcesCard
            title="LinkedIn analysis"
            link="https://resumeworded.com"
            websiteLink="resumeworded.com/"
            description="Analyse your LinkedIn profile"
          />
        </div>
      </div>
    </Container>
  );
}
