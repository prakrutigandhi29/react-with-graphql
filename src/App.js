
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList/>}/>
        <Route strict exact path="/:id" element={<Character/>}/>
        <Route strict exact path="/search" element={<Search/>}/>
      </Routes>
     </div>
  );
}

export default App;
