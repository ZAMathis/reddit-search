import './App.css';
import { redditSearch } from './RedditAPI'

function App() {
  return (
    <div className="App">
      <h1>buttons here for testing</h1>
      <button onClick={redditSearch('apples')}>test reddit search</button>
    </div>
  );
}

export default App;
