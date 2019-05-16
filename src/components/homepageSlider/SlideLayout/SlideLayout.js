import React from 'react'
import { Link } from 'gatsby'
import Tilt from 'react-tilt'

import * as styles from './SlideLayout.module.scss'

export default class Slide extends React.Component {
    
    render() {
        return (
            <div className={`${styles.slide} ${this.props.subPage && styles.subPageHeader}`}>
                <div className={styles.backgroundOverlay}>
                {this.props.homeSlide ? 
                    <iframe 
                        title="playgroundItem" 
                        className={styles.backgroundImage} 
                        src="/rollercoaster/" />
                :
                    <div 
                        className={styles.backgroundImage} 
                        style={{backgroundImage: 'url(' + this.props.background + ')'}}/>
                }
                </div>
                <Tilt 
                    options={
                        {
                            reverse: true,
                            max: 5,
                            scale: 1
                        }
                    } 
                    className={styles.tilt}>
                    <div className={styles.slideInner}>
                        <div className={styles.overlay}>
                            <h3>{this.props.subTitle}</h3>
                        </div>
                        <div className={styles.overlay}>
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className={`${styles.overlay} ${styles.overlayLink}`}>
                            <Link className="link" to={this.props.link}>{this.props.linkText}</Link>
                        </div>
                    </div>
                </Tilt>
            </div>
        );
    }
}