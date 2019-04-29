import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Slide from '../components/homepageSlider/SlideLayout/SlideLayout'
import ProgressBar from '../components/progressBar/progressBar'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import * as styles from './projects.module.scss'

export default ({ data }) => {
	const project = data.contentfulProjects
  	return (
		<Layout hasScroll>
			<ProgressBar />

			<Slide 
				title={project.title}
				subTitle={project.projectType}
				linkText="View Project"
				link={`/project/${project.slug}`}
				project 
				background={project.featuredImage.file.url}
				/>
				<article className={styles.articleWrapper}>
					<div className={styles.projectMeta}>
						<ul>
							<li>
								<span>Work for</span>
								{project.workFor}
							</li>

							<li>
								<span>Client</span>
								{project.company}
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

					{project.imageGallery.map((img, i) => 
						<div key={i} className={styles.content}>
							<img src={img.file.url} alt={img.file.fileName} />
						</div>
					)}

					<a className={styles.view} href={project.url}>View Project</a>

				</article>
		</Layout>
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