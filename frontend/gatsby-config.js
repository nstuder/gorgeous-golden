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
    /*{
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },*/
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
