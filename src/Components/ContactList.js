import React from 'react';

const arr = [1,2,3]

const ContactList = (props) =>{
    const contacts= props.contacts.map((contact)=>(
    <div key={contact._id} className="list-group-item"> 
        <div>
            <p>{contact.firstName}</p>
            <p>{contact.lastName}</p>
            <p>{contact.phone}6</p>
        </div>
    </div>
    ));
return(
    <div className="list-group">
        {contacts}
    </div>
);
}

export default ContactList;