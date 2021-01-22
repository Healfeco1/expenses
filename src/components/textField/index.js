import React from 'react'
import styles from './styles.module.scss';

export default function TextField(props) {
    const { ... rest } = props
    return (
        <input
            className={styles.input}
            {... rest}
        />
    )
}
