import React from 'react'

import * as styles from './homeLoader.module.scss'

export default class HomeLoader extends React.Component {
    
    render() {
        return (
            <div className={styles.homeLoaderWrapper}>
                <div className={styles.homeLoaderBackground}></div>
                <div className={styles.homeLoader}>
                    <svg className={styles.homeLoaderLogo} viewBox="0 0 257 307">
                        <g>
                            <path className={styles.path} d=" M 32 273 L 32 165 L 127 237 L 222 165 L 222 59 L 127 134 L 32 59 L 32 165" fill="none" strokeWidth="50" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                            <line className={styles.line} x1="222" y1="274" x2="222" y2="166" strokeWidth="50" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                            <line className={styles.masks} x1="117" y1="176" x2="-26" y2="69" strokeWidth="35" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                            <line className={styles.masks} x1="123" y1="293" x2="271" y2="181" strokeWidth="35" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}