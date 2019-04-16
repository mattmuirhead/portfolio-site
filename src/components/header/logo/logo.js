import React from 'react'
import { Link } from 'gatsby'

import * as styles from './logo.module.scss'

export default () => (
    <Link 
        to="/"
        className={styles.logoWrapper}>
        <div className={styles.logo}>
            <svg viewBox="0 0 257 307">
                <g>
                    <path className={styles.path} d=" M 32 273 L 32 165 L 127 237 L 222 165 L 222 59 L 127 134 L 32 59 L 32 165" fill="none" stroke-width="50" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/>
                    <line className={styles.line} x1="222" y1="274" x2="222" y2="166" stroke-width="50" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/>
                    <line x1="117" y1="176" x2="-26" y2="69" stroke-width="35" stroke="rgb(255,255,255)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/>
                    <line x1="123" y1="293" x2="271" y2="181" stroke-width="35" stroke="rgb(255,255,255)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/>
                </g>
            </svg>
        </div>
        <div className={styles.type}>
            Front End Developer
        </div>
    </Link>
)