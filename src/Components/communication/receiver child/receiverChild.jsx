import React, {Component} from "react";
import {Consumer} from '../../../Components/context/context';

class ReceiverChild extends Component{
    render(){
        return(
            <>
                <Consumer> {
                    context => {
                        return(
                            <>
                                <h2>Number: {this.props.num}</h2>
                                <h2>Context: {this.context.userName}</h2>
                            </>
                        )
                    }
                }
                </Consumer>
            </>
        )
    }
}
export default ReceiverChild;