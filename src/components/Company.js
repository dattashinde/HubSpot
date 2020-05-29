import React,{Component} from 'react'
import '../Styles/index.css'


class Company extends Component{
    render(){
        return(
            <div className="App">
            	<h4 id="App1">Learn and grow with award-winning support and a thriving community behind you.</h4>
            	<p id="App2">You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.</p>
               <div className="row" id="companyNew">
                    <div className="col s12 m12 l3 ">
                        <h2 id="benefitsNew">150+</h2>
                        <p>HubSpot user groups</p>
                    </div>
                    <div className="col s12 m12 l3 ">
                        <h2 id="benefitsNew">7M+</h2>
                        <p>monthly visits</p>
                    </div>
                    <div className="col s12 m12 l3 ">
                        <h2 id="benefitsNew">248K+</h2>
                        <p>certified professionals</p>
                    </div>
                    <div className="col s12 m12 l3 ">
                        <h2 id="benefitsNew">26+</h2>
                        <p>registered attendees</p>
                    </div>
                </div>
                <div className="row" id="companyNew">
                    <div className="col s12 m12 l3 ">
                        <h2 id="benefitsNew">400+</h2>
                        <p>integrations</p>
                    </div>
                    <div className="col s12 m12 l3 ">
                        <h2 id="benefitsNew">6</h2>
                        <p>languages</p>
                    </div>
                    <div className="col s12 m12 l3 ">
                        <h2 id="benefitsNew">2.5M+</h2>
                        <p>social followers</p>
                    </div>
                    <div className="col s12 m12 l3 ">
                        <h2 id="benefitsNew">5k+</h2>
                        <p>profiles and counting</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Company;



