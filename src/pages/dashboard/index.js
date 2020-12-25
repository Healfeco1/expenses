import React from 'react';
import { ExpenseContext } from '../../context/expenses';

export default class Page extends React.Component {
    render() {
        return (
            <>
                <h1>Expenses: </h1>
                {this.context.expenses.length}
            </>
        )
    }
}
Page.contextType = ExpenseContext
