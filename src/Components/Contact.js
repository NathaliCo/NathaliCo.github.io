import React, { Component } from 'react';
import firebaseConf from './firebaseConf';
import "./contact.css"
import Title from './Title';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Contact extends Component {

  // inicializamos nuestro estado inicial
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  // Mostrar una alerta cuando se envia el formulario
  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  // Con esta funcion borramos todos los elementos del formulario
  resetForm() {
    this.refs.contactForm.reset();
  }

  // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();
    
    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      phone: this.inputPhone.value,
      message: this.textAreaMessage.value
    };
    
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.name && params.email && params.phone && params.phone && params.message) {
      // enviamos nuestro objeto "params" a firebase database
      firebaseConf.database().ref('form').push(params).then(() => {
        // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
        this.showAlert('success', 'Your message was sent successfull');
      }).catch(() => {
        // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error 
        this.showAlert('danger', 'Your message could not be sent');
      });
      // limpiamos nuestro formulario llamando la funcion resetform
      this.resetForm();
    } else {
      // En caso de no llenar los elementos necesario despliega un mensaje de alerta
      this.showAlert('warning', 'Please fill the form');
    };
  }

  render() {
    return (
      <React.Fragment>
       <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <section className = "form">
        <Title  name = "Contact Me"/>
        <div class="row">
    <form class="col s12" onSubmit={this.sendMessage.bind(this)} ref='contactForm'>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate" ref={name => this.inputName = name}/>
          <label for="icon_prefix">Name</label>
          
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate" ref={phone => this.inputPhone = phone}/>
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
      <div class="row">
      <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input id="icon_email" type="tel" class="validate" ref={email => this.inputEmail = email}/>
          <label for="icon_email">Email</label>
        </div>
      </div>
      <div class="row">
      <div class="input-field col s12">
          <i class="material-icons prefix">message</i>
          <textarea id="textarea1" type="tel" class="materialize-tarea" ref={message => this.textAreaMessage = message}/>
          <label for="texttarea1">Message</label>
        </div>
        </div>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
<div className='helper-text'>
{this.state.alertData.message}
</div>
</div>}
<button type='submit' className='btn waves-effect waves-light'>Send</button>

    </form>
  </div>
  </section>
        </ScrollAnimation>
     </React.Fragment>

    );
  }
}