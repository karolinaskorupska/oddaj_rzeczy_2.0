import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    message: "",
    messageError: "",
    isValidated: false
  };

  createNewContact = () => {
    const { name, email, message } = this.state;

    let newContact = {
      name: name,
      email: email,
      message: message
    };

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw new Error("Network error- błąd połączenia z serwerem");
      })
      .then(response => response.json())
      .then(newContact => {
        console.log(newContact.status);
        if (newContact.status === "succes") {
          this.setState({ newContactSent: true });
        }
      })

      .catch(error => {
        console.log(error);
      });

  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate = () => {
    let isValid = true;
    
    if (this.validateName && this.validateEmail && this.validateMessage) {
      isValid = true;
      return isValid;
    } else {
      isValid = false;
      return isValid;
    }
  };
  validateName = () => {
    const { name } = this.state;
    let isNameValid = true;
    if (name === "" || name.match(" ")) {
      isNameValid = false;
      this.setState({ nameError: "Podane imię jest nieprawidłowe!" });
    } else {
      this.setState({ nameError: "" });
      isNameValid = true;
    }
    return isNameValid;
  };
  validateEmail = () => {
    const { email } = this.state;
    let isEmailValid = true;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      isEmailValid = false;
      this.setState({ emailError: "Podany email jest nieprawidłowy!" });
    } else {
      this.setState({ emailError: "" });
      isEmailValid = true;
    }
    return isEmailValid;
  };
  validateMessage = () => {
    const { message } = this.state;
    let isMessageValid = true;

    if (message === "" || message.length <= 120) {
      isMessageValid = false;
      this.setState({
        messageError: "Wiadomość musi mieć conajmniej 120 znaków!"
      });
    } else {
      this.setState({ messageError: "" });
      isMessageValid = true;
    }
    return isMessageValid;
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.validateName && this.validateEmail && this.validateMessage){
      this.createNewContact();
    }

  };

  render() {
    const {
      name,
      email,
      message,
      newContactSent,
      emailError,
      nameError,
      messageError
    } = this.state;
   

    return (
      <div className="form">
        {newContactSent && (
          <div className="AlertSent">
            <span>Wiadomość została wysłana!</span>
            <span>Wkrótce się skontaktujemy</span>
          </div>
        )}
        <form>
          <div className="personalData">
            <div className="name">
              <label>Wpisz swoje imię</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                onBlur={this.validateName}
                placeholder="Krzysztof"
              />
              {nameError && <span className="errorMessage">{nameError}</span>}
            </div>

            <div className="email">
              <label>Wpisz swój e-mail</label>
              <input
                value={email}
                type="email"
                name="email"
                onChange={this.handleChange}
                onBlur={this.validateEmail}
                placeholder="abx@xyz.pl"
              />
              {emailError && <span className="errorMessage">{emailError}</span>}
            </div>
          </div>

          <div className="textarea">
            <label>Wpisz swoją wiadomość</label>
            <textarea
              type="text"
              wrap="on"
              rows="5"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              name="message"
              value={message}
              onChange={this.handleChange}
              onBlur={this.validateMessage}
            ></textarea>
            {messageError && (
              <span className="errorMessage">{messageError}</span>
            )}
          </div>
        </form>
        <button
          className="submit"
          id="submit"
          type="submit"
          value="Wyślij"
          onClick={this.handleSubmit}
        >
          Wyślij
        </button>
      </div>
    );
  }
}
export default Form;