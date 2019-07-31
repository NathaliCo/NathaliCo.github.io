import React, { Component } from "react";
import "./contact.css";
import Title from "./Title";
import ScrollAnimation from "react-animate-on-scroll";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <section className="form">
            <Title name="Contact Me" />
            <div className="row">
              <form
                className="col s12"
                action="https://formspree.io/nathaliecortz@hotmail.com"
                method="POST"
              >
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      name="name"
                      id="icon_prefix"
                      type="text"
                      className="validate"
                      required
                    />
                    <label htmlFor="icon_prefix">Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">phone</i>
                    <input
                      name="phone"
                      id="icon_telephone"
                      type="tel"
                      className="validate"
                    />
                    <label htmlFor="icon_telephone">Telephone</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input
                      name="_replyto"
                      id="icon_email"
                      type="tel"
                      className="validate"
                      required
                    />
                    <label htmlFor="icon_email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">message</i>
                    <textarea
                      name="message"
                      id="textarea1"
                      type="tel"
                      className="materialize-tarea"
                      required
                    />
                    <label htmlFor="texttarea1">Message</label>
                  </div>
                </div>
                <button type="submit" className="btn waves-effect waves-light">
                  Send
                </button>
              </form>
            </div>
          </section>
        </ScrollAnimation>
      </React.Fragment>
    );
  }
}
