import React from "react"
import { Link, graphql } from 'gatsby'
import * as styles from './Index.module.scss'

interface IndexPageProps {
	data: {
	  	site: {
			siteMetadata: {
				name: string;
				slug: string;
		  		tagline: string;
			}
		}
		allContentfulProjects: {
			edges: {
			  	node: {
					title: string;
			  	}
			}
		}   
	}
}

export const indexPageQuery = graphql`
  	query IndexPageQuery {
    	site {
      		siteMetadata {
        		name
				tagline
      		}
		}
		allContentfulProjects {
			edges {
			  	node {
					title
					slug
			  	}
			}
		}
  	}
`
  
export default class IndexPage extends React.Component<IndexPageProps, {}> {
	public render() {

		const {
			name,
			tagline
		} = this.props.data.site.siteMetadata

		const projects = this.props.data.allContentfulProjects.edges.map((edge) => edge.node)
		  
		return (
			<div className={styles.siteContainer}>
		  		<h1>{name}</h1>
		  		<p>{tagline}</p>

				<ul>
          			{projects.map((project, index) => {
						return <li key={index}>
									<Link to={`/project/${project.slug}`}>
										{project.title}
									</Link>
								</li>
          			})}
        		</ul>
			</div>
	  	)
	}
}