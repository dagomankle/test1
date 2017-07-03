import React from 'react';

const ContactForm = (props) =>(
    <div>
        <input 
        type='text' 
        value={props.firstName}
        onChange={props.onChange}
        />

        <input 
        type='text' 
        value={props.LastName}
        onChange={props.onChange}
        />

        <input 
        type='text' 
        value={props.phone}
        onChange={props.onChange}
        />
    </div>    
);