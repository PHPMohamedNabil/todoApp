import React, { Component } from 'react';
import AddItem from './components/AddItem/AddItem';
import TodoItems from './components/TodoItems/TodoItems';

class App extends Component{
    state = {  
       items: [
           {id:1,name:'mohamed',age:23},
           {id:2,name:'Ahmed',age:24},
           {id:3,name:'Nabil',age:25}
       ],
       error:''
    }
    deleteItem = (id) =>{
       let items = this.state.items.filter(item=>{
           return item.id !== id;
       });
       this.setState({items});
       console.log(id);
    }

    addItem = (item) =>{
        item.id= Math.random()*10;
        let items =this.state.items;
        items.push(item);
        this.setState({items});
    }
    errorMessage = (error) =>{
       this.setState({error})
      if(this.state.error !=='')
      return (
         <div className="error">
               {this.state.error}
         </div>
         );
      return null;
   }
   render(){
    return (
      <div className="App container">
         <h1 className="text-center">Todo List</h1>
           
           {this.state.error ?<div className="error">{this.state.error}</div>:'' }

         <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
         <AddItem addItem={this.addItem} err={this.errorMessage}/>
      </div>
    );
   }

}
export default App;
