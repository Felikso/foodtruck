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
      resolve: `@el7cosmos/gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Ubuntu',
            variants: [
              '400',
              '400i',
              '700',
              '700i',
            ],
            subsets: [
              'latin-ext',
            ],
          },
        ],
      },
    },
/*      {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Ubuntu",
              variants: ["300", "400", "500"],
              fontDisplay: 'swap',
            },
          ],
        },
        formatAgents: {
          woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
          woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
        },
        formats: ['woff2', 'woff'],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    }, */ 
/*     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu`
        ],
        display: 'swap'
      }
    }, */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-video-poster`,
            options: {
              // Size of the poster in pixels
              // By default width is 1920px (HD video width)
              // If your container is smaller, you should specify a smaller size
              width: 720,
            },
          },
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
/*     `gatsby-plugin-transition-link`, */
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-minify`,
    'gatsby-plugin-loadable-components-ssr',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-offline'
/*     {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    }, */
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
