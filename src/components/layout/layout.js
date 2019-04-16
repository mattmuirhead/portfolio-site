import React from 'react'
import * as styles from './layout.module.scss'

export default ({ children }) => (
    <div className={styles.siteContainer}>
        My Portfolio
        {children}
    </div>
)