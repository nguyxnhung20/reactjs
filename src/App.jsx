import './App.css';
import TestB from './components/TestB';
import Test from './components/TestA';
import HomePage from './components/HomePage';

// component App
// father
function App() {
  let listUser = ['Dao', 'Pho', 'Piano'];
  const titleHome = 'This is homePage';
  const cont = 'this is contentPage';
  return (
    <>
      {/* flagment */}
      {/* <TestB age="15" name="B" users={listUser} />
      <hr />
      <Test name="A" />
      <hr />
      <Test name="C" />
      <hr />
      <Test /> */}
      <HomePage title={titleHome} content={cont} />
    </>
  );
}

export default App;
