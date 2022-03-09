const ContactTableElement = (props) => {
    let Gender = props.gender === 'M' ? 'Male' : 'Female';
    let Title = props.gender === 'M' ? 'Mr.' : 'Ms.';

    return (
        <tr>
            <td>{Title} {props.name}</td>
            <td>{this.props.email ? <h5>Email:{this.props.email}</h5> : " "}</td>
            <td>{this.props.mobile ? <h5>Mobile:{this.props.mobile}</h5> : " "}</td>
            <td>{Gender}</td>
        </tr>
    );
}
export default ContactTableElement;