import React, { Component } from 'react';
import Solano from './Components/Header';

class App extends Component {
  render() {
    return (
       
        React.createElement('div', {className: 'text-center'}, 
           <Solano/>,
          React.createElement('div', null, 'HOla hola')
           )
    );
  }
}

/*export const a = 2; 
export const b = 3;
export const c = true;

///////
import {a,b,c} = 'App'*/

export default App;
