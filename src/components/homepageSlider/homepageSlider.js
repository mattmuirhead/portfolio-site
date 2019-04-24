import React from 'react'
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
        console.log('swipe left');
        this.flkty.next();
    }

    onSwipeRight() {
        console.log('swipe right');
        this.flkty.previous();
    }
    
    render() {
        const flickityOptions = {
            draggable: false,
            prevNextButtons: false,
            pageDots: false,
        }

        return (
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
                        <Slide 
                            title="Some cool quote goes here"
                            subTitle="Small title"
                            linkText="View Project"
                            link="/" />

                        <Slide 
                            title="British Horseracing Authority"
                            subTitle="Wordpress Build"
                            linkText="View Project"
                            link="/" />
                        
                        <Slide 
                            title="My Amazon Jobs"
                            subTitle="Craft CMS Build"
                            linkText="View Project"
                            link="/" />
                    </Flickity>
                </Swipe>
            </Debounce>
        );
    }
}