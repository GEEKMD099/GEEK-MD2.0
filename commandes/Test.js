"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "test", reaction: "⏳", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝘽𝙊𝙏 𝙄𝙎 𝙊𝙉𝙇𝙄𝙉𝙀 \n\n ' + "║❒ 𝙏𝙔𝙋𝙀 𝙈𝙀𝙉𝙐 𝙏𝙊 𝙎𝙀𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎";
    let d = '                                            ║❒ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 https://www.youtube.com/@Geekmdgptx';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/4e4ab172dd19ec9fbe44e.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
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
