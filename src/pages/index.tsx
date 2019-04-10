import React from "react"
import { graphql } from 'gatsby'
import * as styles from './Index.module.scss'

interface IndexPageProps {
	data: {
	  	site: {
			siteMetadata: {
		  		name: string;
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
			<div className={styles.Container}>
		  		<h1>{name}</h1>
		  		<p>{tagline}</p>

				<ul>
          			{projects.map((project, index) => {
            			return <li key={index}>{project.title}</li>
          			})}
        		</ul>
			</div>
	  	)
	}
}