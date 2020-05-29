import React,{Component} from 'react';

import '../Styles/index.css'


class Cards extends Component {
    render(){
        return( <div>
                <div className="row">
					<div className="col s12 m12 l4">
					        <h2 id="powerful">Powerful alone. Better together.</h2>
					        <p id="HubSpot" >HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core. They’re powerful alone — but even better when used together.</p>     
          			</div>
          			<div className="col s12 m12 l4 new" id="main">
						<div className="card new2">
					       
					     <h4>Free HubSpot CRM</h4>
					     <p>Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever.</p>
					      <p id="feature">POPULAR FEATURES</p>
					      <ul id="orderlist">
					      	<li>Contact Insights</li>
					      	<li>Deals</li>
					      	<li>Tasks</li>
					      </ul>
					       <a class="waves-effect waves-light btn" id="build1">Get CRM free</a>
					     </div>
          			</div>
          			<div className="col s12 m12 l4 new" id="main1">
						<div className="card new2">
					       
					       <h4>CMS Hub</h4>
					       <p>Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.</p>
					      <p id="feature">POPULAR FEATURES</p>
					      <ul id="orderlist">
					      	<li>Drag-and-Drop Editor</li>
					      	<li>SEO Recommendations</li>
					      	<li>Website Themes</li>
					      </ul>
					       <a class="waves-effect waves-light btn" id="build1">Get CRM free</a>
					       
					     </div>
          			</div>
          		</div>
          		<div className="row">
					<div className="col s12 m12 l4 new" id="cardNEw1">
						<div className="card new2" id="cardNew4">
					       
					     <h4>Marketing Hub</h4>
					     <p>Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.</p>
					      <p id="feature">POPULAR FEATURES</p>
					      <ul id="orderlist">
					      	<li>Lead Generation</li>
					      	<li>Marketing Automation</li>
					      	<li>Analytics</li>
					      </ul>
					       <a class="waves-effect waves-light btn" id="build1">Get CRM free</a>
					     </div>
          			</div>
          			<div className="col s12 m12 l4 new" >
						<div className="card new2" id="cardNew2">
					       
					     <h4>Sales Hub</h4>
					     <p>Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.</p>
					      <p id="feature">POPULAR FEATURES</p>
					      <ul id="orderlist">
					      	<li>Email Tracking</li>
					      	<li>Meeting Scheduling</li>
					      	<li>Email Automation</li>
					      </ul>
					       <a class="waves-effect waves-light btn" id="build1">Get CRM free</a>
					     </div>
          			</div>
          			<div className="col s12 m12 l4 new">
						<div className="card new2"id="cardNew3">
					       
					       <h4>Service Hub</h4>
					       <p>Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business.</p>
					      <p id="feature">POPULAR FEATURES</p>
					      <ul id="orderlist">
					      	<li>Tickets</li>
					      	<li>Customer Feedback</li>
					      	<li>Knowledge Base</li>
					      </ul>
					       <a class="waves-effect waves-light btn" id="build1">Get CRM free</a>
					       
					     </div>
          			</div>
          		</div>
          		</div>
        );
    }
}

export default Cards;
