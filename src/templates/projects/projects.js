import React from 'react'
import { graphql, Link } from 'gatsby'
import Tilt from 'react-tilt'
import Footer from '../../components/layout/footer/footer'

import * as styles from './projects.module.scss'

const Projects = ({ data }) => {
	const projects = data.contentfulProjectPage
  	return (
		<div>
			<div className={styles.projectsWrapper}>
				{projects.projects.map((project, i) => 
					<Link key={i} 
						className={`${styles.project} link`} 
						to={`/project/${project.slug}`}>
						<Tilt 
							options={
								{
									reverse: true,
									max: 10,
									scale: 1
								}
							} 
							className={styles.projectInner}
							style={{backgroundImage: 'url(' + project.featuredImage.file.url + ')'}}>
							<h4>{project.projectType}</h4>
							<h3>{project.title}</h3>
						</Tilt>
					</Link>
				)}
			</div>
			<Footer />
		</div>
  	)
}

export const query = graphql`
  	query($slug: String!) {
    	contentfulProjectPage(slug: { eq: $slug } ) {
			projects {
				title
				slug
				projectType
				featuredImage {
					file {
						url
					}
				}
			}
		}
  	}
`

export default Projects;