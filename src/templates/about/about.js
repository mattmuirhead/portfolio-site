import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import Slide from '../../components/homepageSlider/SlideLayout/SlideLayout'
import ProgressBar from '../../components/progressBar/progressBar'

// import * as styles from './about.module.scss'

const About = ({ data }) => {
	const about = data.contentfulAboutPage
  	return (
		<Layout hasScroll hasFooter>
			<ProgressBar />

			<Slide 
				title={about.title}
				subTitle={about.subTitle}
				linkText="About Me"
				link={`/${about.slug}`}
				subPage 
				/>
		</Layout>
  	)
}

export const query = graphql`
  	query($slug: String!) {
    	contentfulAboutPage(slug: { eq: $slug } ) {
			title
			slug
			subTitle
		}
  	}
`

export default About;