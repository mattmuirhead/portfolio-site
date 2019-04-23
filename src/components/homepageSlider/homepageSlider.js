import React from 'react'
import Flickity from 'react-flickity-component';
import Slide from './SlideLayout/SlideLayout';

import * as styles from './homepageSlider.module.scss'

export default class Slider extends React.Component {
    
    render() {
        const flickityOptions = {
            draggable: false,
            prevNextButtons: false,
            pageDots: false,
        }

        return (
            <div className={styles.slider}>
                <Flickity
                    className={styles.flickity}
                    elementType={'div'}
                    options={flickityOptions}
                    reloadOnUpdate
                    >
                    <Slide 
                        title="Some cool quote goes here"
                        subTitle="Small title"
                        linkText="View Project"
                        link="/" />
                </Flickity>
            </div>
        );
    }
}