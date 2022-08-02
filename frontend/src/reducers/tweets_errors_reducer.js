import { RECEIVE_TWEET_ERRORS } from "../actions/tweet_actions";

const _nullErrors = [];

const TweetsErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TWEET_ERRORS:
            return action.errors;
        default:
            return _nullErrors;
    }
};

export default TweetsErrorsReducer;