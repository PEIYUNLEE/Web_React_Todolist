import React, { Component } from 'react';

class TomoItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {estimateTomo,number} = this.props;
        if(estimateTomo>=number){
            return (
                <button id={"tomo"+number} onClick={()=>{this.props.tomoChecked(number);}}>{"tomo"+number+"selected"}</button>
                // <label>
                //     {"tomo"+number}
                //     <input type="checkbox" id={"tomo"+number} value={number} checked="checked" onChange={()=>{this.props.tomoChecked(number);}}/>
                // </label>
            );
        };

        return (
            // <label>
            //     {"tomo"+number}
            //     <input type="checkbox" id={"tomo"+number} value={number} onChange={()=>{this.props.tomoChecked(number);}}/>
            // </label>
            
            <button id={"tomo"+number} onClick={()=>{this.props.tomoChecked(number);}}>{"tomo"+number}</button>
        );
    }

}

export default TomoItem;