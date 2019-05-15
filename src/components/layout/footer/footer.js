import React from 'react'
import Logo from '../header/logo/logo'

import * as styles from './footer.module.scss'

export default () => (
    <footer className={styles.footer}>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/mattmuirhead/" target="blank" className="link">
                    <span className="entypo-linkedin"></span>
                </a>
            </li>
            <li><Logo large /></li>
            <li>
                <a href="mailto:hello@mattmuirhead.co.uk" className="link">
                    <span className="entypo-mail"></span>
                </a>
            </li>
        </ul>
    </footer>
)