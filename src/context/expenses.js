import React from 'react';
import { 
    watchUserChanges,
    watchExpenses,
    createExpense,
    deleteExpense,
    updateExpense,
} from '../services/firebase';
 
export const ExpenseContext = React.createContext({});

export const ExpenseContextConsumer = ExpenseContext.Consumer;


export class ExpenseContextProvider extends React.Component {
    state = {
        expenses: [],
    }

    // Ciclo de vida componentDidMount
    componentDidMount() {
        this.userWatcherUnsub = watchUserChanges((user)=>{
            if (user && !this.expenseWatcherUnsub) {
                this.expenseWatcherUnsub = watchExpenses((expenses) => {
                    this.setState({ expenses });
                })
            }
        })
    }

    componentWillUnmount(){
        if (this.expenseWatcherUnsub) {
            this.expenseWatcherUnsub();
        }
    }

    deleteExpense = async (id) =>{
        try {
            await deleteExpense(id);
        } catch (e) {
            console.log('context/expense.js');
            console.error(e)
        }
    }

    createExpense = async (data) => {
        try {
            await createExpense({
                ...data,
                date: Date.now(),
            });
        } catch (e) {
            console.log('context/expense.js');
            console.error(e);
        }
    }

    updateExpense = async (id, data) => {
        try {
            await updateExpense(id,data);
        } catch (e) {
            console.log('context/expense.js');
            console.error(e);
        }
    }
    
     render() {
         const {children} = this.props

         return (
             <ExpenseContext.Provider 
                value = {{
                    ...this.state,
                    deleteExpense: this.deleteExpense,
                    createExpense: this.createExpense,
                    updateExpense: this.updateExpense,
                }}
            >
                {children}
             </ExpenseContext.Provider>
         )
     }
 }
