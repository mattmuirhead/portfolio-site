import React from 'react'

import * as styles from './cursor.module.scss'

export default class Cursor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    componentDidMount () {
        let clientX = -100;
        let clientY = -100;
        const innerCursor = this.refs.cursor;

        // Create Cursor
        const initCursor = () => {
            document.addEventListener("mousemove", e => {
                clientX = e.clientX;
                clientY = e.clientY;
            });
            
            const render = () => {
                innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;       
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        };

        initCursor();

        // Handle Hover
        const link = document.getElementsByClassName("link");

        const linkHoverIn = function() {
            this.setState({ hover: true });
        }.bind(this);

        const linkHoverOut = function() {
            this.setState({ hover: false });
        }.bind(this);


        Array.from(link).forEach(function(element) {
            element.addEventListener('mouseover', linkHoverIn);
            element.addEventListener('mouseout', linkHoverOut);
        });
    }

    render() {
        return (
            <div ref="cursor" className={`${styles.cursorSmall}  ${this.state.hover && styles.hover}`}></div>
        );
    }
}