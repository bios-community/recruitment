import Nav from "./components/Nav/Nav"
import Header from './components/Header/Header'
import SecondaryNav from "./components/SecondaryNav/SecondaryNav";
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App container">
      <Nav />
      <Header />
      <SecondaryNav />
      <Main />
    </div>
  );
}

export default App
