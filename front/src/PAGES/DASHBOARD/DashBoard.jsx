import './style.scss'

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import GestionProduits from './GESTION-PRODUITS/GestionProduits'
import GestionCdes from './GESTION-CDES/GestionCdes'
import GestionUser from './GESTION-USER/GestionUser'
import GestionCat from './GESTION-CATEGORY/GestionCat'

import { API_URL } from './../../api';



const DashBoard = () => {

        // Styles sous forme d'objet
        const styles = {
            dashMenu: {
                position: "relative",
                borderBottomLeftRadius: "30px",
                borderTopLeftRadius: "30px",
                top: "10px",
                left: "10px",
                bottom: "10px",
                background: "#F2F2F2",
                width: "250px",
                height: "93vh",
                display: "flex",
                gap: "10px",
                alignItems: "center"
            }
        }

        const navigate = useNavigate()

        // Gestion de la page
        const [dashboard, setDashboard] = useState(true);
        const [products, setProducts] = useState(false);
        const [orders, setOrders] = useState(false);
        const [customers, setCustomers] = useState(false);
        const [catClicked, setCatClicked] = useState(false);

        // Au chargement de la page, voir si une option a déjà été choisie
        useEffect(() => {
            const localSto = localStorage.getItem('dashboard');

            if(!localSto) {
                localStorage.setItem("dashboard", "dashboard")
            };

            if(localSto === "products") {
                setDashboard(false);
                setProducts(true);
                setOrders(false);
                setCustomers(false);
                setCatClicked(false)

            };

            if(localSto === "orders") {
                setDashboard(false);
                setProducts(false);
                setOrders(true);
                setCustomers(false);
                setCatClicked(false)

            };

            if(localSto === "customers") {
                setDashboard(false);
                setProducts(false);
                setOrders(false);
                setCustomers(true);
                setCatClicked(false)

            };

            if(localSto === "categories") {
                setDashboard(false);
                setProducts(false);
                setOrders(false);
                setCustomers(false);
                setCatClicked(true)
            }

        }, [])

        const handleSelectedDashboard = () => {
            setDashboard(true);
            setProducts(false);
            setOrders(false);
            setCustomers(false);
            setCatClicked(false);

            localStorage.setItem("dashboard", "dashboard")
        }
        const handleSelectedProducts = () => {
            setDashboard(false);
            setProducts(true);
            setOrders(false);
            setCustomers(false);
            setCatClicked(false);

            localStorage.setItem("dashboard", "products")
        }
        const handleSelectedOrders = () => {
            setDashboard(false);
            setProducts(false);
            setOrders(true);
            setCustomers(false);
            setCatClicked(false);

            localStorage.setItem("dashboard", "orders")

        }
        const handleSelectedCustomers = () => {
            setDashboard(false);
            setProducts(false);
            setOrders(false);
            setCustomers(true);
            setCatClicked(false);

            localStorage.setItem("dashboard", "customers")

        }
        const handleSelectedCat = () => {
            setDashboard(false);
            setProducts(false);
            setOrders(false);
            setCustomers(false);
            setCatClicked(true);

            localStorage.setItem("dashboard", "categories")
        }

        // Récupération des datas
        const [ lampes, setLampes ] = useState([]);
        useEffect(() => {
            const fetchLampes = async () => {
                try{
                    const { data, status } = await axios.get(`${API_URL}/lv/articles/all`);
                    if(status === 200) {
                        setLampes(data)
                    }
                }
                catch(error) {
                    console.log(error.message)
                }
            }

            fetchLampes()
        }, [])

        const [ categories, setCategories ] = useState([]);
        useEffect(() => {
            const fetchCat = async () => {
                try {
                    const { data, status } = await axios.get(`${API_URL}/lv/category/all`)
                    if (status === 200) {
                        setCategories(data)
                    }
                }
                catch(error){
                    console.log(error.message)
                }
            }

            fetchCat()
        }, [])

        const [ users, setUsers ] = useState([]);
        useEffect(() => {
            const fetchUsers = async () => {
                try{
                    const {data, status} = await axios.get(`${API_URL}/lv/users/all`)
                    if(status===200) setUsers(data)
                }
                catch(error) {
                    console.log(error.message)
                }
            }

            fetchUsers();
        }, []);

        const [ commandes, setCommandes ] = useState([]);
        useEffect(() => {

            const fetchOrders = async () => {
                try{
                    const { data, status } = await axios.get(`${API_URL}/lv/orders/all`);
                    if (status===200) {
                        setCommandes(data);
                    }

                }
                catch(error){
                    console.log(error.message)
                }

            };
            fetchOrders();
        }, [])

        const [ total, setTotal ] = useState();
        useEffect(() => {
                const fetchPrices =  () => {
                    let allPrices = 0;
                    commandes.map((item) => {
                        allPrices += item.price
                    });
                    setTotal(allPrices)
                };

                fetchPrices();

            }, [commandes])

        const [ commandesToSend, setCommandesToSend ] = useState([]);
        useEffect(() => {
            const ordersToShip = commandes.filter(item => item.isShipped!= true);
            setCommandesToSend(ordersToShip);
            console.log(ordersToShip)
        }, [commandes]);

        const quitter = () => {
            localStorage.removeItem('dashboard');
            navigate(`/`);
        }




    return (

        <>

            <aside id="dashboard-menu" style={styles.dashMenu}>

            <nav style={{display: "flex", cursor:'pointer', alignItems: "center", justifyContent: "center"}}>
                <ul style={{display: "flex", flexDirection: "column", gap: "30px"}}>


                    {/* Home */}
                    <li onClick={handleSelectedDashboard}
                        className="dashboard"
                        style={dashboard? {backgroundColor: "#ffd900"} :  {backgroundColor: "transparent"
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                        <span>Dashboard</span>

                    </li>

                    {/* Products */}
                    <li onClick={handleSelectedProducts}
                        className="dashboard"
                        style={products? {backgroundColor: "#ffd900"} :  {backgroundColor: "transparent"}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M440-200v-320H240q-20 0-32-16t-6-36l78-252q8-25 29-40.5t47-15.5h248q26 0 47 15.5t29 40.5l78 252q6 20-6 36t-32 16H520v320h-80ZM294-600h372l-62-200H356l-62 200Zm26 520v-80h320v80H320Zm160-620Z"/></svg>
                        <span>Produits</span>
                    </li>

                    {/* Orders */}
                    <li onClick={handleSelectedOrders}
                        className="dashboard"
                        style={orders? {backgroundColor: "#ffd900"} :  {backgroundColor: "transparent"}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z"/></svg>
                        <span>Commandes</span>
                    </li>

                    {/* Catégories */}
                    <li
                        onClick={handleSelectedCat}
                        className="dashboard"
                        style={catClicked? {backgroundColor: "#ffd900"} :  {backgroundColor: "transparent"}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z"/></svg>
                        <span>Catégories</span>
                    </li>

                    {/* Customers */}
                    <li onClick={handleSelectedCustomers}
                        className="dashboard"
                        style={customers? {backgroundColor: "#ffd900"} :  {backgroundColor: "transparent"}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"/></svg>
                        <span>Clients</span>
                    </li>

                    {/* Quitter */}
                    <li onClick={() => quitter()}
                        className="dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                        <span>Quitter le dashboard</span>
                    </li>
                </ul>
            </nav>

            </aside>

            <section id='dashboard-content'>

                {/* selon la catégorie choisie affiche le bon bloc? par défaut, dashboard*/}
                {products ?
                < GestionProduits />

                : orders ?
                < GestionCdes />

                : customers ?
                < GestionUser />

                : catClicked ?
                < GestionCat />

                :
                // Le Dashboard
                <div className='container-dashboard'>

                    <article className='article-dashboard'>
                        {commandesToSend.length != 0 ?
                        <h2>Vous avez {commandesToSend.length} commande(s) à expédier</h2>
                        :
                        <h2>Pas de commandes en attente</h2>
                        }
                    </article>

                    <article className='article-dashboard'>
                        <h2>Total généré</h2>
                        <h3>{total} €</h3>
                    </article>

                    <article className='article-dashboard'>
                        <h2>Nombre de commandes</h2>
                        <p><strong>{commandes.length}</strong> commandes ont été passées</p>
                    </article>

                    <article className='article-dashboard'>
                        <h2>Nombre de clients</h2>
                        <p><strong>{users.length}</strong> clients sont actuellement enregistrées</p>

                    </article>

                    <article className='article-dashboard'>
                        <h2>Nombre de lampes</h2>
                        <p><strong>{lampes.length}</strong> lampes sont actuellement enregistrées</p>
                    </article>

                    <article className='article-dashboard'>
                        <h2>Les catégories</h2>
                        <p>{categories.length} catégories sont enregistrées</p>
                    </article>

                </div>

                }

            </section>

        </>
    )
}


export default DashBoard