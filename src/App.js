import Movielist from './Movielist';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <Movielist />
      </div>
    </MovieProvider>
  );
}

export default App;
