import React, {Component} from "react";
class SenderChild extends Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }
    incrementNumber = () =>{
        this.setState({
            num: this.state.num + 1
        })
    }
    sendNumber = () =>{
        this.setState({
            num: this.state.num +1
        })
        this.props.onSend(this.state.num);
    }
    render(){
        return(
            <>
            <button onClick={()=> this.incrementNumber}> Send data to parent</button>
            </>
        );
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.num !== this.state.num){
            this.props.onSend(this.state.num)
        }
    }
}
export default SenderChild;