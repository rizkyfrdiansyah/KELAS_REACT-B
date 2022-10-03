import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

// Components
import {
  // Profile, TableProfile
  // ListItem,
  ClickButton,
  FormSection,
} from "./components";

function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center p-3">
        <h1>Belajar React</h1>
        <p>lorem ipsum is a dummy text</p>
        <hr />
      </div>

      {/* {
        profiles.map(profile => {
          const {id, name, hobby} = profile
          return (
            <Profile key={id} name={name} hobby={hobby}></Profile>
          )
        })
      } */}

      {/* <ListItem></ListItem> */}
      {/* <ClickButton></ClickButton> */}
      <FormSection></FormSection>
    </div>
  );
}

export default App;

/**
 * React ada 2 jenis component:
 * 1. Class based Component
 * 2. Function based Component
 */
