import Contact from '../Contact/contact';
import {contactList} from '../../Data/contactlist';

const Contacts = () => {
    let contacts = contactList.map(c => <Contact    name = {c.name}
                                                    email = {c.email} 
                                                    mobile = {c.mobile} 
                                                    gender = {c.gender}
                                                    contacted = {c.contacted}></Contact>);
    return(
        <>
        {contacts}
        </>
    )
}
export default Contacts;