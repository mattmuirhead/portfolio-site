import React from 'react'
import Header from '../header/header'

import * as styles from './layout.module.scss'

export default ({ children }) => (
    <div className={styles.siteContainer}>
        <Header />
        {children}
    </div>
)