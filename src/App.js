import React, { useState } from "react";
import LightBox from "./LightBox";
import "./App.css";

const images = [
  {
    id: 1,
    name: "mountains",
    nature: true,
    image: "https://www.w3schools.com/w3images/mountains.jpg"
  },
  {
    id: 2,
    name: "lights",
    nature: true,
    image: "https://www.w3schools.com/w3images/lights.jpg"
  },
  {
    id: 3,
    name: "forest",
    nature: true,
    image: "https://www.w3schools.com/w3images/nature.jpg"
  },
  {
    id: 4,
    name: "retro",
    cars: true,
    image: "https://www.w3schools.com/w3images/cars1.jpg"
  },
  {
    id: 5,
    name: "fast",
    cars: true,
    image: "https://www.w3schools.com/w3images/cars2.jpg"
  },
  {
    id: 6,
    name: "classic",
    cars: true,
    image: "https://www.w3schools.com/w3images/cars3.jpg"
  },
  {
    id: 7,
    name: "girl",
    people: true,
    image: "https://www.w3schools.com/w3images/people1.jpg"
  },
  {
    id: 8,
    name: "man",
    people: true,
    image: "https://www.w3schools.com/w3images/people2.jpg"
  },
  {
    id: 9,
    name: "woman",
    people: true,
    image: "https://www.w3schools.com/w3images/people3.jpg"
  }
];

const FILTER_DEFS = {
  NATURE: image => image.nature,
  CARS: image => image.cars,
  PEOPLE: image => image.people,
  NONE: image => image
};









//   const imagery = [
//     {
//       image: "http://placeimg.com/640/360/people",
//       caption: "Cool person huh?"
//     },
//     {
//       image: "http://placeimg.com/640/360/nature",
//       caption: "Cool nature huh?"
//     },
//     {
//       image: "http://placeimg.com/640/360/arch",
//       caption: "Cool architecture huh?"
//     },
//     {
//       image: "https://placeimg.com/640/360/tech",
//       caption: "Cool tech for sure"
//     },
//     {
//       image: "https://placeimg.com/640/360/animals",
//       caption: "Awe....animal"
//     }
//   ];




function App() {
    const [state, setState] = useState({
    list: images,
    filterKey: "NONE"
  });

  const { list, filterKey } = state;
  const filteredList = list.filter(FILTER_DEFS[filterKey]);

   const [modal, setModal] = useState(false);

   
  return (
    <div>
    <button
        type="button"
        onClick={() => setState({ ...state, filterKey: "NONE" })}
      >
         all
      </button>
      <button
        type="button"
        onClick={() => setState({ ...state, filterKey: "NATURE" })}
      >
        nature
      </button>

      <button
        type="button"
        onClick={() => setState({ ...state, filterKey: "CARS" })}
      >
        cars
      </button>

      <button
        type="button"
        onClick={() => setState({ ...state, filterKey: "PEOPLE" })}
      >
        people
      </button>

      
      {filteredList.map(image => (
        <div key={image.id}>
          <img src={image.image} alt="" />
          <h4>{image.name}</h4>
        </div>
      ))}
      <hr />

    <div>
      <LightBox images={images} showModal={modal} toggleModal={setModal} />
      </div>
    </div>
  );
}

export default App;
