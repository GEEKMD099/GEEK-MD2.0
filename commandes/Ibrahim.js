"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "ibrahim", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Yes you called me whats up Ok anyway support me by following my channel and subscribing on my youtube channel 🙏 \n\n ' + "║❒ 𝙒𝘼𝘾𝙃𝘼𝙉𝙉𝙀𝙇 https://whatsapp.com/channel/0029VaWQOHsFSAsv3SD3dJ3a";
    let d = '                                        ║❒ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 https://www.youtube.com/@Geekmdgptx';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/328ffcf6308d2e15c953b.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *GEEK-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *GEEK-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/2a5bfafad52a999184daf.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
