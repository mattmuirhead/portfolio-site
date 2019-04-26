import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Slide from '../components/homepageSlider/SlideLayout/SlideLayout'

import * as styles from './projects.module.scss'

export default ({ data }) => {
	// const project = data.contentfulProjects
  	return (
		<Layout>
			<Slide 
				title="Some cool quote goes here"
				subTitle="Small title"
				linkText="View Project"
				link="/project/british-horseracing-authority"
				project />

			<article className={styles.articleWrapper}>
				<div className={styles.content}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>

				<div className={styles.content}>
					<img src="https://placeimg.com/1000/600/tech" alt="" />
				</div>

				<div className={styles.content}>
					<img src="https://placeimg.com/1000/600/tech" alt="" />
				</div>

				<div className={styles.content}>
					<img src="https://placeimg.com/1000/600/tech" alt="" />
				</div>

				<div className={styles.content}>
					<img src="https://placeimg.com/1000/600/tech" alt="" />
				</div>

				<div className={styles.content}>
					<img src="https://placeimg.com/1000/600/tech" alt="" />
				</div>
			</article>
		</Layout>
  	)
}

export const query = graphql`
  	query($slug: String!) {
    	contentfulProjects(slug: { eq: $slug } ) {
			  title
			  company
		}
  	}
`