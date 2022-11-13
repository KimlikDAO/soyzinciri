import Tckt from "/birim/tckt/birim.js";
import TCKT from '/lib/ethereum/TCKT';
import dom from '/lib/util/dom';
import Cüzdan from '/birim/cüzdan/birim';
import ipfs from '/lib/ipfs.js';
import { hex, hexten } from '/lib/util/çevir';

dom.adla("kib").onclick = () => {
  Tckt.yüzGöster(true);
}

const galleryDiv = dom.adla("kigal");
const avatarDiv = dom.adla("tca");


// dom.adla("na").onclick = Cüzdan.bağla();
// dom.adla("socnc").onclick = Cüzdan.bağla();

// Cüzdan.bağlanınca(() => {
//   dom.adlaGizle("socnc");
//   dom.adlaGöster("socb");
// })

const handleOf = {
  "0x1C66D49FB1e9782Aa838A2Ec9fa6F346C85096E0": "Qmdede",
  "0xB75511a03D747e128dEEFB97832D4604350Bf18e": "Qmnine"
}

const info = {
  "Qmnine": {
    "personInfo": {
      first: "Hayriye",
      last: "Ankara",
      dateOfBirth: "1921.02.09",
      localIdNumber: "TR6034126892",
      cityOfBirth: "Ankara",
      gender: "F",
      humanID: ""
    }
  },
  "Qmdede": {
    "personInfo": {
      first: "Hayri",
      last: "Ankara",
      dateOfBirth: "1919.02.09",
      localIdNumber: "TR1290543783",
      cityOfBirth: "Ankara",
      gender: "M",
      humanID: ""
    }
  }
}

const address = window.location.pathname.split("/")[2];
TCKT.handleOf(address).then((cidHex) => {
  cidHex = handleOf[address];
  let fileName = cidHex + ".json";
  Tckt.açıkTcktGöster(info[cidHex]);
  let images;
  fetch("/data/" + fileName).then(response => response.json()).then((d) => {
    avatarDiv.firstElementChild.src = `/birim/tckt/img/${d["images"][0]}`;
    avatarDiv.firstElementChild.style.display = "";
    d["images"] = d["images"].slice(1);
    galleryDiv.innerHTML = d["images"].map((f) => '<div class="kifot">' +
      `<img src="/birim/tckt/img/${f}" width=240 height=240 class="imgs"></div>`).join('');
  })

})






