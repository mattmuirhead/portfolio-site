import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
	const project = data.contentfulProjects
  	return (
		<div>
			<Link to="/">Home</Link> 
			<div>{project.title}</div>
			<div>{project.company}</div>
		</div>
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