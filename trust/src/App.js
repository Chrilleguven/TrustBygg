import React, { Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Hem from './Components/Hem';
import Galleri from './Components/Galleri';
import Tjanster from './Components/Tjanster';
import Kontakt from './Components/Kontakt';
import OmOss from './Components/OmOss';

function App() {
  return (
    <Router>
      <Fragment>
        <section>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<Hem />} />
            <Route exact path='/tjänster' element={<Tjanster />} />
            <Route exact path='/kontakt' element={<Kontakt />} />
            <Route exact path='/galleri' element={<Galleri />} />
            <Route exact path='/omoss' element={<OmOss />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
