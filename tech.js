const data = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "./assets/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "./assets/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const _1 = document.getElementById("1");
const _2 = document.getElementById("2");
const _3 = document.getElementById("3");
const techs = [_1, _2, _3];

const description = document.querySelector(".tech-description");
const techImg = document.querySelector(".tech-img");
const name = document.querySelector(".tech-name");
function changeData(index) {
  description.innerText = data[index].description;
  name.innerText = data[index].name;
  techImg.src = data[index].images.landscape;
}
function activeState(index) {
  techs[index].classList.add("active");
}
techs.forEach((tech, index) => {
  tech.addEventListener("click", () => {
    console.log("clicked");
    changeData(index);
    techs.forEach((el) => el.classList.remove("active"));
    activeState(index);
  });
});
