import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import Slide from '../../components/homepageSlider/SlideLayout/SlideLayout'
import ProgressBar from '../../components/progressBar/progressBar'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

import * as styles from '../project/projects.module.scss'

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
			
			<article className={styles.articleWrapper}>
				<div className={styles.content}>
					{documentToReactComponents(about.about.json)}
				</div>

				<div className={styles.content}>
					<h3>Clients</h3>

					<div className={styles.logoList}>
						{about.clients.map((img, i) => 
							<div key={i} className={`${styles.imgWrapper} link`}>
								<LazyLoadImage 
									src={img.file.url} 
									alt={img.file.fileName} 
									effect="opacity"
									/>
							</div>
							
						)}
					</div>
				</div>

				<div className={styles.content}>
					<h3>Worked For</h3>

					<div className={`${styles.logoList} ${styles.work}`}>
						{about.workedFor.map((img, i) => 
							<div key={i} className={`${styles.imgWrapper} link`}>
								<LazyLoadImage 
									src={img.file.url} 
									alt={img.file.fileName} 
									effect="opacity"
									/>
							</div>
							
						)}
					</div>
				</div>

				<div className={styles.content}>
					<h3>Knowledge</h3>

					<div className={styles.logoList}>
						{about.knowledge.map((img, i) => 
							<div key={i} className={`${styles.imgWrapper} link`}>
								<LazyLoadImage 
									src={img.file.url} 
									alt={img.file.fileName} 
									effect="opacity"
									/>
							</div>
							
						)}
					</div>
				</div>

				<a className={`${styles.view} link`} 
					href="/projects"
					target="blank">
					View Projects
				</a>

				<a className={`${styles.view} link`} 
					href="mailto:matt.rob.muirhead@googlemail.com">
					Contact
				</a>
			</article>
		</Layout>
  	)
}

export const query = graphql`
  	query($slug: String!) {
    	contentfulAboutPage(slug: { eq: $slug } ) {
			title
			slug
			subTitle
			about {
				json
			}
			clients {
				file {
					url
					fileName
				}
			}
			workedFor {
				file {
					url
					fileName
				}
			}
			knowledge {
				file {
					url
					fileName
				}
			}
		}
  	}
`

export default trackWindowScroll(About);