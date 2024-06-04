import React, { useState, useEffect } from 'react';
import './App.css';
import scroll from './common/scroll';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 

import Intro from './pages/intro';
import Profile from './pages/profile';
import Project from './pages/project';
import Outro from './pages/outro';
import Admin from './pages/admin';
import TabsExample from './common/navigation'

function App() {


  useEffect(() => {
    scroll();
    return () => {
    };
  }, []);



  return (
    <div className="full">
      <div className="navi">
        <TabsExample />
      </div>
      <Intro></Intro>
      <Profile></Profile>
      <Project></Project>
      <Outro></Outro>
      <Admin></Admin> 
    </div>
  );
}

export default App;