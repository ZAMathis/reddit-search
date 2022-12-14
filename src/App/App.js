import './App.css';
import Posts from '../Components/Posts/Posts';
import SearchBar from '../Components/SearchBar/SearchBar';
import { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('r/popular.json')

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm} />
      <Posts searchTerm={searchTerm} />
    </div>
  );
}