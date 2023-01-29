import React, { createContext, useState, useEffect } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebase';

export const GlobalContext = createContext()                            // Crea context GLOBAL
export const CartContext = createContext()                              // Crea context CART (Carrito) 
export const GoogleContext = createContext()                            // Crea context GOOGLE LOGIN

// CONTEXT GLOBAL
const GlobalProvider = ({ children }) => {

    // RETORNAMOS PROPIEDADES A UTILIZAR EN OTROS COMPONENTES
    return (
        <>
            <GlobalContext.Provider value={{}}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}
export default GlobalProvider;

// CONTEXT CARRITO
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])                                // Crea el carrito ESTADO 0
    const [contador, setContador] = useState(0)                         // Crea contador ESTADO 0
    const [loading, setLoading] = useState(false)                       // Crea Loader en FALSE

    // Creamos una constante llamada isInCart que sera igual a el ID que seleccionemos y sea igual
    // al ide dentro del array
    const isInCart = (id) => cart.find(item => item.id === id);

    // Agregamos el item al carrito y sumamos 1 al contador
    const addToCart = (item, count) => {
        if (isInCart(item.id)) {
            setCart(cart.map((productos) => {
                setContador(contador + count)
                return productos.id === item.id ? { ...productos, count: (productos.count += count) } : productos;
            })
            );
        } else {
            setCart([...cart, { ...item, count }]);
            setContador(contador + count)
        }
    }

    // Limpiamos el carrito y el contador
    const clearCart = () => {
        setCart([]);
        setContador(0)
    }

    // Removemos el item del carrito
    const removeItem = (idToRemove) => {
        let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
        setCart(newCart);
        setContador(0)
    }

    // Creamos una sumatoria de los precios para dar un precio total
    const getTotalPrice = () => {
        return cart.reduce((prev, act) => prev + act.count * act.price, 0)
    }

    // Creamos una sumatoria de los items para dar el total de items
    const getItemTotalCount = () => {
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + itemInCart.count
        });
        return total;
    }

    // Funcion contadora
    const getQuantity = (item) => {
        if (isInCart(item.id)) {
            let prod = isInCart(item.id)
            return prod.count
        } else {
            return 0
        }
    }

    // RETORNAMOS PROPIEDADES A UTILIZAR EN OTROS COMPONENTES
    return (
        <>
            <CartContext.Provider value={{
                cart,
                addToCart,
                clearCart,
                removeItem,
                getTotalPrice,
                getItemTotalCount,
                contador,
                getQuantity,
                setLoading,
                loading
            }}>
                {children}
            </CartContext.Provider>
        </>
    )

}

// CONTEXT GOOGLE LOGIN
export const GoogleProvider = ({ children }) => {

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [checkuser, setCheckuser] = useState(undefined);
    const provider = new GoogleAuthProvider()

    // Estado de usuario conectado y no conectado
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setCheckuser(user);

                // Me trae de la cuenta GMail
                const name = user.displayName;
                const email = user.email;
                const photoPic = user.photoURL;
                const emailVerify = user.emailVerified;
                const phoneNumber = user.phoneNumber;

                // Copia los datos en el localstorage
                localStorage.setItem("name", name)
                localStorage.setItem("email", email)
                localStorage.setItem("photoPic", photoPic)
                localStorage.setItem("emailVerify", emailVerify)
                localStorage.setItem("phoneNumber", phoneNumber)

            } else {
                setCheckuser(undefined);
            }
        });
    }, [])

    const logOutGoogle = (navegar) => {
        navegar.preventDefault();
        auth.signOut().then(() => {
            navegar('/ingresar')
        })
    }

    // Funcion Google Login
    const signInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {

                console.log(result) // Para ver en consola mas propiedades a extraer

            })
            .catch((error) => {
                console.log(error);
                alert("Error al logear")
            });
    };

    // RETORNAMOS PROPIEDADES A UTILIZAR EN OTROS COMPONENTES
    return (
        <>
            <GoogleContext.Provider value={{
                signInWithGoogle,
                checkuser,
                setCheckuser,
                logOutGoogle
            }}>
                {children}
            </GoogleContext.Provider>
        </>
    )
}

// NUEVO CONTEXT