import {auth,db} from './setup';

// Registra eventos de los usuarios
export function watchUserChanges(callback){
   return auth.onAuthStateChanged((user) => {
        if(user && !user.isAnonymous){
            console.log('logged in');
            callback({
                id: user.uid,
                email: user.email,
                dislpayName: user.displayName,
            });
        }
        else{
            console.log('NOT logged in');
            callback(null);
        }
    });
}

// Watcher expenses collection
export function watchExpenses(callback){
   return db
        .collection('expenses')
        // Ver los cambios de expenses, lo regresa como un snapshot (Punto de guardado)
        .onSnapshot((snapshot)=>{
            const docs = [];
            // Snapshot es un obj con muchas propiedades y lo vamos a convertir en []
            snapshot.forEach((doc)=>{
                const data = doc.data();
                docs.push({
                    // Agregar todo el data
                    ...data,
                    id: doc.id,
                });
            })
            callback(docs);
        });
}