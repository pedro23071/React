import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  componentDidMount(){
      this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
        const data = await api.badges.read(
            this.props.match.params.badgeId
        )
        this.setState({ loading: false, form: data });
    } catch (error) {
        this.setState({ loading: false, error: error });
    }

  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e =>{
    e.preventDefault();
    this.setState({ loading: true, error: null});

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false })

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error});
    }
  }

  render() {
    if (this.state.loading) {
        return <PageLoading />
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero text-center">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'Firs Name'}
                lastName={this.state.form.lastName || 'Last Name' }
                twitter={this.state.form.twitter || 'Twitter' }
                jobTitle={this.state.form.jobTitle || 'Job Title' }
                email={this.state.form.email || 'email'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
            <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmmt={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
