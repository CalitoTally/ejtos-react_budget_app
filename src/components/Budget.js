import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const { dispatch } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        
        //else {
            setNewBudget(event.target.value);

            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
        //}

        if(totalExpenses > event.target.value) {
            alert('You cannot reduce the budget value lower than the spending')
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency.substring(0,1)}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
