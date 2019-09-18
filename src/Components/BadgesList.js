import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


class BadgesList extends React.Component{
    render(){
        return(
            <div>    
                <ul className="list-unstyled">
                    {this.props.badges.map((badge) =>{
                        return(
                            <li key={badge.id} className="card mb-4">
                                <div className="shadow-lg bg-white rounded">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={badge.avatarUrl} className="rounded float-left px-3 py-3" alt="badge"/>
                                        </div>
                                        <div className="col-7">
                                            <p className="h4 mt-2">{badge.firstName} {badge.lastName}</p>
                                            <p className="my-0">{badge.jobTitle}</p>
                                            <FontAwesomeIcon  className="text-primary" icon={faTwitter} /><span className="text-primary"> @{badge.twitter}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>  
            </div>
        
        );
    }
}

export default BadgesList;