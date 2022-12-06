import './App.css';
import Post from '../Components/Posts/Post';
import Posts from '../Components/Posts/Posts';
import testSearchArray from './RedditAPI';

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
      <h1>WE ARE IN THE TESTING PHASE 👍</h1>
      <Posts />
      {console.log(testSearchArray)}
    </div>
  );
}

export default App;
