import './App.css';
import HomePage from './components/HomePage';
import SearchPage from './components/search/SearchPage';

// component App
// father
function App() {
  const titleHome = 'This is homePage';
  const cont = 'this is contentPage';
  return (
    <>
      {/* <HomePage title={titleHome} content={cont} /> */}
      <SearchPage />
    </>
  );
}

export default App;
