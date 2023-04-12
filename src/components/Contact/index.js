import {React,Component} from 'react'
import './index.css'


class Contact extends Component{
  state = {isFormSubmitted: false, name: '', email: '', textarea: '', showNameError: false, showEmailError: false, showTextAreaError: false}

  sendEmail = (event) => {
    event.preventDefault()
  }

  onChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  onChangeText = (event) =>{
    this.setState({textarea: event.target.value})
  }

  onBlurName = () => {
    const isValidName = this.validateName()
    this.setState({showNameError: !isValidName})
  }

  validateName = () => {
    const {name} = this.state
    return name !== ''
  }

  onBlurEmail = () => {
    const isValidEmail = this.validateEmail()
    this.setState({showEmailError: !isValidEmail})
  }

  validateEmail = () => {
    const {email} = this.state
    return email !== ''
  }

  onBlurTextArea = () => {
    const isTextArea = this.validateTextArea()
    this.setState({showTextAreaError: !isTextArea})
  }

  validateTextArea = () => {
    const {textarea} = this.state
    return textarea !== ''
  }

  renderNameField = () => {
    const {name, showNameError} = this.state
    const className = showNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className={className}
          value={name}
          placeholder="Name"
          onChange={this.onChangeName}
          onBlur={this.onBlurName}
        />
      </div>
    )
  }

  renderEmailField = () => {
    const {email, showEmailError} = this.state
    const className = showEmailError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          className={className}
          value={email}
          placeholder="Email"
          onChange={this.onChangeEmail}
          onBlur={this.onBlurEmail}
        />
      </div>
    )
  }

  renderTextField = () => {
    const {textarea, showTextAreaError} = this.state
    const className = showTextAreaError
      ? 'name-textarea-field error-field'
      : 'name-textarea-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="text">
          MESSAGE!!!
        </label>
        <textarea
          cols={40}
          rows={8}
          id="text"
          className={className}
          value={textarea}
          placeholder="Enter your message"
          onChange={this.onChangeText}
          onBlur={this.onBlurTextArea}
        />
      </div>
    )
  }


  renderContactForm = () => {
    const {showNameError, showEmailError, showTextAreaError} = this.state

    return (
      <form className="form-container" onSubmit={this.sendEmail}>
        {this.renderNameField()}
        {showNameError && <p className="error-message">Required</p>}
        {this.renderEmailField()}
        {showEmailError && <p className="error-message">Required</p>}
        {this.renderTextField()}
        {showTextAreaError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onSubmitForm = (event) => {
    event.preventDefault()
  }

  render(){
    const {isFormSubmitted} = this.state
    return (
      <div className="contact-form-container">
        <h1 className="form-title">Write me a Message</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderContactForm()}
        </div>
      </div>
    )
  }
}

export default Contact