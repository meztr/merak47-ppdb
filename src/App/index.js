import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import publicRoute from "../route";

// import LandingPage from '../Demo/Public/Landing/Landing';

// import { logout } from '../helpers/auth';
// import { firebaseAuth } from '../config/constants';

// function ProtectedRoute ({component: Component, authed, ...rest}) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//             ? <Component {...props} />
//             : <Redirect to={{pathname: '/auth/signin-1', state: {from: props.location}}} />}
//         />
//     )
// }

// function PublicRoute ({component: Component, authed, ...rest}) {
//     return (
//         <Route 
//             {...rest}
//             render={(props) => authed === false
//             ? <Component {...props} />
//             : <Redirect to='/user/dashboard' />}
//         />
//     )
// }

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    // componentDidMount () {
    //     this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
    //         // put conditional userAuthed or isPanitia in here
    //         if (user) {
    //             this.setState({
    //                 authed: true,
    //                 loading: false,
    //             })
    //         } else {
    //             this.setState({
    //                 authed: false,
    //                 loading: false
    //             })
    //         }
    //     })
    // }

    // componentWillUnmount () {
    //     this.removeListener();
    // }

    render() {
        const publicMenu = publicRoute.map((route, index) => {
          return (route.component) ? (
              <Route
                //   authed={this.state.authed}
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

                            {/* <Route path="/" exact name='Landing Page' component={LandingPage} /> */}
                            {/* <PublicRoute authed={this.state.authed} exact path='/auth/signin-1' name='Login' component={Signin1} />
                            <PublicRoute authed={this.state.authed} exact path='/pendaftaran' name='Pendaftaran' component={Pendaftaran} />
                            <PublicRoute authed={this.state.authed} exact path='/pengumuman' name='Pengumuman' component={Pengumuman} /> */}

                            {publicMenu}
                            
                            <Route path="/" component={AdminLayout} />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

export default App;
