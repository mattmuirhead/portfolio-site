import React from 'react'
import { Link } from 'gatsby'
import Tilt from 'react-tilt'

import * as styles from './SlideLayout.module.scss'

export default class Slide extends React.Component {
    
    render() {
        return (
            <div className={styles.slide}>
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
                        <h3>{this.props.subTitle}</h3>
                        <h2>{this.props.title}</h2>
                        <Link className="link" to={this.props.link}>{this.props.linkText}</Link>
                    </div>
                </Tilt>
            </div>
        );
    }
}