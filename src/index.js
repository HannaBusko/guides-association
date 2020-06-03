import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter, withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { IntlProvider } from "react-intl";

import './index.css';

import HomePage from '../src/pages/index';
import HeaderDividing from './components/Header';
/*import { NatureGallery, PartyGallery } from '../src/pages/gallery';

import Social from './components/Social';*/
import ScrollToTopBtn from "./components/ScrollToTop";




const pageTransitionsDuration = {
  enter: 500,
  exit: 300
};

const RoutesWrapper = ({ location }) => (
  <Switch location={location}>
    <Route exact path='/' render={() => <HomePage />} />
    <Redirect to='/' />
  </Switch>
);

class App extends React.Component {

  render() {
    const { location } = this.props;

    const splitPathname = location.pathname.split("/");
    const currentKey = splitPathname[splitPathname.length - 1] || "/";

    return (
      <div>
        <TransitionGroup component="main">
          <CSSTransition
            key={currentKey}
            timeout={pageTransitionsDuration}
            classNames="example"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <RoutesWrapper
              location={location}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <HashRouter>
    <IntlProvider locale='Ru'>
      <Fragment>
        <HeaderDividing />
        <AppWithRouter />
        <ScrollToTopBtn />
      </Fragment>
    </IntlProvider>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.register();
