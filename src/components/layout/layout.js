import React from 'react'
import Header from './header/header'
import Scroller from './scroller/scroller'

import * as styles from './layout.module.scss'

export default ({ children, hasScroll }) => (
    <div className={styles.siteContainer}>
        <Header />
        {children}

        {hasScroll && <Scroller />}
    </div>
)