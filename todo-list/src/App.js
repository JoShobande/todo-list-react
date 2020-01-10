import React, {Component} from 'react';
import Header from "./components/Header"
import Item from "./components/Item"
import Items from "./components/Items"
import Notes from "./components/Notes"
import Profilepic from "./components/Profilepic"
import Sidebar from "./components/Sidebar"
import Trash from "./components/Trash"
import Additem from "./components/Additem"

// import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Item />
        <Items />
        <Additem />
        <Notes />
        <Profilepic />
        <Sidebar />
        <Trash />
      </div>
    )

  }
}


export default App;
