const images = [
    // "0.jpg", "1.jpg","2.jpg", //풍경
    "3.jpg", "4.jpg", "19.jpg", "20.jpg",//지니
    //"21.jpg", "22.jpg","24.jpg",//엄마
    "5.jpg","6.jpg","7.jpg","8.jpg","11.jpg","15.jpg","17.jpg","19.jpg", //세령 
    //"9.jpg", "12.jpg","13.jpg","18.jpg", "24.jpg","25.jpg","26.jpg","25.jpg", //아인
    //"28.jpg","16.jpg","14.jpg","10.jpg", //친구들

];

const chosenImage = images[Math.floor(Math.random() * images.length)]
const imgContainer = document.getElementById("randomImg")
const bgImg = document.createElement("img") 

bgImg.src = `img/${chosenImage}`;

imgContainer.appendChild(bgImg);