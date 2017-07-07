import React from 'react';

const ContactForm = (props) =>(
    <div>
        <p><label>Nombre: </label>
        <input 
        type='text' value={props.vfirstName}
        onChange={props.onFirstNameChange}
        /></p>

        <p><label>Apellido: </label>
        <input 
        type='text' 
        value={props.vLastName}
        onChange={props.onLastNameChange}
        /></p>

        <p><label>Telefono: </label>
        <input 
        type='text' 
        value={props.vphone}
        onChange={props.onPhoneChange}
        /></p>

        <button className="btn btn-primary" onClick={() => props.saveContact(
            	{
            		firstName: props.firstName, 
            		lastName: props.lastName,
            		phone: props.phone
            	})}>
            	Guardar
        </button>


    </div>    
);

export default ContactForm;