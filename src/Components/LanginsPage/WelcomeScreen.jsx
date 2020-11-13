import React, { Fragment } from 'react'
import './WelcomeScreen.css'
export default function WelcomeScreen(){
    return(
        <Fragment>
            <div class="jumbotron mt-4">
                <h1 className="display-4">Bem Vindo!</h1>
                <h3 class="lead">Este é o site do restaurante Siper </h3>
                <hr class="my-4"/>
                <h5>Seja bem vindo ao restaurante Siper. E nunca se esqueça "não deixe para amanhã o que você pode comer hoje."</h5>
                <div>
                    <button className='btn btn-outline-danger link'>Fazer Pedido</button>
                </div>
            </div>
        </Fragment>
    )
}