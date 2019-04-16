import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/layout'

export default ({ data }) => {
	const project = data.contentfulProjects
  	return (
		<Layout>
			<Link to="/">Home</Link> 
			<div>{project.title}</div>
			<div>{project.company}</div>
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