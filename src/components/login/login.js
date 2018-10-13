import React from "react"
import PropTypes from 'prop-types'

class Login extends React.Component {
  render() {
    return(
      <div className="Login">        
        <div className="Login__content">
          <form className="Login__content__form" onSubmit={this.props.handleSubmit}>
            <label>
              Login name
              <input className="Login__content__form__input" type="text" name="login" value={this.props.login} onChange={this.props.handleChange}/>
            </label>
            <input className="Login__content__form__submit" type="submit" value="Submit" />
            {this.props.validationError?              
                <div className="Login__content__form__error">
                  {this.props.validationError}
                </div>
              :""
            }            
          </form>
        </div>          
      </div>
    )
  }
}

Login.propTypes = {
  name: PropTypes.string,
  //validationError: 
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default Login
