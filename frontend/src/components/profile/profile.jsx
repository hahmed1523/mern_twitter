import React from 'react';
import TweetBox from '../tweets/tweet_box';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserTweets(this.props.currentUser.id);
    }


    render() {

        if (this.props.tweets.length < 1) {
            return (<div>User does not have any tweets yet!</div>)
        }

        return(
            <section className='tweets-section'>
                <h2>All of This User's Tweets</h2>

                <section className='tweets-container'>
                    {this.props.tweets.map(tweet => (
                        <TweetBox key={tweet._id} tweet={tweet} />
                    ))}
                </section>

            </section>
        )
    }
}

export default Profile;