import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
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

function App() {
  let imgData = imageData();
  // code here
  return (
    <>
      <h1>Kalvium Gallary - App.jsx</h1>
      <div className="container">
        {imgData.map((e) => {
          return <img key={e.id} src={e.img} alt="" />;
        })}
      </div>
    </>
  );
}

export default App;
