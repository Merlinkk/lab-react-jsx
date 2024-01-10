import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };

  // code here
  render() {
    let imgData = this.imageData();
    return (
      <>
        <h1>Kalvium Gallary - AppClass.jsx</h1>
        <div className="container">
          {imgData.map((e) => (
            <img key={e.id} src={e.img} alt="" />
          ))}
        </div>
      </>
    );
  }
}
