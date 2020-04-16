import React, { Component } from 'react';
import TomoList from './TomoList';

class TodoAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            estimateTomo:0,
        }
        this.onAddClick = this.onAddClick.bind(this);
        this.setEstimateTomo = this.setEstimateTomo.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" ref="addInput"/>
                <TomoList estimateTomo={this.state.estimateTomo} setEstimateTomo={this.setEstimateTomo}/>
                <button onClick={this.onAddClick}>ADD TASK</button>
            </div>
        );
    }

    onAddClick(){
        const addInput = this.refs.addInput;
        this.props.addTask(addInput.value, this.state.estimateTomo);
        addInput.value='';
        this.setState({
            estimateTomo:0
        })
    }

    setEstimateTomo(number){
        this.setState({
            estimateTomo:number
        })
    }
}

export default TodoAdd;