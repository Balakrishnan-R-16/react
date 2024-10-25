import React from 'react';

class Day3cw1 extends React.Component {
    state = {
        showMessage: false
    }

    toggleMessage = () => {
        this.setState((prevState) => ({
            showMessage: !prevState.showMessage
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleMessage}>
                    {this.state.showMessage ? "Hide Component" : "Show Component"}
                </button>
                {this.state.showMessage && <div>Hi! How are You!!!</div>}
            </div>
        )
    }
}

export default Day3cw1;