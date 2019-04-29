import React from 'react'
import { Link } from 'gatsby'

import * as styles from './menu.module.scss'

export default class Menu extends React.Component {
    render() {
        return (
            <div className={`${styles.menuWrapper} ${this.props.menu && styles.open}`}>
            
                <ul className={styles.menu}>
                    <li>
                        <Link to="/" className="link">Projects</Link>
                        <span className={styles.echo}>Projects</span>
                        <span className={styles.number}>01</span>
                    </li>
                    <li>
                        <Link to="/about" className="link">About</Link>
                        <span className={styles.echo}>About</span>
                        <span className={styles.number}>02</span>
                    </li>
                    <li>
                        <a 
                            href="mailto:matt.rob.muirhead@googlemail.com" 
                            target="blank" 
                            className="link">
                            Contact
                        </a>
                        <span className={styles.echo}>Contact</span>
                        <span className={styles.number}>03</span>
                    </li>
                </ul>
            </div>
        );
    }
}