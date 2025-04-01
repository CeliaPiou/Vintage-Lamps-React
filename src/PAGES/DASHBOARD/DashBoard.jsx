import './style.scss'

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

import GestionProduits from './GESTION-PRODUITS/GestionProduits'

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


        const handleSelectedDashboard = () => {
            setDashboard(true);
            setProducts(false);
            setOrders(false);
            setCustomers(false)
        }
        const handleSelectedProducts = () => {
            // alert('hi')
            setDashboard(false);
            setProducts(true);
            setOrders(false);
            setCustomers(false)
        }
        const handleSelectedOrders = () => {
            setDashboard(false);
            setProducts(false);
            setOrders(true);
            setCustomers(false)
        }
        const handleSelectedCustomers = () => {
            setDashboard(false);
            setProducts(false);
            setOrders(false);
            setCustomers(true)
        }

        // Récupération des datas
        const [ lampes, setLampes ] = useState([]);
        useEffect(() => {
            const fetchLampes = async () => {
                try{
                    const { data, status } = await axios.get('http://localhost:8000/lv/articles/all');
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

        const [ users, setUsers ] = useState([]);
        useEffect(() => {
            const fetchUsers = async () => {
                try{
                    const {data, status} = await axios.get('http://localhost:8000/lv/users/all')
                    if(status===200) setUsers(data)
                }
                catch(error) {
                    console.log(error.message)
                }
            }

            fetchUsers();
        }, [])


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

                    {/* Customers */}
                    <li onClick={handleSelectedCustomers}
                        className="dashboard"
                        style={customers? {backgroundColor: "#ffd900"} :  {backgroundColor: "transparent"}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"/></svg>
                        <span>Clients</span>
                    </li>

                    {/* Quitter */}
                    <li onClick={() => navigate(`/`)}
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
                <div>orders section</div>

                : customers ?
                <div>customers section</div>

                :
                // Le Dashboard
                <div className='container-dashboard'>

                    <article className='article-dashboard'>
                        <h2>Nouvelle commande</h2>
                        <p>Pas de nouvelles commandes en cours</p>
                    </article>

                    <article className='article-dashboard'>
                        <h2>Total généré</h2>
                        <h3>0</h3>
                    </article>

                    <article className='article-dashboard'>
                        <h2>Nombre de commandes</h2>
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
                        <h2>Répartition commandes</h2>
                    </article>

                </div>

                }

            </section>

        </>
    )
}


export default DashBoard