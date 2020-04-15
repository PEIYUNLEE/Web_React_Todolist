import React, { Component } from 'react';

class TodoAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            estimateTomo:0,
        }
        this.onAddClick = this.onAddClick.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" ref="addInput"/>
                <button onClick={this.onAddClick}>ADD TASK</button>
            </div>
        );
    }

    onAddClick(){
        const addInput = this.refs.addInput;
        this.props.addTask(addInput.value, this.state.estimateTomo);
        addInput.value='';
    }
}

export default TodoAdd;