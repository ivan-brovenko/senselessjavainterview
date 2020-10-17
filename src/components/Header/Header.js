import React from 'react';
import {connect} from "react-redux";

@connect(
    state => ({
        linkReducer: state.linkToggleReducer
    }),
    dispatch => ({
        dispatch
    })
)
class Header extends React.Component {

    render() {
        const isPage = (isPage, component) => {
            return (!isPage) ? component : ''
        };

        const myFunction = () => {
            var x = document.getElementById("navDemo");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else {
                x.className = x.className.replace(" w3-show", "");
            }
        };

        return (
        <div className="w3-top">
            <div className="w3-bar w3-black w3-card">
                <a className="w3-bar-item sandwich w3-padding-large w3-hide-large w3-right"
                   onClick={myFunction} title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
                <a href="/" className="w3-bar-item w3-button w3-padding-large">HOME</a>
                <a href="/translate" className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-small">TRANSLATE</a>
                <a href="#words" className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-small">WORDS</a>
                <a href="#trainings" className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-small">TRAININGS</a>
                <a href="#tags" className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-small">TAGS</a>
                <a href="#statistics" className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-small">STATISTICS</a>
                <a href="#login" className="w3-bar-item w3-right w3-button w3-padding-large w3-hide-medium w3-hide-small  logInButton">LOG IN/SIGN UP</a>
            </div>

            <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-top">
                <a href="/translate" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>TRANSLATE</a>
                <a href="#words" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>WORDS</a>
                <a href="#trainings" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>TRAININGS</a>
                <a href="#tags" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>TAGS</a>
                <a href="#statistics" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>STATISTICS</a>
                <a href="#login" className="w3-bar-item w3-button w3-padding-large" onClick={myFunction}>LOG IN/SIGN UP</a>
            </div>
        </div>
        );
    }
}

export default Header;