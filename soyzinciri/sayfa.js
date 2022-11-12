import Cüzdan from '/birim/cüzdan/birim'
import dom from '/lib/util/dom'

dom.adla("na").onclick = Cüzdan.bağla();
dom.adla("socnc").onclick = Cüzdan.bağla();

Cüzdan.bağlanınca(() => {
  dom.adlaGizle("socnc");
  dom.adlaGöster("socb");
})