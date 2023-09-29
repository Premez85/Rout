
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Router</h1>
          <ul className='app-menu'>
              <li className='app-item'><a href='/'>Home</a></li>
              <li className='app-item'><a href='/people'>people</a></li>
              <li className='app-item'><a href='/profile'>profile</a></li>
              <li className='app-item'><a href='/some'>some</a></li>
          </ul>
      </header>
        <main className='app-main'>
            Main
        </main>
        <footer>
            Footer
        </footer>
    </div>
  );
}

export default App;
