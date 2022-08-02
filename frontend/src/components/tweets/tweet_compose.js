import React from 'react';
import { useNavigate } from 'react-router-dom';
import { renderErrors } from '../../util/util';


class TweetCompose extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            text: ''
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
        let tweet = {
            text: this.state.text
        };

        this.props.postTweet(tweet)
            .then(res => {
                if (!res.errors) {
                    this.props.navigate('/tweets')
                }});

        this.setState({text: ''});
            
    }

    render() {
        return (
            <section className='post-tweet-container'>
                <form className='post-tweet-box' onSubmit={this.handleSubmit}>
                    <div className='post-form'>
                        <input type="text"
                            value={this.state.text}
                            onChange={this.update('text')}
                            placeholder = "Write your tweet..."
                        />
                        <br/>
                        <input type="submit" value="Post" />
                       {renderErrors(this.props.errors)}
                    </div>
                </form>
            </section>
        )
    }
};

const TweetComposeWithNav = props => {
    const navigate = useNavigate();
     const { currentUser, errors, postTweet } = props;
    return (<TweetCompose navigate={navigate}
                            currentUser={currentUser}
                            errors={errors}
                            postTweet={postTweet}
                        ></TweetCompose>)
}

export default TweetComposeWithNav;