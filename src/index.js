 import React, {Component} from 'react';
 import ReactDOM from 'react-dom';
 import { BrowserRouter as Router} from 'react-router-dom';
 import Route from 'react-router-dom/Route';

 import Home from './components/home';
 import Budz from './components/budz';
 import Dabz from './components/dabz';
 import Ediblez from './components/ediblez';
 import Drinkz from './components/drinkz';

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
             <Route path="/budz" exact render={
                 ()=>{
                   return (<Budz /> );
                 }
               }/>
             <Route path="/dabz" exact render={
                 ()=>{
                   return (<Dabz /> );
                 }
               }/>
               <Route path="/ediblez" exact render={
                   ()=>{
                     return (<Ediblez /> );
                   }
                 }/>
             <Route path="/drinkz" exact render={
                 ()=>{
                   return (<Drinkz /> );
                 }
               }/>
           </div>
     </Router>
     );
   }
 }
 
 ReactDOM.render(<App />, document.querySelector('.app'));
