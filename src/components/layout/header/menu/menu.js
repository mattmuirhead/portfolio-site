import React from 'react'

import * as styles from './menu.module.scss'

export default class Menu extends React.Component {
    render() {
        return (
            <div className={`${styles.menuWrapper} ${this.props.menu && styles.open}`}>
                Menu Here
            </div>
        );
    }
}