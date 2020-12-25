import React from 'react'
import { AuthContext } from '../context/auth'

export default class Root extends React.Component {
    render() {
        const{
            children,
        } = this.props;
        const {
            authReady,
        } = this.context;
        if (!authReady) {
            return <>Loading...</>;
        }
        // Retorna todos los hijos de Root en /index
        // Renderiza todos los componentes hijos de Root en /index
        return children;
    }
}
Root.contextType = AuthContext;
