import './App.css';
import { redditSearch } from './RedditAPI'
import Post from '../Components/Posts/Post';

function App() {

  
  // const searchArray = redditSearch('yea');
  
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

  const postComponents = searchArray.map((item) => {
    return <Post key={item.id} title={item.title} author={item.author}/> 
  })

  return (
    <div className="App">
      <h1>buttons here for testing</h1>
      <button>test reddit search</button>
      <Post title='test' author='yes' />
      {postComponents.map((component) => {
        return component
      })}
      {console.log('Search array: ', searchArray)}
      {console.log('components: ', postComponents)}
    </div>
  );
}

export default App;
