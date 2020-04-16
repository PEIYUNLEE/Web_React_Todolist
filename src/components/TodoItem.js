import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            isEditing:false,
        }

        this.onEditClick = this.onEditClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onArchiveClick = this.onArchiveClick.bind(this);      
    }

    render() {
        const {todo} = this.props;
        const idx = this.props.index;

        if(this.state.isEditing){
            return (
                <tr>
                    <td><input type="text" data-idx={idx} defaultValue={todo.task} ref="editInput"/></td>
                    <td>
                    <button onClick={this.onArchiveClick}>Archive</button>
                    <button onClick={this.onSaveClick}>Save</button>
                    </td>
                </tr>
            );
        }

        return (
            <tr>
                <td>{todo.task}</td>
                <td>{todo.estimateTomo}</td>
                <td>
                    <button onClick={this.onEditClick}>Edit</button>
                </td>
            </tr>
        );
    }

    onEditClick(){
        this.setState({isEditing:true})
    }

    onArchiveClick(){
    }

    onSaveClick(){
        const editinput = this.refs.editInput;
        const editTomo = this.state.editTomo;
        this.props.saveTask(+editinput.getAttribute('data-idx'),editinput.value,editTomo);   // + 把字串轉成數值
        this.setState({isEditing:false});
    }
}

export default TodoItem;