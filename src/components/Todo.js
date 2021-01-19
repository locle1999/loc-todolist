import React, { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.create=this.create.bind(this);

    }
    create(item){
        return <li onClick={() => this.delete(item.key)} key ={item.key}>{item.text}</li>
    }
    delete(key){
        this.props.delete(key);
    }
    render(){
        var todoEnter = this.props.entries;
        var listItems = todoEnter.map(this.create);
        return(
            <ul className="theList">
                {listItems}
            </ul>

        );
    }

}
export default Todo;