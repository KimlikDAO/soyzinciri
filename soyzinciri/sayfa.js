import Cüzdan from '/birim/cüzdan/birim'
import dom from '/lib/util/dom'

dom.adla("na").onclick = Cüzdan.bağla();
dom.adla("socnc").onclick = Cüzdan.bağla();

const soy = {
  "0x471": {
    "personInfo": {
      first: "Deniz",
      last: "SoyBoy",
    },
    "soyZinciri": {
      anneEvm: "0x111anne",
      babaEvm: "0x222baba",
      profilResmi: "https://www.w3schools.com/howto/img_avatar.png",
    }
  }, "0x111anne": {
    "personInfo": {
      first: "",
      last: "",
    },
    "soyZinciri": {
      anneEvm: "0x333anneanne",
      babaEvm: "0x444annebaba",
      profilResmi: "",
    }
  }, "0x222baba": {
    "personInfo": {
      first: "",
      last: "",
    },
    "soyZinciri": {
      anneEvm: "0x555babaanne",
      babaEvm: "0x666babababa",
      profilResmi: "",
    }
  }, "0x333anneanne": {
    "personInfo": {
      first: "",
      last: "",
    },
    "soyZinciri": {
      profilResmi: "",
    }
  }, "0x444annebaba": {
    "personInfo": {
      first: "",
      last: "",
    },
    "soyZinciri": {
      profilResmi: "",
    }
  }, "0x555babaanne": {
    "personInfo": {
      first: "",
      last: "",
    },
    "soyZinciri": {
      profilResmi: "",
    }
  }, "0x666babababa": {
    "personInfo": {
      first: "",
      last: "",
    },
    "soyZinciri": {
      profilResmi: "",
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