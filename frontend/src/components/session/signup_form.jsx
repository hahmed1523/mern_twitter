import React from 'react';
import { useNavigate } from 'react-router-dom';
import { renderErrors } from '../../util/util';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            handle: '',
            password: '',
            password2: ''
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
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user)
            .then(res => {
                if (!res.errors) {
                    this.props.navigate('/login')
                }
            });
            
    }

    render() {
        return (
            <section className='login-form-container'>
                <form className='login-form-box' onSubmit={this.handleSubmit}>
                    <h3>Signup!</h3>
                    <div className='login-form'>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder = "Email"
                        />
                        <br/>

                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                            placeholder = "Handle"
                        />
                        <br/>

                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder = "Password"
                        />
                        <br/>

                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder = "Password"
                        />
                        <br/>
                        <input type="submit" value="Signup" />
                       {renderErrors(this.props.errors)}
                    </div>
                </form>
            </section>
        )
    }
};

const SignupFormWithNav = props => {
    const navigate = useNavigate();
    const { errors, signup } = props;
    return (<SignupForm navigate={navigate}
                        errors={props.errors}
                        signup={props.signup}
                        signedIn={props.signedIn}
                        ></SignupForm>)
}

export default SignupFormWithNav;