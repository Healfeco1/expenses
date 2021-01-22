import React from 'react'
import styles from './styles.module.scss';

const FormControl = (props) => {
    const {
        type,
        children,
    } = props
    let className;

    // Basado en el tipo le asignamos una clase que viene de la hoja de estilos
    if (type === 'row') {
        className = styles.formControlRow
    } else if (type === 'block'){
        className = styles.formControlBlock
    }

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default FormControl