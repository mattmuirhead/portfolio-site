import React from 'react'
import Header from './header/header'
import Cursor from './cursor/cursor'
import Scroller from './scroller/scroller'

import * as styles from './layout.module.scss'

export default ({ children, hasScroll }) => (
    <div id="siteContainer" className={styles.siteContainer}>
        <Header />

        {children}

        {hasScroll && <Scroller />}
        <Cursor />
    </div>
)