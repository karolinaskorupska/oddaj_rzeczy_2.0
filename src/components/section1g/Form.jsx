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

    const newContact = {
      name: name,
      email: email,
      message: message
    };

    fetch("http://localhost:4000/contactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
      .then(response => response.json())
      .then(newContact => {
        console.log({ newContact });
      });
  };


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate = () => {
    const { name, email, message } = this.state;
    let isValid = true;

    if (name ==="" || name.includes(" ") !== -1) {
      isValid = false;
      this.setState({ nameError: "Name error - wpisz jedno imię" });
    } else {
      this.setState({ nameError: "" });
      isValid = true;
    }
    
    if (message ==="" || message.length <= 120) {
      isValid = false;
      this.setState({ messageError: "Message error- wpisz conajmniej 120 znaków" });
    } else {
      this.setState({ messageError: "" });
      isValid = true;
    }

    if (email === "" ||  email.indexOf("@") === -1) {
      isValid = false;
      this.setState({ emailError: "Uzupełnij dane o @" });
    } else {
      this.setState({ emailError: "" });
      isValid = true;
    }

    
    return isValid;
  };

  handleSubmit = event => {
    event.preventDefault();
   
   if(this.validate()){
     console.log("zwalidowano ok");;

    this.createNewContact();
   }

  
  };

  render() {
    const { name, email, message } = this.state;
    console.log(this.state.messageError)

    return (
      <div className="form">
        <form>
          <div className="personalData">
            <div className="name">
              <label>Wpisz swoje imię</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Krzysztof"
              />
            </div>
            <div className="email">
              <label>Wpisz swój e-mail</label>
              <input
                value={email}
                type="email"
                name="email"
                onChange={this.handleChange}
                placeholder="abx@xyz.pl"
              />
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
            ></textarea>
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
