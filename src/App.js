import Header from './Components/Header/header'
// import Contact from './Components/Contact/contact';
// import Footer from './Components/Footer/footer';
// import ClickCounter from './Components/click-counter/clickCounter';
// import ContactTable from './Components/contact-table/contactTable';
// import Parent from './Components/communication/parent/parent';
// import HoverCounter from './Components/hoverCounter/hoverCounter';
import Users from "./Components/users/users";
import Contacts from './Components/Contact/contacts'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import User from './Components/user/user';
import Parent from './Components/communication/parent/parent';
import { Provider } from './Components/context/context';
import { Component } from 'react';
class App extends Component{
  constructor(){
    super();
    this.state = {
      userName: 'jachen',
      appName: 'react app',
      num: 0
    };
  }
  updateState = (key, value) =>{
    this.setState({
      [key] : value
    });

  }
  render(){
    return(
      <BrowserRouter>
      <Provider value = {{getValue: this.state, setValue: this.updateState}}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component = {Contacts}></Route>
          <Route path = "/users" component = {Users}></Route>
          <Route path = "/comm" component = {Parent}></Route>
          <Route path = "/users/id" component = {User}></Route>
        </Switch>
        </Provider>
      </BrowserRouter>
  );
}
}
export default App;