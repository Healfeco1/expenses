import React from 'react'
import {Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export default class GuardRoute extends React.Component {
    render() {
        const{
            type,
            // ... -> Object desctructuring, asignar demas propiedades
            // del objeto a una nueva variable
            ...rest
        } = this.props;
        const {
            isLoggedIn,
        } = this.context;

        // Si la direccion es privada y no hay una sesion activa
        if (type === 'private' && !isLoggedIn) {
            return <Redirect to="/login" />
        } else if(type === 'public' && isLoggedIn){
            return <Redirect to="/dashboard" />
        }
        return <Route {...rest}></Route>;
    }
}
GuardRoute.contextType = AuthContext;
