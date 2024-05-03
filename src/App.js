import './App.css';
import { useState } from 'react';
import {photos} from './models/photos'
import { symbols } from './models/symbols';
import Button from './components/Button';
import Card from './components/Card';

function App() {

  let [count, setCount] = useState(0)
  let [currentImage, setCurrentImage] = useState(photos[count])

// ---(var)----(functionToUpdate var)----------------default val for var

const changePic = () => {
  setCount((prevCount) => {
    const newCount = prevCount + 1;
    if (newCount >= photos.length) {
      // Reset count to 0 if it goes beyond the array length
      return 0;
    }
    return newCount;
  });
  setCurrentImage(photos[count]);
  // ---> [ [0], [1], [2] ]
};
  //---> Cycle forwared through our array of pics

  const reversePic = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount < 0) {
        // Reset count to the last index if it goes below 0
        return photos.length - 1;
      }
      return newCount;
    });
    setCurrentImage(photos[count]);
  };
  // ----> Cycle BACKWARDS through our array of pics

// --------------------------- [State]



  return (
    <div className="App">
      <h1> City Directory </h1>
      <Card currentImg={currentImage}/>
      {/* --> Sending current image to card to be displayed */}

      <div className="btnContainer">
      <Button action={reversePic} icon={symbols.left}/>
      <Button action={changePic} icon={symbols.right}/>
      </div>



    </div>
  );
}

export default App;
