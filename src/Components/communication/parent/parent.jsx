import React, {Component} from "react";
import ReceiverChild from "../receiver child/receiverChild";
import SenderChild from "../sender child/senderChild";

class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            val: ''
        }
    }
    getValue = (e) => {
        this.setState({
            val: e
        });
    }
    render(){
        return(
            <>
                {/* <h4>Child Data: {this.state.val}</h4> */}
                <SenderChild onsend={this.getValue}></SenderChild>
                <hr/>
                <ReceiverChild num={this.state.val}></ReceiverChild>
            </>
        )
    }
}
export default Parent;