 import React, {Component} from 'react';
 import Home from './components/about';
 import ReactDOM from 'react-dom';

 class App extends Component {
   render(){
     return (
       <div>
        <Home />
       </div>
     );
   }
 }
 ReactDOM.render(<App />, document.querySelector('.app'));
