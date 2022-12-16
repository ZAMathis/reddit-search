import './App.css';
import Posts from '../Components/Posts/Posts';
import SearchBar from '../Components/SearchBar/SearchBar';
import NavBar from '../Components/NavBar/NavBar';
import { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('r/popular.json')

  return (
    <div className="App">
      <NavBar className='navbar' />
      <SearchBar className="searchbar" setSearchTerm={setSearchTerm} />
      <Posts className="posts" searchTerm={searchTerm} />
    </div>
  );
}