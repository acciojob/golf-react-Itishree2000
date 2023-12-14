import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: 0 }
        };
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.arrowKeyPressHandler = this.arrowKeyPressHandler.bind(this);
    }

    buttonClickHandler() {
        this.setState({
            renderBall: true
        });
        document.addEventListener("keydown", this.arrowKeyPressHandler);
    }

    arrowKeyPressHandler(event) {
        if (event.key === "ArrowRight" || event.keyCode === 39) {
            this.setState((prevState) => ({
                ballPosition: {
                    left: prevState.ballPosition.left + 5
                }
            }));
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.arrowKeyPressHandler);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.arrowKeyPressHandler);
    }

    render() {
        return (
            <div className="playground">
                {this.state.renderBall ? (
                    <div
                        className="ball"
                        style={{
                            position: "absolute",
                            left: `${this.state.ballPosition.left}px`
                        }}
                    ></div>
                ) : (
                    <button className="start" onClick={this.buttonClickHandler}>
                        Start
                    </button>
                )}
            </div>
        );
    }
}

export default App;

