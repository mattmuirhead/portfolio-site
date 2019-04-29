import React from 'react'
import Header from './header/header'
import Cursor from './cursor/cursor'
import Scroller from './scroller/scroller'
import Footer from './footer/footer'

import * as styles from './layout.module.scss'

export default ({ children, hasScroll, hasFooter }) => (
    <div id="siteContainer" className={styles.siteContainer}>
        <Header />

        {children}

        {hasScroll && <Scroller />}
        {hasFooter && <Footer />}
        <Cursor />
    </div>
)