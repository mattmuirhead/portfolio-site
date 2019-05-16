import React from 'react'
import { Link } from 'gatsby'

import * as styles from './logo.module.scss'

export default class Logo extends React.Component {
    render() {
        return (
            <Link 
                to="/"
                className={`${styles.logoWrapper} ${this.props.menu && styles.alt} link`}>
                <div className={`${styles.logo} ${this.props.large && styles.large}`}>
                    <svg viewBox="0 0 257 307">
                        <g>
                            <path className={styles.path} d=" M 32 273 L 32 165 L 127 237 L 222 165 L 222 59 L 127 134 L 32 59 L 32 165" fill="none" strokeWidth="50" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                            <line className={styles.line} x1="222" y1="274" x2="222" y2="166" strokeWidth="50" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                            <line className={styles.masks} x1="117" y1="176" x2="-26" y2="69" strokeWidth="35" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                            <line className={styles.masks} x1="123" y1="293" x2="271" y2="181" strokeWidth="35" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                        </g>
                    </svg>
                </div>
                {this.props.hasType &&
                    <h1 className={styles.type}>
                        Front End UI Developer
                    </h1>
                }
            </Link>
        );
    }
}