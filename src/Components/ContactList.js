import React from 'react';

const arr = [1,2,3]

const ContactList = () =>{
    const contacts= [1,2,3].map((contact)=>(
    <div key={contact} className="list-group-item"> 
        <div>
            <p>{contact} </p>
            <p>Juan </p>
            <p>Martinez</p>
            <p>09875232316</p>
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