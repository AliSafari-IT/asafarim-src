/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ASAFARIM',
  tagline: 'Programming for Science',
  url: 'https://asafarim.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ASAFARIM-IT',
  projectName: 'asafarim-src', 
  themeConfig: {
    navbar: {
      title: 'ASAFARIM',
      logo: {
        alt: 'ASAFARIM Logo',
        src: 'img/logoT.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Code Topics',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/projects', label: 'Projects', position: 'left' },
        {
          href: 'https://github.com/AliSafari-IT/asafarim-src',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/eula', position: 'right', label: "EULA"
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Topics',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/10703628/ali-safari',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/d5RzKjfwbe',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AliSafari-IT/my-asafarim-site',
            },
            {
              label: 'EULA',
              to: '/eula',
            },
          ],
        },
        {
          title: 'Connect',
          items: [{
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ali-safari-m/',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/asafarim',
          },
          {
            label: 'Contact Us',
            to: '/ContactUs',
          },
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} ASAFARIM, Inc.<br/>
      Learning is an experience, everything else is just information. (Albert Einstein)`,
    },

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // my repo.
          editUrl:
            'https://github.com/AliSafari-IT/asafarim-src/blob/main',
        },
        googleAnalytics: {
          trackingID: 'G-5C5QXFF5ZX',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        blog: {
          showReadingTime: true,
          // my repo.
          editUrl:
            'https://github.com/AliSafari-IT/asafarim-src/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Sen|Source+Code+Pro',
    'https://at-ui.github.io/feather-font/css/iconfont.css'
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          petstore: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "examples/petstore.yaml", // Path to designated spec file
            outputDir: "api/petstore", // Output directory for generated .mdx docs
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          burgers: {
            specPath: "examples/food/burgers/openapi.yaml",
            outputDir: "api/food/burgers",
          }
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // Allows use of @theme/ApiItem and other components
};
