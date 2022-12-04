import './App.css';
import { redditSearch } from './RedditAPI'
import Post from '../Components/Posts/Post';
import Posts from '../Components/Posts/Posts';

function App() {

  
  
  /*
  // test array
  const searchArray = [
    {
      author: 'author',
      title: 'title'
    },
    {
      author: 'author',
      title: 'title'
    },
    {
      author: 'author',
      title: 'title'
    }
  ]
  */

  return (
    <div className="App">
      <h1>buttons here for testing</h1>
      <button>test reddit search</button>
      <Post title='test' author='yes' />
      <Posts />
    </div>
  );
}

export default App;
