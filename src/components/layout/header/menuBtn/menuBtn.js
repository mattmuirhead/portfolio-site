import React from 'react'

import * as styles from './menuBtn.module.scss'

export default class MenuBtn extends React.Component {
    render() {
        return (
            <div>
                <div 
                    onClick={this.props.handleClick} 
                    className={`${styles.menuBtn} ${this.props.menu && styles.active} link`} 
                    />
            </div>
        );
    }
}