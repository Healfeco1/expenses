import React from 'react';
import { watchUserChanges } from '../services/firebase';
 
export const AuthContext = React.createContext();
export class AuthContextProvider extends React.Component {
    state = {
        // Indica si ya se mando llamar por primera vez el watcher
        authReady: false,
        isLoggedIn: false,
        user: null,
    }
    // Ciclo de vida componentDidMount
    componentDidMount() {
        watchUserChanges((user)=>{
            if(user){
                this.setState({
                    authReady: true,
                    isLoggedIn: true,
                    user,
                });
            }
            else{
                this.setState({
                    authReady: true,
                    isLoggedIn: false,
                    user: null,
                })
            }
        })
    }
    
     render() {
         return (
             <AuthContext.Provider value = {this.state}>
                {this.props.children}
             </AuthContext.Provider>
         )
     }
 }

 export const AuthContextConsumer = AuthContext.Consumer;
