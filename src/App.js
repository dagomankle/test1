import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
       
        React.createElement('div', {className: 'text-center'}, 
              <Header/>, //importante para llamar componentes
              React.createElement('div', null, 'HOla hola'),
              <Footer copyright="copyright 2017" />
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
