import React,{Component} from 'react'
import '../Styles/index.css'
import Atlassian from '../assets/atlassian1.png';
import Dash from '../assets/dash.png';
import Croed from '../assets/croed.png';
import Monkey from '../assets/monkey.png';
import Wista from '../assets/wista.png';
import Vmware from '../assets/vmware.png';
import Classpass from '../assets/classpass.png';
import Sub from '../assets/sub.png';
import Client from '../assets/clients.png';


class Clients extends Component{
    render(){
        return(
            <div className="clients">
            	
               <div className="row">
                    <div className="col s12 m12 l6" id="clientsNew">
                        <h2>78,700</h2>
                        <p>customers in over 120 countries growing their businesses with HubSpot</p>
                    </div>
                    <div className="col s12 m12 l6 " id="imageNew2">
                       <div className="row" id="imageNew8">
                           <div className="col s12 m12 l3">
                                <img src={Atlassian} />
                            </div>
                            <div className="col s12 m12 l3 ">
                                <img src={Dash} />
                            </div>
                            <div className="col s12 m12 l3 ">
                                <img src={Croed}/>
                            </div>
                            <div className="col s12 m12 l3 ">
                                <img src={Monkey} />
                            </div>
                        </div>
                        <div className="row" id="imageNew8">
                           <div className="col s12 m12 l3 ">
                                <img src={Sub} />
                            </div>
                            <div className="col s12 m12 l3 ">
                                <img src={Wista} />
                            </div>
                            <div className="col s12 m12 l3 ">
                                <img src={Classpass}/>
                            </div>
                            <div className="col s12 m12 l3 ">
                                <img src={Vmware} />
                            </div>
                        </div>
                    </div>
                   
                </div>
                 <div className="row">
                    <div className="col s12 m12 l6"id="clientsNew">
                        <h2>Start Growing With HubSpot Today</h2>
                        <p>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
                    </div>
                    <div className="col s12 m12 l6 " id="imageNew2">
                        <div className="col s12 m12 l12 ">
                            <img  width="300" height="300"src={Client} />
                        </div>                    
                    </div>
                   
                </div>
                
            </div>
        )
    }
}

export default Clients;



