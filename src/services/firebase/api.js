import {db} from './setup';

// Crear una nueva collection de gastos
export async function createExpensive(data){
    return await db
        .collection('expenses')
        .doc()
        .set(data)
}

// Borrar una nueva collection de gastos
export async function deleteExpensive(id){
    return await db
        .collection('expenses')
        .doc()
        .delete()
}

// Borrar una nueva collection de gastos
export async function updateExpensive(id,data){
    return await db
        .collection('expenses')
        .doc(id)
        .update(data)
}