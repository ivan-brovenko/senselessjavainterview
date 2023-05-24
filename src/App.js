import React from 'react';
import {LOGIN, MAIN_PAGE, REGISTRATION, TRANSLATOR} from "../routesConfig";
import MainPage from "./components/MainPage/MainPage";
// import {Router, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import "./scss/styles.scss";
import Footer from "./components/Footer/Footer";
import Translator from "./components/Translator/Translator";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

class App extends React.Component {
    render() {
        return (
            <div className="container pt-3">
                <div className="row">
                    <div className="col">
                        <PostForm></PostForm>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Sync Posts</h2>
                        <Posts/>
                    </div>
                    <div className="col">
                        <h2>Async Posts</h2>
                        <FetchedPosts/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
