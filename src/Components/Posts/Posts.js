import testSearchArray from "../../App/RedditAPI"
import Post from "./Post"

const searchedPosts = testSearchArray.map((item) => {
    return <Post item={item.key} image={item.image} title={item.title} author={item.author}  />
});

export default function Posts() {
    return (
       <div>
        {searchedPosts.map((component) => {
            return component
        })}
       </div> 
    )
}