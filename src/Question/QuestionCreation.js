import React from 'react';
import { questionAlign } from './../js/functions'
class QuestionCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: questionAlign()
        }
        console.log(this.state.data);
    }

    render() {
        return (
            <div className="container-fluid">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

                <div className="bg">
                    <h2 className="text-center text-white pt-xl-1">Test Your Knowledge!!</h2>
                    <div className="row pt-xl-3">
                        <div className="col-md-2 offset-md-5">
                            <button className="btn btn-info btn-block mb-4" id="tas1">Get Start Now</button>
                        </div>
                    </div>
                    {this.state.data.map((item,id) => (
                        <div className="row text-white text-center pb-xl-1">
                            <div className="col-md-10 offset-md-1">
                                <h3 className=" text-white pt-xl-1">{item.question}</h3>
                                {item.options.map((options,index) => ( 
                                    <div className="custom-control custom-radio">
                                        <input type="radio" className="custom-control-input" name={"groupOfDefaultRadios"+id+""+index} />
                                        <label className="custom-control-label">{options.option}</label>
                                    </div>))}
                            </div>
                        </div>
                    ))}



                </div>

            </div>
        )
    }
}

export default QuestionCreation;