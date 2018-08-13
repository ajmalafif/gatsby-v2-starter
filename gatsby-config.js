// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'ajmalafif',
      short_name: 'ajmalafif',
      start_url: '/',
      background_color: '#fff',
      theme_color: '#05f',
      display: 'minimal-ui',
      icon: 'src/images/icon.png', // This path is relative to the root of the site.
    },
  },
  'gatsby-plugin-offline'
]
