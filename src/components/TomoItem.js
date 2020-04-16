import React, { Component } from 'react';

class TomoItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {estimateTomo,number,setEstimateTomo} = this.props;
        if(estimateTomo>=number){
            return (
                <button id={"tomo"+number} onClick={()=>{setEstimateTomo(number);}}>{"tomo"+number+"selected"}</button>
                // <label>
                //     {"tomo"+number}
                //     <input type="checkbox" id={"tomo"+number} value={number} checked="checked" onChange={()=>{setEstimateTomo(number);}}/>
                // </label>
            );
        };

        return (
            // <label>
            //     {"tomo"+number}
            //     <input type="checkbox" id={"tomo"+number} value={number} onChange={()=>{setEstimateTomo(number);}}/>
            // </label>
            
            <button id={"tomo"+number} onClick={()=>{setEstimateTomo(number);}}>{"tomo"+number}</button>
        );
    }

}

export default TomoItem;