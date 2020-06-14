import React, { Fragment } from 'react';

//import "bootstrap/scss/bootstrap.scss";
import './MainPage.scss'
import Navbar from '../reusableComponents/navbar/Navbar';

function MainPage() {
  return (
    <Fragment>
        <Navbar />
        <div className="welcomeSection">
            <p className="title">New Automation Tool for Your Home</p>
            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
            <button className="button-aboutUs">Saber mas</button>
            <img src={process.env.PUBLIC_URL + '/mediaResources/source1.svg'} alt=""></img>
        </div>
        <div>
            <p>Ewe</p>
        </div>
    </Fragment>
  );
}

export default MainPage;