import React, { Component } from "react";
import axios from "axios";
import FavdigimonCard from "./FavdigimonCard";
import UpdateForm from "./updateForm";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favList: [],
      showForm: false,
      choosenName: "",
      choosenimg: "",
      choosenlevel: "",
      choosenlevelId: "",
    };
  }

  componentDidMount = async () => {
    await axios.get(`${process.env.REACT_APP_API_LINK}/get-fav`).then((res) =>
      this.setState({
        favList: res.data,
      })
    );
  };

  deleteFav = async (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_LINK}/delete-fav/${id}`)
      .then((res) =>
        this.setState({
          favList: res.data,
        })
      );
  };

  showForm = async (obj) => {
    await this.setState({
      showForm: true,
      choosenName: obj.name,
      choosenimg: obj.img,
      choosenlevel: obj.level,
      choosenlevelId: obj._id,
    });
  };

  handeleChange = async (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handeleSubmit = async (e) => {
    e.preventDefault();

    const updateObj = {
      name: this.state.choosenName,
      img: this.state.choosenimg,
      level: this.state.choosenlevel,
    };
    await axios
      .put(
        `${process.env.REACT_APP_API_LINK}/update-fav/${this.state.choosenlevelId}`,
        updateObj
      )
      .then((res) =>
        this.setState({
          favList: res.data,
          showForm:false
        })
      );
  };

  render() {
    const favListDigimon = this.state.favList.map((favDigi, idx) => (
      <FavdigimonCard
        showForm={this.showForm}
        deleteFav={this.deleteFav}
        key={idx}
        digimon={favDigi}
      />
    ));
    return (
      <div style={{width:"90%",margin:"auto"}}>
        <h1>Favorite</h1>
        {this.state.showForm && (
          <UpdateForm
            handeleSubmit={this.handeleSubmit}
            handeleChange={this.handeleChange}
            digimonState={this.state}
          />
        )}
        {favListDigimon}
      </div>
    );
  }
}

export default Favorite;
