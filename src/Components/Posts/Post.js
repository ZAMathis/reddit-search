import './Post.css';

export default function Post(props) {
    const { title, image, subreddit, url, selfText, upvotes, downvotes } = props;

    // until I can get ALL images working, this is a function to test
    // whether or not there is an image that can be displayed momentarily
    const checkIfImage = (img) => {
        const imgLink = img.split('').slice(0, 17).join('');
        // 0 - 16: https://i.redd.it
        console.log(imgLink, title)

        if(imgLink === 'https://i.redd.it') {
            return true
        } else {
            return false
        }
    }

    return (
        <div className="post-container">
            <a href={url}><h2 className='post-header'>{title}</h2></a>
            <h4 className='post-subreddit' style={{ margin: '10px auto' }}>{subreddit}</h4>
            <hr className='post-divider' />
            {checkIfImage(image) ? <img className='post-image' src={image} alt={title}/> : selfText || <img className='post-image' src='https://play-lh.googleusercontent.com/nlptFyxNsb8J0g8ZLux6016kunduV4jCxIrOJ7EEy-IobSN1RCDXAJ6DTGP81z7rr5Zq=w600-h300-pc0xffffff-pd' alt={title}/>}
            <hr className='post-divider' />
            <div className='upvotes-and-link'>
                {upvotes > downvotes ? <p className='post-votes'>▲ {upvotes}</p> : <p className='post-votes'>▼ {downvotes}</p>}
                <a className='post-link' href={url}>🗨</a>
            </div>
        </div>
    )
}