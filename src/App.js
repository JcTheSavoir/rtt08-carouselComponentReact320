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
  if (count === 6) {
    setCount(count = 0)
  } else {
    setCount(count += 1)
  }
    setCurrentImage(photos[count])
    console.log("Current Image: ", currentImage);
    console.log("Current Count: ", count);
    // ---> [ [0], [1], [2] ]
  }
  //---> Cycle forwared through our array of pics

  const reversePic =() => {
    if (count === 0) {
      setCount(count = 6)
    } else {
    setCount(count -= 1)
    }
    console.log("Current Count: ", count);
    setCurrentImage(photos[count])
    console.log("Current Image: ", currentImage);
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
