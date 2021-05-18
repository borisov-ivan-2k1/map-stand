import React from 'react';
import { MapPage } from './pages/MapPage/MapPage';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      {/* ROUTING */}
      <Switch>
        <Route path='/' >
          <MapPage />
        </Route>

      </Switch>


      <ToastContainer />
    </div>
  );
}

export default App;
