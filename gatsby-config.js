require(`dotenv`).config({path: `.env`,})

module.exports = {
	siteMetadata: {
	  	name: `digital`,
	  	tagline: `Gatsby + SASS + Typescript = 💪`
	},  
	plugins: [
	  	`gatsby-plugin-sass`,
		`gatsby-plugin-typescript`,	
		{
			resolve: `gatsby-source-contentful`,
			options: {
			  	spaceId: process.env.CONTENTFUL_SPACE_ID,
			  	accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
			},
		},
		{
			resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout/layout.js`)
            }
		},
		{
			resolve: 'gatsby-plugin-page-progress',
			options: {
			  	matchStartOfPath: ['project', 'about'],
			  	height: 4,
			  	prepend: false,
			}
		  }
	],
  }