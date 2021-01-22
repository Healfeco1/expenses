import React from 'react';
import moment from 'moment'; //Para darle un formato a las fechas
import { ExpenseContext } from '../../context/expenses';
import Layout from '../../components/layout' //Encapzular todos los hijos de la pagina
import styles from './styles.module.scss';
import Expense from '../expense'

export default class Page extends React.Component {
    state = {
        expenseId: null,
    }

    render() {
        const {expenses} = this.context
        const {expenseId, isOpen} = this.state
        // Validar si el id del stado es igual al del gasto seleccionado
        const expense = expenses.find(n => n.id === expenseId)
        return (
            <Layout>
                <div className={styles.container}>
                    <div className={styles.buttonFloat}
                        onClick={() => this.setState({isOpen: true, expenseId: null})}
                        >
                        +
                    </div>
                    <table className={styles.table} cellSpacing="0">
                        <thead>
                            <tr className={styles.tableHeader}>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map(row => {
                                return(
                                    <tr key={row.id} 
                                        className={styles.tableRow}
                                        onClick={() => this.setState({  expenseId: row.id, isOpen: true })}
                                    >
                                        <td>{moment(row.date).format('DD MMM YYY hh:mm a')}</td>
                                        <td>{row.type}</td>
                                        <td>{row.amount}</td>
                                        <td>{row.description}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <h1>Expenses: </h1>
                    {this.context.expenses.length}
                </div>

                {isOpen && 
                    <Expense 
                    expense={expense}
                    onClose={() => this.setState({ expenseId: null, isOpen: false})}
                    />
                }
            </Layout>
        )
    }
}
Page.contextType = ExpenseContext
