import Cüzdan from '/birim/cüzdan/birim'
import dom from '/lib/util/dom'

dom.adla("na").onclick = Cüzdan.bağla();
dom.adla("socnc").onclick = Cüzdan.bağla();

const aile = [{
  "0x471": {
    anneEvm: "0x111anne",
    babaEvm: "0x222baba",
  }
}, {
  "0x111anne": {
    anneEvm: "0x333anneanne",
    babaEvm: "0x444annebaba",
  }
}, {
  "0x222baba": {
    anneEvm: "0x555babaanne",
    babaEvm: " 0x666babababa"
  }
}]

Cüzdan.bağlanınca(() => {
  dom.adlaGizle("socnc");
  dom.adlaGöster("socb");
  dom.adla("sok").onclick = () => window.location.href = `/kisi/${Cüzdan.adres()}`;
  dom.adla("soa").onclick = () => {
    window.location.href = `/kisi/${aile[0]["0x471"]["anneEvm"]}`;
    console.log(window.location.href)
    console.log(aile)
  }
})