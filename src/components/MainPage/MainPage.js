import React from 'react';
import {IS_MAIN} from "../../redux/actionNames";
import {connect} from "react-redux";
import background from "../../images/back1.jpg";
import Translator from "../Translator/Translator";

@connect(
    state => ({
        state
    }),
    dispatch => ({
        dispatch
    })
)
class MainPage extends React.Component {

    componentDidMount() {
        this.props.dispatch({type: IS_MAIN})
    }

    render() {
        return (
            <div>
                <div className="w3-display-container w3-center">
                    <img className="imageWidth" src={background}/>
                        <div className="w3-display-middle w3-xlarge w3-container w3-text-white w3-padding-32">
                            <p><b>LANGBOOK</b></p>
                            <p className="w3-hide-small"><b>The best online dictionary in the world</b></p>
                        </div>
                </div>

                <div className="w3-container w3-content w3-center w3-padding-64">
                    <h2 className="w3-wide">THE BAND</h2>
                    <p className="w3-opacity"><i>We love music</i></p>
                    <p className="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <Translator/>
            </div>
        );
    }
}

export default MainPage;