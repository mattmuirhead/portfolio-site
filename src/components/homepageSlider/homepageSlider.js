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

    next() {
        this.flkty.next();
    }

    previous() {
        this.flkty.previous();
    }
    
    render() {
        const flickityOptions = {
            draggable: false,
            prevNextButtons: false,
            pageDots: false,
            fade: true
        }

        return (
            <StaticQuery
                query={
                    graphql`
                        query SliderQuery {
                            allContentfulAboutPage {
                                edges {
                                    node {
                                        title
                                        slug
                                        subTitle
                                    }
                                }
                            } 
                            allContentfulProjects(
                                filter: { 
                                    homepageOrder: { lt: 6 } 
                                }, 
                                sort: {
                                    fields: [homepageOrder],
                                    order: ASC
                                }) {
                                    edges {
                                    node {
                                        title
                                        homepageOrder
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
                            onSwipeLeft={this.next.bind(this)}
                            onSwipeRight={this.previous.bind(this)}
                            >
                            <div className={styles.slideControls}>
                                <div className="link" onClick={this.previous.bind(this)}>
                                    <span className="entypo-left-open-mini"></span>
                                </div>
                                <div className="link" onClick={this.next.bind(this)}>
                                    <span className="entypo-right-open-mini"></span>
                                </div>
                            </div>
                            <Flickity 
                                flickityRef={c => this.flkty = c}
                                className={styles.flickity}
                                elementType={'div'}
                                options={flickityOptions}
                                reloadOnUpdate
                                >
                                {data.allContentfulAboutPage.edges.map((about, i) => 
                                    <Slide
                                        key={i}
                                        title={about.node.title}
                                        subTitle={about.node.subTitle}
                                        linkText="About Me"
                                        link={`/${about.node.slug}`}
                                        homeSlide />    
                                )}
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