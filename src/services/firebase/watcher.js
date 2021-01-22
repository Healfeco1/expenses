import {auth,db} from './setup';

// Registra eventos de los usuarios
export function watchUserChanges(callback){
    const unsub = auth.onAuthStateChanged((user)=>{
        if(user && !user.isAnonymous){
            const {
                uid,
                email,
                dislpayName,
            } = user

            console.info('service/watcher.js');
            console.log('logged in');
            
            callback({
                id: uid,
                email,
                dislpayName,
            });
        }
        else{
            console.info('service/watcher.js');
            console.log('NOT logged in');
            callback(null);
        }
    })
   return unsub;
}

// Watcher expenses collection
export function watchExpenses(callback){
    const unsub = db
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
                    amount: +data.amount,
                    id: doc.id,
                    date: data.date && new Date(data.date)
                });
            })
            callback(docs);
        });

        return unsub;
}