import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'd9e0fa9371de43eabf01976848909e5d'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  const [input, setInput] = useState('');

  const onInputChange = (event) => {
    console.log(event.target.value);
  }

  const onButtonSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        // do something with response
      },
      function(err) {
        // there was an error
      }
  );
  }

  return (
    <div className="App">
      <Particles className='particles' 
              params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={onInputChange} 
        onButtonSubmit={onButtonSubmit}/>
                {/*
                <FaceRecognition /> */}
    </div>
  );
}

export default App;
