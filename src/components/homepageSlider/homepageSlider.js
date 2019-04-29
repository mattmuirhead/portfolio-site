import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Flickity from 'react-flickity-component';
import Swipe from 'react-easy-swipe';
import Slide from './SlideLayout/SlideLayout';
import { Debounce } from 'react-throttle';

import * as styles from './homepageSlider.module.scss'

export default class Slider extends React.Component {

    handleScroll = (e) => {
        if (e.deltaY < 0) {
            this.flkty.previous();
        }

        if (e.deltaY > 0) {
            this.flkty.next();
        }
    };

    onSwipeLeft() {
        this.flkty.next();
    }

    onSwipeRight() {
        this.flkty.previous();
    }
    
    render() {
        const flickityOptions = {
            draggable: false,
            prevNextButtons: false,
            pageDots: false,
        }

        return (
            <StaticQuery
                query={
                    graphql`
                        query SliderQuery {
                            allContentfulProjects {
                                edges {
                                    node {
                                        title
                                        projectType
                                        slug
                                        featuredImage {
                                            file {
                                                url
                                            }
                                        }
                                    }
                                }
                            }      
                        }
                    `
                }
                render={data => (
                    <Debounce time="100" handler="onWheel">
                        <Swipe 
                            className={styles.slider}
                            onWheel={this.handleScroll.bind(this)}
                            onSwipeLeft={this.onSwipeLeft.bind(this)}
                            onSwipeRight={this.onSwipeRight.bind(this)}
                            >
                            <Flickity 
                                flickityRef={c => this.flkty = c}
                                className={styles.flickity}
                                elementType={'div'}
                                options={flickityOptions}
                                reloadOnUpdate
                                >
                                {data.allContentfulProjects.edges.map((project, i) => 
                                    <Slide
                                        key={i}
                                        title={project.node.title}
                                        subTitle={project.node.projectType}
                                        linkText="View Project"
                                        link={`/project/${project.node.slug}`}
                                        background={project.node.featuredImage.file.url} />    
                                )}
                            </Flickity>
                        </Swipe>
                    </Debounce>
                )}
            />
        );
    }
}