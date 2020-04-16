import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "./hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import publicRoute from "../route";

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

// const ScratchLayout = Loadable({
//     loader: () => import('./layout/ScratchLayout'),
//     loading: Loader
// });

class App extends Component {    

    render() {
        const publicMenu = publicRoute.map((route, index) => {
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
