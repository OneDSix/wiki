import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: '1D6 Docs',
  tagline: 'Documentation for everything from APIs to how to make a mod.',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://OneDSix.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OneDSix',
  projectName: 'docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr-CA', 'vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/OneDSix/wiki/tree/main'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    navbar: {
      title: '1D6 Docs',
      logo: {
        alt: '1D6 Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'moddingSidebar',
          position: 'left',
          label: 'Modding Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiDocsSidebar',
          position: 'left',
          label: 'REST API',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/OneDSix/wiki',
          label: 'Edit on GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/5BhZKVn8bs',
            },
            {
              label: 'Matrix',
              href: 'https://matrix.to/#/!QlLHLtAHIewcitWaxW:matrix.org?via=matrix.org',
            },
          ],
        },
        {
          title: 'About Us',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OneDSix',
            },
            {
              label: 'Main Site',
              href: 'https://OneDSix.github.io/',
            },
          ],
        },
        {
          title: 'Shortcuts',
          items: [
            {
              label: 'API Docs',
              href: '/docs/api/intro',
            },
            {
              label: 'Java Mods',
              href: '/docs/mods/jvm',
            },
            {
              label: 'JS Mods',
              href: '/docs/mods/js',
            },
          ],
        },
      ],
      copyright: `Copyright ©${new Date().getFullYear()} 1D6 and Contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'csharp', 'json', 'kotlin', 'typescript', 'groovy', 'scala', 'shell-session'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
