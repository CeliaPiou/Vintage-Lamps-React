import React, { createContext, useContext, useState, useEffect } from 'react'

// Créer un context d'authentification
export const CartContext = createContext()

// Ts les composants qui sont enfants de ce contexte seront specifiés dans ce paramètre là
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cartIsUpdated, setCartIsUpdated] = useState(false)

    // Mes fonctions

    // Va vérifier au chargement des composants si Cart existe,
    // Si oui, va le convertir en objet JS
    useEffect(() => {
        isFilled();
    }, [cartIsUpdated]);

    const isFilled = () => {
        const currentCart = localStorage.getItem('cart');
        if(!currentCart) {
            const emptyCart = [];
            localStorage.setItem('cart', JSON.stringify(emptyCart))
        }
        const currentCartParsed = currentCart ? JSON.parse(currentCart) : null;
        setCart(currentCartParsed);
    }


    // Fonction pour mettre à jour le localStorage et l'état cart
    const updateCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    // Fonction pour ajouter un nouvel article
    const addItem = (item) => {

        const checkArt = cart.find(art => art._id === item._id);

        if(checkArt === undefined) {
            const updatedCart = [...cart, item];
            updateCart(updatedCart);
            setCartIsUpdated(!cartIsUpdated)
            // Pop-up, article ajouté
            alert(`L'article a bien été ajouté au panier !`)
        }
        else {
            alert("L'article est déjà dans votre panier")
        }
    };

    // Supprimer un article par son ID
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item._id !== id);
        updateCart(updatedCart);
    };

    // Vider le panier dans son intégralité
    const clearCart = () => {
        updateCart([]);
    };



    return (

        // Dans value on spécifie tout ce que les enfants pourront manipuler
        <CartContext.Provider value={{ cart, clearCart, removeItem, addItem, updateCart }}>

            {children}

        </CartContext.Provider>
    )
}