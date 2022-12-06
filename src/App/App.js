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
      <h1>buttons here for testing</h1>
      <button>test reddit search</button>
      <Post title='test' author='yes' />
      <Posts />
      {console.log(testSearchArray)}
    </div>
  );
}

export default App;
