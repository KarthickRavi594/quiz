import React from 'react';
import {questionAlign} from './../js/functions'
class QuestionCreation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : questionAlign()
        }
        console.log(this.state.data);
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default QuestionCreation;