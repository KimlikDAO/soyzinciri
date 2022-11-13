import Cüzdan from '/birim/cüzdan/birim'
import dom from '/lib/util/dom'
// import {images} from './data/'

dom.adla("na").onclick = Cüzdan.bağla();
dom.adla("socnc").onclick = Cüzdan.bağla();

const soy = {
  "0x471": {
    "personInfo": {
      first: "Kaan",
      last: "Ankara",
    },
    "soyZinciri": {
      anneEvm: "0x111anne",
      babaEvm: "0x222baba",
      profilResmi: "https://www.w3schools.com/howto/img_avatar.png",
    }
  }, "0x111anne": {
    "personInfo": {
      first: "Fatma",
      last: "Ankara",
    },
    "soyZinciri": {
      anneEvm: "0x333anneanne",
      babaEvm: "0x444annebaba",
      profilResmi: "https://pickaface.net/gallery/avatar/unr_karen_171017_1443_9ujb42.png",
    }
  }, "0x222baba": {
    "personInfo": {
      first: "Mehmet",
      last: "Ankara",
    },
    "soyZinciri": {
      anneEvm: "0xB75511a03D747e128dEEFB97832D4604350Bf18e",
      babaEvm: "0x1C66D49FB1e9782Aa838A2Ec9fa6F346C85096E0",
      profilResmi: "https://tr.rbxcdn.com/24164d57321dda1de4a727f1af07a965/420/420/Image/Png",
    }
  }, "0x333anneanne": {
    "personInfo": {
      first: "Elif",
      last: "Demir",
    },
    "soyZinciri": {
      profilResmi: "https://cdn4.iconfinder.com/data/icons/cool-avatars-2/190/00-36-512.png",
    }
  }, "0x444annebaba": {
    "personInfo": {
      first: "Murat",
      last: "Demir",
    },
    "soyZinciri": {
      profilResmi: "https://www.clipartmax.com/png/middle/337-3375762_old-man-with-glasses-icon-clipart-computer-icons-avatar-old-man-icons.png",
    }
  }, "0xB75511a03D747e128dEEFB97832D4604350Bf18e": {
    "personInfo": {
      first: "Hayriye",
      last: "Ankara",
    },
    "soyZinciri": {
      profilResmi: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/grandma_elderly_nanny_avatar-512.png",
    }
  }, "0x1C66D49FB1e9782Aa838A2Ec9fa6F346C85096E0": {
    "personInfo": {
      first: "Hayri",
      last: "Ankara",
    },
    "soyZinciri": {
      profilResmi: "https://media.istockphoto.com/vectors/vector-portrait-of-old-man-vector-id498421354?s=612x612",
    }
  }
}

const htmleDagıt = (adres, id) => {
  const element = dom.adla(id);
  element.children[0].children[0].src = soy[adres]["soyZinciri"]["profilResmi"];
  element.children[1].innerText = soy[adres]["personInfo"]["first"] + " " + soy[adres]["personInfo"]["last"];
  element.onclick = () => window.location.href = `kisi/${adres}`;
}
console.log(soy)
Cüzdan.bağlanınca(() => {
  dom.adlaGizle("socnc");
  dom.adlaGöster("socb");
  const anneEvmAdres = soy["0x471"]["soyZinciri"]["anneEvm"];
  const babaEvmAdres = soy["0x471"]["soyZinciri"]["babaEvm"];
  const anneAnneEvmAdres = soy[anneEvmAdres]["soyZinciri"]["anneEvm"];
  const anneBabaEvmAdres = soy[anneEvmAdres]["soyZinciri"]["babaEvm"];
  const babaAnneEvmAdres = soy[babaEvmAdres]["soyZinciri"]["anneEvm"];
  const babaBabaEvmAdres = soy[babaEvmAdres]["soyZinciri"]["babaEvm"];
  const map = [
    ["0x471", "sok"],
    [anneEvmAdres, "soa"],
    [babaEvmAdres, "sob"],
    [anneAnneEvmAdres, "soaa"],
    [anneBabaEvmAdres, "soab"],
    [babaAnneEvmAdres, "soba"],
    [babaBabaEvmAdres, "sobb"]
  ]
  map.map(((element) => htmleDagıt(element[0], element[1])));
})