import TCKT from "/birim/tckt/birim.js"
import dom from '/lib/util/dom';

dom.adla("kib").onclick = () => {
  TCKT.yüzGöster(true);
}

const grandpaImages = ["grandpa.png", "grandpa1.jpeg", "grandpa2.webp", "grandpa3.jpeg", "grandpa4.webp"];
const grannyImages = ["grandma3.jpeg", "grandma.jpeg", "grandma2.jpeg", "grandma1.jpeg", "grandma4.jpeg"];

const galleryDiv = dom.adla("kigal");
const avatarDiv = dom.adla("tca");

const people = { "dede": grandpaImages, "nine": grannyImages };
const personName = window.location.pathname.split("/")[2];

let person = personName in people ? people[personName] : people["dede"];

avatarDiv.firstElementChild.src = `/birim/tckt/img/${person[0]}`;
avatarDiv.firstElementChild.style.display = "";

person = person.slice(1);
galleryDiv.innerHTML = person.map((f) => '<div class="kifot">' +
  `<img src="/birim/tckt/img/${f}" width=240 height=240 class="deneme"></div>`).join('');
