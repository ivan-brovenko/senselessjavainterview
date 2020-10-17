import React from 'react';
import {LOGIN, MAIN_PAGE, REGISTRATION, TRANSLATOR} from "../routesConfig";
import MainPage from "./components/MainPage/MainPage";
import {Router, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import "./scss/styles.scss";
import Footer from "./components/Footer/Footer";
import Translator from "./components/Translator/Translator";

class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={configureStore()}>
                    <Header/>
                    <Router history={createBrowserHistory()}>
                        <Route exact path={MAIN_PAGE} component={MainPage}/>
                        <Route path={TRANSLATOR} component={Translator}/>
                    </Router>
                    <Footer/>
                </Provider>
            </div>
        );
    }
}

export default App;
