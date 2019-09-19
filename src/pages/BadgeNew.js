import React from 'react';
import Logo from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../Components/Badge';
import BadgeForm from '../Components/BadgeForm';

class BadgeNew extends React.Component {
    state = {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          jobTittle: '',
          twitter: '',
        },
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={Logo} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTittle={this.state.form.jobTittle}
                                //email={this.props.form.email}
                                twitter={this.state.form.twitter}
                            />
                        </div>
                        <div className="col-6">
                                <BadgeForm 
                                onChange={ this.handleChange } 
                                formValues={ this.state.form }
                                />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default BadgeNew;