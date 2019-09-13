import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/badge.css';

class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>Pedro <br/>Nava</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Ingeniero en Comunicacion y Electronica</h3>
                    <div>@pedro_nava</div>
                </div>
                
                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;