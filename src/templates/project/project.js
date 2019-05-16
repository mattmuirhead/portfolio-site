import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Scroller from '../../components/layout/scroller/scroller'
import Footer from '../../components/layout/footer/footer'
import Slide from '../../components/homepageSlider/SlideLayout/SlideLayout'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

import * as styles from './projects.module.scss'

const Project = ({ data }) => {
	const project = data.contentfulProjects
  	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{project.title} - Matt Muirhead | Front End UI Developer</title>
				<meta name="description" content="Matt Muirhead Front End UI Developer based in London and Surrey, United Kingdom" />
				<link rel="canonical" href={`http://mattmuirhead.co.uk/project/${ project.slug }`} />
			</Helmet>

			<Slide 
				title={project.title}
				subTitle={project.projectType}
				linkText="View Project"
				link={`/project/${project.slug}`}
				subPage 
				background={project.featuredImage.file.url}
				/>
				<article className={styles.articleWrapper}>
					<div className={styles.projectMeta}>
						<ul>
							<li>
								<span>Client</span>
								{project.company}
							</li>

							<li>
								<span>Work for</span>
								{project.workFor}
							</li>

							<li>
								<span>Role</span>
								{project.role}
							</li>

							<li>
								<span>Year</span>
								{project.year}
							</li>
						</ul>
					</div>


					<div className={styles.content}>
						{documentToReactComponents(project.description.json)}
					</div>
					
					{project.embedUrl &&
						<div className={`${styles.content} ${styles.iframe}`}>
							<iframe 
								src={project.embedUrl} 
								title="Embed" 
								frameBorder="0" 
								allow="autoplay; fullscreen" 
								allowFullScreen />
						</div>
					}

					{project.videoUrl &&
						<div className={`${styles.content} ${styles.video}`}>
							<video autoPlay loop>
								<source src={project.videoUrl} type="video/mp4" />
							</video>
						</div>
					}

					{project.imageGallery.map((img, i) => 
						<div key={i} className={styles.content}>
							<LazyLoadImage 
								src={img.file.url} 
								alt={img.file.fileName} 
								effect="opacity"
								/>
						</div>
					)}

					{project.url !== null &&
						<a className={`${styles.view} link`} 
							href={project.url}
							target="blank">
							View Project
						</a>
					}

				</article>
				
				<Scroller />
				<Footer />
		</div>
  	)
}

export const query = graphql`
  	query($slug: String!) {
    	contentfulProjects(slug: { eq: $slug } ) {
			title
			projectType
			company
			workFor
			role
			year
			description {
				json
			}
			embedUrl
			videoUrl
			imageGallery {
				file {
					url
					fileName
				}
			}
			featuredImage {
				file {
					url
				}
			}
			url
		}
  	}
`

export default trackWindowScroll(Project);