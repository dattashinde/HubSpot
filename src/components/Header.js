import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCaretDown,faSearch} from '@fortawesome/free-solid-svg-icons'
import '../Styles/index.css'

class Header extends Component {

    render(){
        return( <div className="hide-on-small-only">
              <nav id="Header">
                    <div className="nav-wrapper" >
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><FontAwesomeIcon icon={faBars} /></a>
                        <ul class="left hide-on-med-and-down" id="dropdownlist">
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">English<FontAwesomeIcon icon={faCaretDown} /></a></li>
                            <li>Contact Sales</li>
                        </ul>
                        <ul class="right hide-on-med-and-down" >
                            <li><FontAwesomeIcon icon={faSearch} /></li>
                            <li id="list2"><a class="waves-effect waves-light btn">Log in</a></li>
                            <li id="list"><a class="waves-effect waves-light btn">Get Hubspot free</a></li>
                        </ul>
                    </div>
                </nav>
         
            </div>
        );
    }
}

export default Header;
