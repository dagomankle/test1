import React, { Component } from 'react';
import axios from 'axios';

import Headerm from './Components/Header';
import Footer from './Components/Footer';
import SearchBox from './Components/SearchBox';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

const API_URL = 
'https://address-book-api-kfpkagtghu.now.sh'

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

    componentDidMount(){
      console.log('Mount!');
      axios({
          method: 'GET',
          url: API_URL + '/api/contacts',
          headers: {
            'Api-key':'1720074127'            
          },
      })
      .then((response) =>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })

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
                <form>
                  <div className="container">
                    <div className="form-group row">
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
                  <div className="text-center">
                    <button className="btn btn-primary">Guardar</button>
                  </div>
                </form>
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
