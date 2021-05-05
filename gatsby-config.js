module.exports = {
  siteMetadata: {
    title: `Gatsby Foodtruck Website`,
    description: `Simply Foodtruck Template.`,
    author: `@Felikso`,
    siteUrl: `https://lwowskie-smaki.ventus-trade.pl/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-json`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.projekty.ventus-trade.pl',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/products`,
      },
    },
    `gatsby-plugin-sass`,
/*     {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    }, */
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dataProducts`,
        path: `${__dirname}/src/dataProducts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dataMenu`,
        path: `${__dirname}/src/dataMenu`,
      },
    },
    {
			resolve: `gatsby-source-wordpress`,
			options: {
				url: "https://blog.ventus-trade.pl/graphql",
			},
		},
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-video-poster`,
        ],
      },
    },
/*     {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/Layout/index.js`,
      },
    }, */
/*     {
			resolve: 'gatsby-plugin-graphql-image',
			options: {
				schemaName: "allWpDish",
				imageFieldName: "sourceUrl"
			}
		}, */
/*     {
			resolve: `gatsby-source-graphql`,
			options: {
				// This type will contain remote schema Query type
				typeName: `hwgraphql`,
				// This is field under which it's accessible
				fieldName: `HWGraphQL`,
				// Url to query from
				url: "https://blog.ventus-trade.pl/graphql",
				refetchInterval: 6000,
			},
		},
		{
			resolve: 'gatsby-plugin-graphql-image',
			options: {
				schemaName: "hwgraphql",
				imageFieldName: "sourceUrl"
			}
		}, */



   /*  {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `blog.ventus-trade.pl`,
        protocol: `https`,
        plugins: [
            {
              resolve: `@draftbox-co/gatsby-wordpress-inline-images`,
              options: {
                baseUrl: `blog.ventus-trade.pl`,
                protocol: `https`,
                useACF: true,
              }
            }
          ]
        }
    }, */


    `gatsby-transformer-ffmpeg`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-scroll-reveal`,
/*     {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
  
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    } */

  ],
}
