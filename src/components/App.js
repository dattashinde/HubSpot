import React,{Component} from 'react'
import Header from './Header'
import Clouds from './Clouds'
import Cards from './Cards'
import Company from './Company'
import Clients from './Clients'
import Footer from './Footer'
import Support from './Support'
import HubSpot from './HubSpot'


class App extends Component{
    render(){
        return(
            <div>
                <Header />
                <HubSpot />
                 <Clouds />
               <Cards />
                <Company />
                <Clients />
                 <Support />
                <Footer />
               
            </div>
        )
    }
}

export default App;