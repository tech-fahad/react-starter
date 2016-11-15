import React from 'react'
import {ReactDOM} from 'react-dom'
import {render} from 'react-dom'
 
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router'
import Home from './components/Home'
import Git from './components/Git'
import Footer from './components/Footer'

class Base extends React.Component {
   render() {
     var listStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: "#ffde00",
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: "32px",
      textAlign: "center"      
    };  
      return (
         <div>
            <ul>
              <li style={listStyle}><Link to="/">Home</Link></li>
              <li style={listStyle}><Link to="/git">Git</Link></li>               
            </ul>
				
           {this.props.children}

           <Footer />
         </div>
      )
   }
}

render(   
    <Router history = {browserHistory}>
        <Route path = "/" component = {Base}>
          <IndexRoute component = {Home} />
          <Route path = "/" component = {Home} />
          <Route path = "/git" component = {Git} />
        </Route>
    </Router>,
   document.getElementById('root')
)