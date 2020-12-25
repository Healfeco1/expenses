import React from 'react';
import { watchExpenses, watchUserChanges } from '../services/firebase';
 
export const ExpenseContext = React.createContext();
export class ExpenseContextProvider extends React.Component {
    state = {
        expenses: [],
    }
    // Ciclo de vida componentDidMount
    componentDidMount() {
        watchUserChanges((user)=>{
            if (user && !this.isSetup) {
                this.isSetup = true;
                watchExpenses((expenses)=>{
                    this.setState({expenses});
                });
            }
        });
    }
    
     render() {
         return (
             <ExpenseContext.Provider value = {this.state}>
                {this.props.children}
             </ExpenseContext.Provider>
         )
     }
 }

 export const ExpenseContextConsumer = ExpenseContext.Consumer;
