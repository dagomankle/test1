import React, { Component } from 'react';
import Headerm from './Components/Header';
import Footer from './Components/Footer';
import SearchBox from './Components/SearchBox';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';


class App extends Component {

    constructor(props){
      super(props);
      this.state = {
          searchText: 'Busqueda',
          firstName:'',
          lastName:'',
          phone :'',
      };
    }

    handleSearchTextChange = (event)=>{
      this.setState({
        searchText: event.target.value
      });
    }

    handleFirstNameChange=(event)=>{
      this.setState({
        firstName: event.target.value
      });

    }

    handleLastNameChange=(event)=>{
      this.setState({
        lastName: event.target.value
      });

    }

    handlePhoneChange=(event)=>{
      this.setState({
        phone: event.target.value
      });

    }


  render() {
    return (
            <div>
              <Headerm/>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <SearchBox 
                        value={this.state.searchText}
                        onChange={this.handleSearchTextChange}
                      />
                    <ContactList/>
                  </div>
                  <div className="col-sm-12">
                    <h1>Nuevo Contacto</h1>
                    <ContactForm
                      vfirstName={this.state.firstName}
                      vlastName={this.state.lastName}
                      vphone={this.state.phone}
                      onFirstNameChange = {this.handleFirstNameChange}
                      onLastNameChange =  {this.handleLastNameChange}
                      onPhoneChange =  {this.handlePhoneChange}/>
                  </div>                  
                </div>
              </div>
              <Footer copyright="copyright 2017" />
            </div>
          
    );
  }
}

/*export const a = 2; 
export const b = 3;
export const c = true;

///////
import {a,b,c} = 'App'*/

export default App;
