import './App.css';
import { redditSearch } from './RedditAPI'
import Post from '../Components/Posts/Post';

function App() {
  const redditTest = redditSearch('yea');

  return (
    <div className="App">
      {redditTest.forEach(item => {
         /* <Post title={index.item.title} author={index.item.author}/> */
         console.log(item)
      })}
      <h1>buttons here for testing</h1>
      <button>test reddit search</button>
      <Post title='test' author='yes' />
    </div>
  );
}

export default App;
