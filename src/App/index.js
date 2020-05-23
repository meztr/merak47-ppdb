import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "./hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import publicRoute from "../route";
// import AdminLayout from './layout/AdminLayout'
import {connect} from 'react-redux';


const AdminLayout = Loadable({
  loader: () => import('./layout/AdminLayout'),
  loading: Loader
});

// const Claire = Loadable({
//   loader: () => import('./clairechabas/Login'),
//   loading: Loader
// });

// const ScratchLayout = Loadable({
//   loader: () => import('./layout/ScratchLayout'),
//   loading: Loader
// });


class App extends Component {
  state= {
    publicMnu: [],
    isAuthe: false
  }

  getPublicMenu = () =>  {
    console.log('zz--App');
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
    const mountMnu = this.getPublicMenu();
    this.setState({
      publicMnu: mountMnu
    }) 
  }

  render() {    
    // console.log("before --> " + this.props.userprofile.isEmpty);

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

    // return (
    //   <>
    //     <ScrollToTop>
    //       <Suspense fallback={<Loader/>}>
    //         <Switch>       
    //           {this.state.publicMnu}

    //           {/* <Route path="/user/beranda" component={AdminLayout} />  */}
    //           <PrivateRoute authed={this.state.isAuthe} path="/" component={AdminLayout} />

    //           <Route>
    //             <div>
    //               <h2>404 not found</h2>
    //               <a href="https://ppdb.smkmuhsampit.id">Kembali ke ppdb.smkmuhsampit.id</a>
    //             </div>
    //           </Route>          
    //         </Switch>
    //       </Suspense>
    //     </ScrollToTop>
    //   </>
    // );
  }
}

// const mapStateToProps = state => ({
//   userprofile: state.firebaseReducer.auth
// });

// export default connect(mapStateToProps)(App);
export default App;

