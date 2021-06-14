import React, { Component } from "react";
import axios from "axios";
import DigimonCard from "./DigimonCard";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDigimons: [],
    };
  }

  componentDidMount = async () => {
    await axios.get(`${process.env.REACT_APP_API_LINK}/get-data`).then((res) =>
      this.setState({
        allDigimons: res.data,
      })
    );
  };

  addTOfav = async (obj) => {
    await axios.post(`${process.env.REACT_APP_API_LINK}/add-data`, obj);
  };

  render() {
    console.log(this.state.allDigimons);
    const digimonList = this.state.allDigimons.map((digimon, idx) => (
      <DigimonCard addTOfav={this.addTOfav} key={idx} digimon={digimon} />
    ));

    return (
      <div style={{width:"90%",margin:"auto"}} >
        <h1>Main</h1>

        {digimonList}
      </div>
    );
  }
}

export default Main;
