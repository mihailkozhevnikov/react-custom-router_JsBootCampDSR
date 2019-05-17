import React from 'react';
import {Route, Link} from "./Router";

const About = () => (
  <div>
    <h1>About</h1>
  </div>
)

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)


const Contacts = () => (
  <div>
    <h1>Contacts</h1>
  </div>
)

 class Navigation extends React.Component{
  render () {
    return(

      <div>
        <ul>
                    
                    <li><Link class="link" to="/">Home</Link></li>
                    <li><Link class="link" to="/about/">About</Link></li>
                    <li><Link class="link" to="/contacts">Contacts</Link></li>
                    
                    <Route exact path="/" component={Home}/>
                    <Route path="/about/" component={About}/>
                    <Route path="/contacts" component={Contacts}/>
        </ul>
      </div>
    )
  }
}

export default Navigation;
