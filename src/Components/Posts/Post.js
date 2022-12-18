import './Post.css';

export default function Post(props) {
    const { title, image, author, subreddit, url, selfText, upvotes, downvotes } = props;

    return (
        <div className="post-container">
            <a href={url}><h2 className='post-header'>{title}</h2></a>
            <h3>{subreddit}</h3>
            <hr />
            <img className='post-image' src={image} alt={title}/>
            <h3 className='post-author'>{author}</h3>
        </div>
    )
}