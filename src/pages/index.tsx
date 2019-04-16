import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/layout'

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

		const projects = this.props.data.allContentfulProjects.edges.map((edge) => edge.node)
		  
		return (
			<Layout>
				<ul>
          			{projects.map((project, index) => {
						return <li key={index}>
									<Link to={`/project/${project.slug}`}>
										{project.title}
									</Link>
								</li>
          			})}
        		</ul>
			</Layout>
	  	)
	}
}