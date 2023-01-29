import { useState } from 'react'
import { db } from '../firebase'
import { collection, doc, getDocs, getDoc, query, where } from 'firebase/firestore'

export const useFirebase = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [user, setUser] = useState({});

    const getUsuarios = async (id) => {
        try {
            const prodCol = id ? query(collection(db, "usuarios"), where("rango", "==", id)) : collection(db, 'usuarios')
            await getDocs(prodCol).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("Lista de usuarios vacia")
                }
                setUsuarios(snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
        } catch (error) {

        }
    }

    const getUser = async (id) => {
        try {
            const document = doc(db, 'usuarios', id)
            const response = await getDoc(document)
            response.data()
            setUser({ id: response.id, ...response.data() })


        } catch (error) {

        }
    }

    return { usuarios, getUsuarios, getUser, user }
}

export default useFirebase;