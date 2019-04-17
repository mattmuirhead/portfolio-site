import React from 'react'

import * as styles from './cursor.module.scss'

export default class Cursor extends React.Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.0/paper-core.min.js";
        script.async = true;
    
        document.body.appendChild(script);

        let clientX = -100;
        let clientY = -100;
        const innerCursor = this.refs.cursor;

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
    }

    render() {
        return (
            <div ref="cursor" className={ styles.cursorSmall }></div>
        );
    }
}