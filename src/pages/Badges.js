import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoadind from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

import api from '../api'

class Badges extends React.Component {
    state = {
      loading: true,
      error: null,
      data: undefined,
    };
  
    componentDidMount(){
      this.fetchData();

      this.intervalID = setInterval(this.fetchData, 20000);
    }

    componentWillUnmount(){
      clearInterval(this.intervalID);
    }

    fetchData = async () =>{
      this.setState({ loading: true, error:null });

      try {
        const data = await api.badges.list();
        //console.log("Data: " + data);
        this.setState({ loading: false, data: data });
      } catch (error) {
        //console.log("este es el erro: " + error);
        this.setState({ loading: false, error: error });
      }
    }



  render() {

    if (this.state.loading === true && !this.state.data) {
      return <PageLoadind />
    }
    if (this.state.error) {
      return <PageError error={ this.state.error }/>
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          {this.state.loading && <MiniLoader />}
          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
