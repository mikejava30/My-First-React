import React, { Component } from 'react';
import Modle from '../components/UI/Modle/Modle';
import Auxiliary from './Auxiliary'

const withErrorHandle = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount () {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req
      })
      this.respInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      })
    };
    errorConfirmedHandler = () => {
      this.setState({error:null})
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.respInterceptor);
    }

    render () {
      return (
        <Auxiliary>
          <Modle
            show={this.state.error}
            modleClosed={this.errorConfirmedHandler}
          > {this.state.error ? this.state.error.message : null} </Modle>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      )
    }
  }
};

export default withErrorHandle;
