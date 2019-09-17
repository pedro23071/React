import React from 'react';

class BadgeForm extends React.Component {
    //inocializamos el estado como objeto bacio ya que se lo estamos asignado como valor a los imputs 
    //state = {};

    //handleChange = (e) => {
        //console.log({
        //    name: e.target.name,
        //    value : e.target.value
        //    });

    //    this.setState({
    //        [e.target.name]: e.target.value
    //    });
    //}

    handleClick = (e) => {
        console.log("boton was clicked");
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form was submited");
        console.log(this.state);
    }

    render(){
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.props.onChange}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName" 
                        value={this.props.formValues.firtsName}
                        />  
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName" 
                        value={this.props.formValues.lastName}
                        />  
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValues.email}
                        />  
                    </div>
                    <div className="form-group">
                        <label>Job Tittle</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTittle"
                        value={this.props.formValues.jobTittle} 
                        />  
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter} 
                        />  
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }

}

export default BadgeForm;