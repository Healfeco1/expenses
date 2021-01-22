import {db} from './setup';

// Crear una nueva collection de gastos
export async function createExpense(data){
    return await db
        .collection('expenses')
        .doc()
        .set(data)
}

// Borrar una nueva collection de gastos
export async function deleteExpense(id){
    return await db
        .collection('expenses')
        .doc(id)
        .delete()
}

// Borrar una nueva collection de gastos
export async function updateExpense(id,data){
    return await db
        .collection('expenses')
        .doc(id)
        .update(data)
}