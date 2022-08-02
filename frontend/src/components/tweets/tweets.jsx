import React from 'react';
import TweetBox from './tweet_box';

class Tweets extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTweets();
    }


    render() {

        if (this.props.tweets.length < 1) {
            return (<div>There are no tweets yet!</div>)
        }

        return(
            <section className='tweets-section'>
                <h2>All Tweets</h2>

                <section className='tweets-container'>
                    {this.props.tweets.map(tweet => (
                        <TweetBox key={tweet._id} tweet={tweet} />
                    ))}
                </section>

            </section>
        )
    }
}

export default Tweets;