import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './layout/Loader'

import '../../node_modules/font-awesome/scss/font-awesome.scss';
import Aux from "./hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import publicRoute from "../route";
// import {connect} from 'react-redux';


const AdminLayout = Loadable({
  loader: () => import('./layout/AdminLayout' /* webpackChunkName: "adminlayout" */),
  loading: Loader
});

// const ScratchLayout = Loadable({
//   loader: () => import('./layout/ScratchLayout'),
//   loading: Loader
// });


class App extends Component {
  state= {
    publicMnu: [],
    // isAuthe: false
    loading: true
  }

  getPublicMenu = () =>  {
    // console.log('zz--App');
    const mnnu = publicRoute.map((route, index) => {
      return (route.component) ? (
        <Route             
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => (
            <route.component {...props} />
          )} />
      ) : (null);
    });
    return mnnu;
  };

  componentDidMount() {    
    // demoAsyncCall().then(() => {
    //   const mountMnu = this.getPublicMenu();
    //     this.setState({ 
    //     publicMnu: mountMnu,
    //     loading: false 
    //   })
    // });
    const mountMnu = this.getPublicMenu();
      this.setState({ 
      publicMnu: mountMnu,
      loading: false 
    })
  }  

  render() {    
    // console.log("before --> " + this.props.userprofile.isEmpty);

    const { loading } = this.state;
    if (loading) { return null };

    const mnnu = publicRoute.map((route, index) => {
      return (route.component) ? (
        <Route             
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => (
            <route.component {...props} />
          )} />
      ) : (null);
    });

    return (
      <Aux>
        <ScrollToTop>
          <Suspense fallback={<Loader/>}>
            <Switch>       
              {mnnu}
              <Route path="/user" component={AdminLayout} />
            </Switch>  
          </Suspense>
        </ScrollToTop>
      </Aux>
    )
  }
}

// function demoAsyncCall() {
//   return new Promise((resolve) => setTimeout(() => resolve(), 2500));
// }

export default App;

