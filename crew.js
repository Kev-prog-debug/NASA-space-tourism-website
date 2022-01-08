const data = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./assets/crew/image-mark-shuttleworth.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./assets/crew/image-victor-glover.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const commander = document.getElementById("commander");
const specialist = document.getElementById("specialist");
const pilot = document.getElementById("pilot");
const engineer = document.getElementById("engineer");
const crews = [commander, specialist, pilot, engineer];

const role = document.querySelector(".crew-role");
const bio = document.querySelector(".crew-bio");
const crewImg = document.querySelector(".crew-img");
const name = document.querySelector(".crew-name");
function changeData(index) {
  role.innerText = data[index].role;
  bio.innerText = data[index].bio;
  name.innerText = data[index].name;
  crewImg.src = data[index].images.png;
}
function activeState(index) {
  crews[index].classList.add("active");
}
crews.forEach((crew, index) => {
  crew.addEventListener("click", () => {
    console.log("clicked");
    changeData(index);
    crews.forEach((el) => el.classList.remove("active"));
    activeState(index);
  });
});
