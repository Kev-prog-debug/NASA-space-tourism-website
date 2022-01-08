const data = [
  {
    name: "Moon",
    images: {
      png: "./assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "./assets/destination/image-mars.png",
      webp: "./assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
      webp: "./assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
      webp: "./assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");
const planets = [moon, mars, europa, titan];

const title = document.querySelector(".planet-name");
const description = document.querySelector(".planet-description");
const distance = document.querySelector(".planet-distance");
const travelTime = document.querySelector(".travel-time");
const planetImg = document.querySelector(".planet-img");
function changeData(index) {
  title.innerText = data[index].name;
  description.innerText = data[index].description;
  distance.innerText = data[index].distance;
  travelTime.innerText = data[index].travel;
  planetImg.src = data[index].images.png;
}
function activeState(index) {
  console.log("active state");
  planets[index].classList.add("active");
}
planets.forEach((planet, index) => {
  planet.addEventListener("click", () => {
    changeData(index);
    planets.forEach((el) => el.classList.remove("active"));
    activeState(index);
  });
});

// moon.addEventListener('click',() => {
//     changeData(1);
// })
// moon.addEventListener("click", () => {
//   title.innerText = data[0].name;
//   description.innerText = data[0].description;
//   distance.innerText = data[0].distance;
//   travelTime.innerText = data[0].travel;
//   planetImg.innerText = data[3].images.png;
// });
// mars.addEventListener("click", () => {
//   title.innerText = data[1].name;
//   description.innerText = data[1].description;
//   distance.innerText = data[1].distance;
//   travelTime.innerText = data[1].travel;
//   planetImg.innerText = data[3].images.png;
// });
// europa.addEventListener("click", () => {
//   title.innerText = data[2].name;
//   description.innerText = data[2].description;
//   distance.innerText = data[2].distance;
//   travelTime.innerText = data[2].travel;
//   planetImg.innerText = data[3].images.png;
// });
// titan.addEventListener("click", () => {
//   title.innerText = data[3].name;
//   description.innerText = data[3].description;
//   distance.innerText = data[3].distance;
//   travelTime.innerText = data[3].travel;
//   planetImg.innerText = data[3].images.png;
// });
