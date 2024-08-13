import React, {Suspense} from 'react';
import './App.css';

const Routersfile = React.lazy(() => import('./routes/Routers'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routersfile />
      </Suspense>
      
    </div>
  );
}

export default App;
