import {PureComponent} from 'react';
import WithCounter from '../hoc/with-counter';

class ClickCounter extends PureComponent{
    render(){
        return(
            <>
                <h2>Number: { this.props.count}</h2>
                <button onClick= {this.props.incrementCounter}>Click to increment</button>
            </>
        );
    }
}
export default WithCounter(ClickCounter);