import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Scroller from '../../components/layout/scroller/scroller'
import Footer from '../../components/layout/footer/footer'
import Slide from '../../components/homepageSlider/SlideLayout/SlideLayout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

import * as styles from '../project/projects.module.scss'

const About = ({ data }) => {
	const about = data.contentfulAboutPage
  	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>About - Matt Muirhead | Front End Developer</title>
				<meta name="description" content="Matt Muirhead Front End UI Developer based in London and Surrey, United Kingdom" />
				<link rel="canonical" href="http://mattmuirhead.co.uk/about" />
			</Helmet>

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

				<Link className={`${styles.view} link`} 
					to="/projects">
					View Projects
				</Link>

				<a className={`${styles.view} link`} 
					href="mailto:hello@mattmuirhead.co.uk">
					Contact
				</a>
			</article>
			
			<Scroller />
			<Footer />
		</div>
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