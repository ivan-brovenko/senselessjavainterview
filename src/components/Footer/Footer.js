import React from 'react';

class Footer extends React.Component {

    render() {
        const isPage = (isPage, component) => {
            return (!isPage) ? component : ''
        };

        return (
            <footer className="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
                <i className="fa fa-facebook-official w3-hover-opacity icon"></i>
                <i className="fa fa-instagram w3-hover-opacity icon"></i>
                <i className="fa fa-vk icon"></i>
                <i className="fa fa-linkedin w3-hover-opacity icon"></i>
                <p className="w3-medium">Powered by vane4ek</p>
            </footer>
        );
    }
}

export default Footer;