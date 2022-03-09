import { Component } from "react";
import "./contact.css"
class Contact extends Component{
    constructor(props){
        super(props);
        this.nameStyle = {
            color: 'red',
            textDecoration: 'underline'
        };
        this.classes = props.gender === 'M' ? 'Contact-Card male' : 'Contact-Card female';
        this.title = props.gender === 'M' ? 'Mr.' : 'Ms.';
        this.state = {
            contacted: props.contacted
        }
    }
    changeContactedStatus = () => {
        this.setState({
            contacted: !this.state.contacted
        })
    }
    render(){
        return (
            <div className={this.classes}> 
            <div>
                <h4 style = {this.nameStyle}>{this.title} {this.props.name}</h4>
                <hr/>
                {this.props.email ? <h5>Email:{this.props.email}</h5> : " "}
                {this.props.mobile ? <h5>Mobile:{this.props.mobile}</h5> : " "}
                <hr></hr>
                <input type = 'checkbox' checked = {this.state.contacted} onChange={this.changeContactedStatus}/> Contacted
            </div>            
            </div>
        );
    }
}
export default Contact;