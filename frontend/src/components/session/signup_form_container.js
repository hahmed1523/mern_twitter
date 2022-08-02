import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupFormWithNav from './signup_form';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user))
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupFormWithNav);
