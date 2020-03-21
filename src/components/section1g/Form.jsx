import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form>
          <div className="personalData">
            <div className="name">
              <label>Wpisz swoje imię</label>
              <input
                type="text"
                name="name"
                // value={name}
                // onChange={this.handleChange}
                placeholder="Krzysztof"
              />
            </div>
            <div className="email">
              <label>Wpisz swój e-mail</label>
              <input
                // value={email}
                type="email"
                name="email"
                // onChange={this.handleChange}
                placeholder="abx@xyz.pl"
              />
            </div>
          </div>

          <div className="textarea">
            <label>Wpisz swoją wiadomość</label>
            <textarea
              wrap="on"
              rows="10"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              name="message"
              //   value={message}
              //   onChange={this.handleChange}
            ></textarea>
          </div>
        </form>
        <button
          className="submit"
          id="submit"
          type="submit"
          value="Wyślij"
          // onClick={this.handleSubmit}
        >
          Wyślij
        </button>
      </div>
    );
  }
}
export default Form;