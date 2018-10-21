 import React, {Component} from 'react';
 import Home from './components/home';
 import ReactDOM from 'react-dom';
 import { BrowserRouter as Router} from 'react-router-dom';
 import Route from 'react-router-dom/Route';


 class App extends Component {
   render(){
     return (
       <Router>
           <div>
             <Route path="/" exact render={
                 ()=>{
                   return (<Home /> );
                 }
               }/>
           </div>
     </Router>
     );
   }
 }
 ReactDOM.render(<App />, document.querySelector('.app'));
