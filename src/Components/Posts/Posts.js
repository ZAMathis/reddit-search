import React from "react";
import { redditSearch } from "../../App/RedditAPI";
import Post from "./Post"

export default class Posts extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            results: []
        }
    }

    componentWillMount() {
        redditSearch(this.props.searchTerm).then(result => {
            this.setState({
                isLoading: false,
                results: result
            })
        })
    }

    render() {

        const { isLoading, results } = this.state;

        const searchedPosts = results.map((item) => {
            return <Post key={item.key} image={item.image} title={item.title} author={item.author}  />
        });

        if (isLoading) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    {searchedPosts.map((component) => {
                        return component
                    })}
                </div>
            )
        } 
    }
}

/**
 * import testSearchArray from "../../App/RedditAPI"
import Post from "./Post"

const searchedPosts = testSearchArray.map((item) => {
    return <Post key={item.key} image={item.image} title={item.title} author={item.author}  />
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
 */