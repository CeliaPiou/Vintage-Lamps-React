import { useState, useEffect } from "react";

const useCart = () => {

    const [isModified, setIsModified] = useState(false);
    const [cart, setCart] = useState([]);


    // Va vérifier au chargement des composants si Cart existe,
    // Si oui, va le convertir en objet JS
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, [localStorage]);

    // Fonction pour mettre à jour le localStorage et l'état cart
    const updateCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    // Fonction pour ajouter un nouvel article
    const addItem = (item) => {
        const updatedCart = [...cart, item];
        updateCart(updatedCart);
        setIsModified(!isModified)

        // Pop-up, article ajouté
        const containerCart = document.getElementById('container-cart');
        containerCart.classList.add('container-cart-visible');
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

    return { cart, addItem, removeItem, clearCart, isModified };

};

export default useCart;