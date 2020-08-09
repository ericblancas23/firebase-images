import React, { useState } from 'react';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImgGrid from './comps/ImgGrid';
import './App.css';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App" 
      onClick={(e) => {
        if(selectedImage !== null) {
          setSelectedImage(null)
        }
    }}>
      <Title />
      <UploadForm />
      <ImgGrid setSelectedImage={setSelectedImage} />
      {
        selectedImage !== null ?
        <Modal selectedImage={selectedImage} /> : null
      }
    </div>
  );
}

export default App;
