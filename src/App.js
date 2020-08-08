import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImgGrid from './comps/ImgGrid';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImgGrid />
    </div>
  );
}

export default App;
