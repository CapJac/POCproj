import ContactTableElement from "../contact-table-element/contactTableElement";
import { contactList } from "../../Data/contactlist";

const ContactTable = (props) => {
    let contacts = contactList.map(c =>
        <ContactTableElement>
            name = {c.name}
            email = {c.email}
            phone = {c.mobile}
            gender = {c.gender}
        </ContactTableElement>
        ); 
        return(
            <table>
                <td>
                    <tr>Name</tr>
                    <tr>Email</tr>
                    <tr>Phone</tr>
                    <tr>Gender</tr>
                </td>
                {contacts}
            </table>
        );
}
export default ContactTable