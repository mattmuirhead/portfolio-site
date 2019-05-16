import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './header/header'
import Cursor from './cursor/cursor'
import HomeLoader from '../homeLoader/homeLoader'

import * as styles from './layout.module.scss'

export default ({ children }) => (
    <div id="siteContainer" className={styles.siteContainer}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Matt Muirhead | Front End UI Developer</title>
            <meta name="description" content="Matt Muirhead Front End UI Developer based in London and Surrey, United Kingdom" />
            <link rel="canonical" href="http://mattmuirhead.co.uk" />
        </Helmet>

        <Header />
        <HomeLoader />

        {children}

        <Cursor />
    </div>
)