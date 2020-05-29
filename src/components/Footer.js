import React, { Component } from 'react';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Linkedin from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';

class Footer extends Component {

    render() {
        return (
			<div>
                <div className="footer-banner">
	                <div className="custom-container">
	                    <div className="white-font">
	                      	<div className="row">
		                        <div className="col s12 m12 l1 footer-content white-font">News</div>
		                        <div className="col s12 m12 l1 footer-content white-font">Contact</div>
		                        <div className="col s12 m12 l1 footer-content white-font">Careers</div>
		                        <div className="col s12 m12 l1 footer-content white-font">Privacy Policy</div>
		                        <div className="col s12 m12 l1 footer-content white-font">Terms of Use</div>
		                        <div className="col s12 m12 l1 footer-content white-font">Site Map</div>
		                        <div className="col s12 m12 l6 float-right footer-icon">
		                          	<a href="">
		                            	<img className="footer-icon" src={Facebook} />
		                          	</a>
		                            &emsp;
		                         	<a href="">
		                            	<img className="footer-icon" src={Instagram}  />
		                          	</a>
		                            &emsp;
		                          	<a href="">
		                            	<img className="footer-icon" src={Linkedin}/>
		                          	</a>
		                            &emsp;
		                          	<a href="">
		                            	<img className="footer-icon" src={Twitter}/>
		                          	</a>
		                        </div>  
	                      	</div>
	                       	<div className="row">
		                        <div className="col s12 m12 l12">
		                        	<div className="footer-content">© 2020 HubSpot, Inc. All Rights Reserved.</div>
		                        </div>
	                      	</div>
	                    </div>
	                </div>
	            </div>
            </div>
        );
    }
}

export default Footer;
