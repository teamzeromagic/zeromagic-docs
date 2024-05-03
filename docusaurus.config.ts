import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Zeromagic",
  tagline: "Instant Backend Builder",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

 
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath : "/",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",
    // navbar: {
    //   title: '',
    //   // hideOnScroll: false,
    //   logo: {
    //     alt: "Zeromagic Logo",
    //     src: "img/logo-full.svg",
    //     href: 'https://hasura.io',
    //   },
    //   items: [
    //     {
    //       type: "docSidebar",
    //       sidebarId: "tutorialSidebar",
    //       position: "right",
    //       label: "Documentation",
    //     },
    //     { to: "/blog", label: "Blog", position: "right" },
    //     {
    //       href: "https://github.com/facebook/docusaurus",
    //       label: "GitHub",      
    //       position: "right",
    //     }, 
    //   ],
    // },
 
    navbar: {
      hideOnScroll: false,
      title: '',
      logo: {
        alt: 'Hasura Logo',
        src: '/img/logo-full.svg',
        srcDark: '/img/logo-full.svg',
        href: 'https://hasura.io',
      },
      items: [
      { 
          type: "docSidebar" ,
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
 
        { 
          to: "/blog",
          label: 'Blog',
          position: 'left',
        },
        {
          to: 'https://hasura.io/learn/',
          label: 'Tutorials',
          position: 'left',
        },
        {
          to: 'https://hasura.io/changelog',
          label: "What's New",
          id: 'whats-new-link',
          position: 'left',
        }, 
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   dropdownActiveClassDisabled: true,
        //   dropdownItemsAfter: [
        //     {
        //       href: 'https://hasura.io/docs/3.0/index/',
        //       label: 'v3.x',
        //     },
        //     {
        //       href: 'https://hasura.io/docs/1.0/graphql/core/index.html',
        //       label: 'v1.x',
        //     },
        //   ],
        // },
        {
          type: 'search',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/hasura/graphql-engine',
        //   position: 'right',
        //   className: 'header-github-link',
        //   'aria-label': 'GitHub repository',
        // },
        {
          to: 'https://hasura.io/pricing/',
          label: 'Pricing',
          position: 'right',
        },
        {
          to: 'https://cloud.hasura.io/login?pg=docs&plcmt=header&cta=log-in&tech=default',
          label: 'Login',
          position: 'right',
          className: 'nav-link_login',
        },
        {
          to: 'https://cloud.hasura.io/signup?pg=products&plcmt=header&cta=get_started&tech=default',
          label: 'Get Started',
          position: 'right',
          className: 'nav-link_getting-started',
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Zeromagic, Pvt. Ltd. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
   
  } satisfies Preset.ThemeConfig,
};

export default config;
