// Para poder reutilizar el mismo componente
import React from 'react'
import styles from './style.module.scss'

export default class Layout extends React.Component {
    render() {
        const {
            children,
        } = this.props;

        return (
            <>
                <div className={styles.appBar}>
                    <span>App</span>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </>
        );
    }
}
