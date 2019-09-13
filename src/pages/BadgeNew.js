import React from 'react';
import Navbar from '../Components/Navbar';
import Logo from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../Components/Badge';

class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Logo} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                                firstName="Pedro"
                                lastName="Nava"
                                tittle="Ingeniero en Comunicacion y Electronica"
                                twitter="pedro_nava"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BadgeNew;