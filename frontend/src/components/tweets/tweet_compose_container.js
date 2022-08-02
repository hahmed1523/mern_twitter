import { connect } from 'react-redux';
import { postTweet } from '../../actions/tweet_actions';
import TweetComposeWithNav from './tweet_compose';


const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postTweet: data => dispatch(postTweet(data))
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetComposeWithNav);
