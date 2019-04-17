import React from 'react'
import Header from './header/header'
import Cursor from './cursor/cursor'
import Scroller from './scroller/scroller'

import * as styles from './layout.module.scss'

export default ({ children, hasScroll }) => (
    <div className={styles.siteContainer}>
        <Header />
        <Cursor />

        {children}

        {hasScroll && <Scroller />}
    </div>
)