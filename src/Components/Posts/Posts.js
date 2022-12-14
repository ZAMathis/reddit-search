import React, { useState, useEffect } from "react";
import { redditSearch } from "../../App/RedditAPI";
import Post from "./Post"

const Posts = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const { searchTerm } = props

  useEffect(() => {
    redditSearch(searchTerm).then(result => {
      setIsLoading(false);
      setResults(result);

    });
  }, [searchTerm]);

  const searchedPosts = results.map((item) => {
    return <Post key={item.key} image={item.image} title={item.title} author={item.author}  />
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {searchedPosts.map((component) => {
          return component;
        })}
        {console.log(results)}
      </div>
    );
  }
};

export default Posts;
