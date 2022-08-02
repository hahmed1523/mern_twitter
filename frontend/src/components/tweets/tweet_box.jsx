import React from 'react';

class TweetBox extends React.Component {
    render() {
        return (
            <div className='tweet-box'>
                <h3>{this.props.tweet.text}</h3>
            </div>
        );
    }
};

export default TweetBox;