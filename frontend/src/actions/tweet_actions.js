import * as APIUtil from '../util/tweet_api_util';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_USER_TWEETS = "RECEIVE_USER_TWEETS";
export const RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";
export const RECEIVE_TWEET_ERRORS = "RECEIVE_TWEET_ERRORS"; 


export const receiveTweets = tweets => ({
    type: RECEIVE_TWEETS,
    tweets
});

export const receiveUserTweets = tweets => ({
    type: RECEIVE_USER_TWEETS,
    tweets
});

export const receiveNewTweet = tweet => ({
    type: RECEIVE_NEW_TWEET,
    tweet
});

export const receiveErrors = errors => ({
    type: RECEIVE_TWEET_ERRORS,
    errors
});


export const fetchTweets = () => dispatch => (
    APIUtil.getTweets()
        .then(tweets => dispatch(receiveTweets(tweets)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const fetchUserTweets = id => dispatch => (
    APIUtil.getUserTweets(id)
        .then(tweets => dispatch(receiveUserTweets(tweets)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);


export const postTweet = data => dispatch => (
    APIUtil.writeTweet(data)
        .then(tweet => dispatch(receiveNewTweet(tweet)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);