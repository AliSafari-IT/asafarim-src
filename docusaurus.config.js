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
          to:'/eula', position:'right', label:"EULA"
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
