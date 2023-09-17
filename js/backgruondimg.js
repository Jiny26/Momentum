const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)]
const imgContainer = document.getElementById("randomImg")
const bgImg = document.createElement("img") 

bgImg.src = `img/${chosenImage}`;

imgContainer.appendChild(bgImg);