import React from 'react';
import { useNavigate } from 'react-router-dom';
import { renderErrors } from '../../util/util';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(user);
    }

    render() {
        return (
            <section className='login-form-container'>
                <form className='login-form-box' onSubmit={this.handleSubmit}>
                    <h3>Login!</h3>
                    <div className='login-form'>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder = "Email"
                        />
                        <br/>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder = "Password"
                        />
                        <br/>
                        <input type="submit" value="Login" />
                        {renderErrors(this.props.errors)}
                    </div>
                </form>
            </section>
        )
    }
};

export default LoginForm;