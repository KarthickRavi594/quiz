import React from 'react' // Library imports

// component Logic components
class SecondFile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            typingVariable: 'None',
            selectedDate: ''
        }
    }

    onChangeTextField = (event) => {
        console.log(event.target)
        this.setState({typingVariable: event.target.value})
    }

    onChangeDateField = (e) => {
        console.log(e.target)
        this.setState({selectedDate: e.target.value})
    }

    render() {
        return(
            <div style={{ margin: '5%'}}>
                <input type='text' value={this.state.typingVariable} onChange={(event) => this.onChangeTextField(event) }></input>
                <input type='date' value={this.state.selectedDate} onChange={(er) => { this.onChangeDateField(er) }}></input>
                <input type='password' ></input>
            </div>
        )
    }
}

// Export
export default SecondFile;

// // Normal function
// function add (a, b) {
//     return a + b
// }

// // Arrow function

// export const add = (a, b) => {
//     return a + b
// }

// {(a=1, b=2) => add(a, b)} 