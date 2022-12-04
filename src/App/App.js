import './App.css';
import { redditSearch } from './RedditAPI'
import Post from '../Components/Posts/Post';

function App() {
  return (
    <div className="App">
      {redditSearch('yes')}
      <h1>buttons here for testing</h1>
      <button onClick={redditSearch('apples')}>test reddit search</button>
      <Post />
    </div>
  );
}

export default App;
