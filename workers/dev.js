import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { parse } from 'toml';
import { createServer } from 'vite';

const birimOku = (dosyaAdı) => {
  let stiller = [];
  let sayfa = "";
  try {
    sayfa = readFileSync(dosyaAdı, 'utf-8');
    stiller.push("/" + dosyaAdı.slice(0, -5) + ".css");
  } catch (e) {
    sayfa = readFileSync(dosyaAdı.slice(0, -11) + '.html', 'utf-8');
    stiller.push("/" + dosyaAdı.slice(0, -11) + '.css');
  }

  sayfa = sayfa.replace(/<birim:([^\s]+)[^\/]+\/>/g, (_, birimAdı) => {
    let [birim, altStiller] = birimOku(`birim/${birimAdı.trim()}/birim.html`);
    stiller.push(...altStiller);
    return birim;
  });
  sayfa = sayfa.replace(/<altbirim:([^\s]+)[^\/]+\/>/g, (_, birimAdı) => {
    let [birim, altStiller] = birimOku(`${path.dirname(dosyaAdı)}/${birimAdı.trim()}/birim.html`);
    stiller.push(...altStiller);
    return birim;
  });
  return [sayfa, stiller];
}

/** @param {string} dosyaAdı */
const sayfaOku = (dosyaAdı) => {
  let [sayfa, stiller] = birimOku(dosyaAdı);
  stiller = stiller
    .map((stil) => `  <link href="${stil}" rel="stylesheet" type="text/css" />\n`)
    .join('');
  return sayfa.replace("</head>", stiller + "</head>");
}

createServer({
  server: { middlewareMode: true },
  appType: 'custom'
}).then((vite) => {
  const app = express()
  app.use(vite.middlewares)
  app.use("/", (req, res, next) => {
    if (req.path == '/') {
      res.redirect('/soyzinciri');
    } else {
      let fileName = req.path.startsWith("/kisi")
        ? "kisi/sayfa.html"
        : "soyzinciri/sayfa.html";
      let sayfa = sayfaOku(fileName);
      vite.transformIndexHtml(req.path, sayfa).then((sayfa) => {
        res.status(200)
          .set({ 'Content-type': 'text/html;charset=utf-8' })
          .end(sayfa);
      }).catch((e) => {
        vite.ssrFixStacktrace(e)
        next(e)
      })
    }
  })
  const cfConfig = parse(readFileSync('wrangler.toml'));
  const port = cfConfig.dev.port;
  console.log(`Ana sayfaya şu adreste çalışıyor: http://localhost:${port}`)
  app.listen(port);
})
