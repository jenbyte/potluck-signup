import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: "",
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.name + " - " + this.state.text),
      name: "",
      text: ""
    }));
  }

  handleChange(e) {
    this.setState({
      name: this.refs.name.value,
      text: this.refs.food.value
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      <div className="App">
        <h1 class="title">Potluck Signup Form</h1>
        <form onSubmit={this.handleSubmit}>
          <span>Name: </span>
          <input
            class="name"
            value={this.state.name}
            type="text"
            onChange={e => this.handleChange(e)}
            ref="name"
          />
          <p>What are you planning to bring? (please enter below) </p>
          <input
            class="food"
            value={this.state.text}
            type="text"
            onChange={e => this.handleChange(e)}
            ref="food"
          />
          <br />
          <br />
          <button>Enter</button>
          <ol>
            {this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={() => this.removeItem(index)}>
                    <span class="delete">X</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </form>
      </div>
    );
  }
}

function ProductList() {
  return (
    <div>
      <h1 class="title">Potluck Signup Form</h1>
      <h4>Date: TBD</h4>
      <ol>
        <li>
          <Person name="desk" price="300" />
        </li>
      </ol>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SignUp />, rootElement);
