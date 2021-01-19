import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state ={
            items:[]
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }


addItem(e){
    if (this._inputElement.value !== ""){
        var newItem ={
            text: this._inputElement.value,
            key: Date.now()
        };
        this.setState(
            (prevState) =>{
                return{
                    items:prevState.items.concat(newItem)
                };
            }
            );               
        }
        this._inputElement.value="";
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItems(key){
        var filterItem = this.state.items.filter((items) => {
            return(items.key !== key);

        });
        this.setState({
            items: filterItem
        });
    }
    render(){
        return(
            <div className= "todoListMain">
                <div className ="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}  placeholder = "nap">
                        </input>
                        <button type ="submit">add</button>
                    </form>
                </div>
                <Todo entries={this.state.items} delete={this.deleteItems}></Todo>
            </div>
        );
    }
}

export default TodoList;