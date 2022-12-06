import './Post.css';

export default function Post(props) {
    return (
        <div className="post-container">
            <h2 className='post-header'>{props.title}</h2>
            <img className='post-image' src={props.image} alt={props.title}/>
            <h3 className='post-author'>{props.author}</h3>
        </div>
    )
}