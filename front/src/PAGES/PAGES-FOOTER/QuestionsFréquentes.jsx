import React from 'react'
import { useState } from 'react'

const QuestionsFréquentes = () => {

    const faqData = ([{

        question: "Vos lampes sont-elles authentiquement vintage ou des reproductions ?",
        reponse: "Nous proposons principalement des modèles authentiques chinés et restaurés."
    },
    {
        question: "Proposez-vous des modèles uniques ou plusieurs exemplaires du même produit ?",
        reponse: "Chaque modèle et lampe est unique et sélectionnée par nos soins."
    },
    {
        question: "Fournissez-vous les ampoules avec les lampes ?",
        reponse: "Des ampoules classiques sont fournies lors de l'expédition. Si vous souhaitez un type d'ampoule particulier, n'hésitez pas à nous en informer par messagerie privée au moions 2 jours avant l'expédition."
    },
    {
        question: "Comment se passe le retrait sur Paris ?",
        reponse: "Vous avez la possibilité d'effectuer un retrait dans mon atelier sur Paris. Par souci d'organisation, merci de m'en informer avant de passer votre commande, afin que nous puissions convenir d'un rendez-vous au moins 2 jours à l'avance. Un paiement en main propre est également possible sur place."
    },
    {
        question: "Quels sont les délais de livraison ?",
        reponse: "Les délais de livraison dépendent de l'adresse souhaitée. En moyenne, comptez une semaine, à valider ensemble lors de l'expédition."
    },
    {
        question: "Expédiez-vous à l’international ?",
        reponse: "Bien sûr, nous expédions partout dans le monde et pourrons étudier les frais de livraison en fonction du poids de votre commande."
    },
    {
        question: "Que faire si ma lampe arrive endommagée ?",
        reponse: "Si malheureusement votre commande arrive endommagée, je vous invite à me contacter dès réception afin d'ouvrir ensemble une réclamation auprès du transporteur."
    },

])


    return (

        <section className=' justify-space-between column w-50'>

            <h1><strong style={{fontSize: "1.7rem"}}>Questions fréquentes</strong></h1>

                {faqData.map((duo, index) => (
                    <div key={index}>
                        <strong>{duo.question}</strong>
                        <p>{duo.reponse}</p>
                    </div>
                ))}

        </section>
    )
}

export default QuestionsFréquentes