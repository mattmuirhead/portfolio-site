import React from 'react'
import Logo from './logo/logo'

import * as styles from './header.module.scss'

export default () => (
    <div className={styles.headerWrapper}>
        <div>
            <Logo/>
        </div>
        <div>
            Menu
        </div>
    </div>
)