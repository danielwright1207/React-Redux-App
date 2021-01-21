import "./App.css";
import React, { useEffect } from "react";
import Characters from "./components/characters";
import { getCharacter } from "./actions/index";
import { connect } from "react-redux";
import Character from "./components/characters";

function App(props) {
  useEffect(() => {
    props.getCharacter();
  }, []);
  console.log(props.character);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Your Rick and Mortey Character</h1>
        <label>
          Character Below
          <br></br>
          {/* <input type="text" placeholder="Enter Character Here"></input> */}
        </label>
        <div className="cardContainer">
          {props.character.map((item) => (
            <Characters key={item.id} {...item} />
          ))}
        </div>
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    character: state.character,
    isFetching: state.isfetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getCharacter })(App);
