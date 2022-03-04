require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://gorgeous-golden.de`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    "gatsby-remark-images",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
          name: `Gorgeous Golden from Gutach - Golden Retriever Zucht`,
          short_name: `Gorgeous Golden`,
          start_url: `/`,
          theme_color: `rgba(156, 163, 175, 1.0)`,
          display: `minimal-ui`,
          icon: `src/images/logos/Logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name: `hund`,
            endpoint: `hunde`,
          },
          {
            name: `clubs`,
            endpoint: `clubs`,
          },
          {
            name: `aktuelles`,
            endpoint: `aktuelles`,
          },
          {
            name: `zucht`,
            endpoint: `zuchts`,
          },
          {
            name: `galerie`,
            endpoint: `galeries`,
          },
        ],
        singleTypes: [
          `footer`,
          `home`,
          "uns",
          "kontakt",
          "wurfplanung",
          "metadata",
        ],
      },
    },
  ],
}
