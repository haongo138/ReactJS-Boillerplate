import React from "react";
import Images from "../constants/images";

const App = () => {
  return (
    <div>
      <h1>Hello World, my name is Howx</h1>
      <img src={Images.dog} style={styles.image} />
    </div>
  );
};

const styles = {
  image: {
    width: 300,
    height: 300
  }
};

export default App;
