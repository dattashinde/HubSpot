import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCaretDown,faSearch} from '@fortawesome/free-solid-svg-icons'
import Hubspot from '../assets/hubspot.png';
import '../Styles/index.css';
// Import Materialize
import M from "materialize-css";

class HubSpot extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
  });
    }

    render(){
        return( <div id="HubSpot">
            
              <nav>
                    <div className="nav-wrapper" >
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger right" id="sidenav1"><FontAwesomeIcon icon={faBars} /></a>
                         <ul class="left hide-on-med-and-down" id="dropdownlist">
                            <li><img src={Hubspot} /></li>
                        </ul>
                        <ul class="right hide-on-med-and-down" >
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Software<FontAwesomeIcon icon={faCaretDown} /></a></li>
                            <li><a>Pricing</a></li>
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Resources<FontAwesomeIcon icon={faCaretDown} /></a></li>
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Partners<FontAwesomeIcon icon={faCaretDown} /></a></li>
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">About<FontAwesomeIcon icon={faCaretDown} /></a></li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav" id="mobile-demo">
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Software<FontAwesomeIcon icon={faCaretDown} /></a></li>
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Pricing<FontAwesomeIcon icon={faCaretDown} /></a></li>
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Resources<FontAwesomeIcon icon={faCaretDown} /></a></li>
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Partners<FontAwesomeIcon icon={faCaretDown} /></a></li>
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">About<FontAwesomeIcon icon={faCaretDown} /></a></li>
                </ul>
                
                <div id="covid">
                    <p>Global health and safety is our top priority. Learn how HubSpot is responding to COVID-19 and its economic impact on the communities we serve</p>
                </div>
            </div>
        );
    }
}

export default HubSpot;
