import React from 'react';
import { questionAlign, CalculateAnswer } from './../js/functions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

class QuestionCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: questionAlign(),
            answer: {
                name: [],
                value: []
            },
            calculatedScore: 0
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
    handleEvent(e) {
        if (this.state.answer.name.includes(e.target.name)) {
            let index = this.state.answer.name.indexOf(e.target.name);
            this.state.answer.value[index] = e.target.value;
        }
        if (!this.state.answer.name.includes(e.target.name)) {
            this.state.answer.name.push(e.target.name);
            this.state.answer.value.push(e.target.value);
        }
    }
    onSubmit() {
        this.state.calculatedScore = CalculateAnswer(this.state);
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
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
                    {this.state.data.map((item, id) => (
                        <div key={id} className="row text-white  p-5">
                            <div className="col-md-10 offset-md-1">
                                <h3 className=" text-white pt-xl-1">{item.question}</h3>
                                {item.options.map((options, index) => (
                                    <div className="custom-control custom-radio" key={"" + id + "" + index}>
                                        <input type="radio" id={"defaultGroupExample" + id + "" + index} className="custom-control-input" name={item.question} value={options.option} onClick={this.handleEvent} />
                                        <label className="custom-control-label" htmlFor={"defaultGroupExample" + id + "" + index}>{options.option}</label>
                                    </div>))}
                            </div>
                        </div>
                    ))}
                    <div className="row pt-xl-5">
                        <div className="col-md-2 offset-md-1 col-3 ">
                            <button className="btn btn-success btn-block mb-4" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
                <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
                    <DialogTitle>User Scored</DialogTitle>
                    <DialogContent>
                        <div>
                            Your Score = {this.state.calculatedScore}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" onClick={this.handleCloseDialog}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default QuestionCreation;