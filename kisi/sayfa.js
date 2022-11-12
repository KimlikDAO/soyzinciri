import TCKT from "/birim/tckt/birim.js"
import dom from '/lib/util/dom';

dom.adla("kib").onclick = () => {
    TCKT.yüzGöster(true);
} 

const grandpaImages = ["grandpa.png", "grandpa1.jpeg", "grandpa2.webp", "grandpa3.jpeg", "grandpa4.webp"];
const galleryDiv = dom.adla("kigal");
const avatarDiv = dom.adla("tca");


for(let i = 1; i < grandpaImages.length; i++) {
    let galleryElement = galleryDiv.children[0].cloneNode(true);
    galleryElement.children[0].src = `/birim/tckt/img/${grandpaImages[i]}`;
    galleryElement.style.display = "";  
    galleryDiv.appendChild(galleryElement);
}


avatarDiv.children[0].src = `/birim/tckt/img/${grandpaImages[0]}`;
avatarDiv.children[0].style.display = "";
