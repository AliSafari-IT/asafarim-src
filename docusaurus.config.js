/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ASAFARIM',
  tagline: 'Programming for Science',
  url: 'https://asafarim.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ASAFARIM-IT', // Usually your GitHub org/user name.
  projectName: 'asafarim-src', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        // darkIcon: '🌙', // 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌑
        darkIcon: '🌓',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '🌗',

        lightIconStyle: {
          marginLeft: '2px',
        },
      },
    },
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
        {
          href: 'https://github.com/AliSafari-IT/my-asafarim-site',
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
            {
              label: 'Contact',
              to: '/ContactUs',
            },
          ],
        },
        {
          title: 'Recent Updates',
          items: [],
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/AliSafari-IT/asafarim-src/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/AliSafari-IT/asafarim-src/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
