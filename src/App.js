import './App.css';
import Main from './components/videoBg';
import Navbar from './components/Navbar';
import Body from './components/personal';
import About from './components/About';
import TouchMe from './components/TouchMe';
function App() {
  return (
    
      <div className="App">
        <div className='delayed-bodya'><Navbar /></div>
        <Main /> 
        <div className='delayed-body'><About /></div>
        <div className="delayed-body"><Body /></div>
        <div className="delayed-body"><TouchMe /></div>
      </div>

  );
}

export default App;
