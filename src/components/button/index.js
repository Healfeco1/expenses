import React from 'react'
import styles from './styles.module.scss'

export default function Button(props) {
    const {
            type,
            onClick,
            label,
            disabled,
         } = props;
    //  Guarda el tipo de estilo de styles (warning, outline, etc)
    let className = styles[type]
    return (
        <div 
            className={`${className} ${disabled ? styles.disabled : ''}`}
            onClick={(e) => {
                if(disabled)
                {
                    return;
                }

                onClick(e);
            }}
        >
            {label}
        </div>
    )
}

Button.defaultProps = {
    type: 'regular'
}
