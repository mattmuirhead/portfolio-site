import React from 'react'
import Header from './header/header'
import Cursor from './cursor/cursor'
import Scroller from './scroller/scroller'
import HomeLoader from '../homeLoader/homeLoader'

import * as styles from './layout.module.scss'

export default ({ children }) => (
    <div id="siteContainer" className={styles.siteContainer}>
        <Header />
        <HomeLoader />

        {children}

        <Scroller />
        <Cursor />
    </div>
)