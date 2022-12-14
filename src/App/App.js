import './App.css';
import Posts from '../Components/Posts/Posts';
import SearchBar from '../Components/SearchBar/SearchBar';
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
      <SearchBar />
      <Posts />
      {console.log(testSearchArray)}
    </div>
  );
}

export default App;
