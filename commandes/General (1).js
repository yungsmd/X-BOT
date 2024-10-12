const { zokou } = require("../framework/zokou");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set")
const fs = require("fs");





/*king({ nomCom: "helpers", categorie: "General", reaction: "🤍 " }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "Belta from Kenya", numero: "254114141192" }, 
      { nom: "Kijana Ya Atwoli from Kenya", numero: "254768666135" },
      { nom: "ZARK From Uganda", numero: "256762086532" },
      { nom: "Ben Jason From Nigeria", numero: "2347039100348" },
      { nom: "Kebby From Tanzania", numero: "255675514698" },
      { nom: "Loner From Nigeria", numero: "2349152597171" },
        { nom: "Lil Benjamin From Kenya", numero: "254769702239" },
        { nom: "KingPin From Kenya", numero: "254743437665" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "👋 *Hello Thanks for CHOOSING FLASH-MD* \nThe following numbers are for ambassadors of *FLASH-MD*, \nLook for one in your country and ask for help! \n*KEEP USING FLASH-MD*💥 🤩:\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});*/


zokou({ nomCom: "test", categorie: "General", reaction: "😡" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic, auteurMessage } = commandeOptions;


const data = './commandes/test.mp3';

    const dooc = {
        audio: {
          url: data
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "what?",

        contextInfo: {
          mentionedJid: [auteurMessage],
          externalAdReply: {
          title: "𝐁𝐄𝐋𝐓𝐀𝐇-𝐌𝐃 𝐈𝐒 𝐀𝐂𝐓𝐈𝐕𝐄",
          body: "𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌",
          thumbnailUrl: "https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg",
          sourceUrl: 'https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };


await zk.sendMessage(dest, dooc, {quoted: ms});

});



zokou({ nomCom: "owner", categorie: "General", reaction: "💥" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.OWNER_NUMBER}

------ *OTHER SUDOS* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.OWNER_NUMBER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.OWNER_NUMBER + ':+' + conf.OWNER_NUMBER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});
zokou({
  nomCom: "developer",
  aliases: ["creator", "dev", "beltah"], // Adding aliases
  categorie: "General",
  reaction: "😉"
}, async (dest, zk, commandeOptions) => {
  const { ms, mybotpic } = commandeOptions;

  const devs = [
    { nom: "ʙᴇʟᴛᴀʜ.ᴋᴇ", numero: "254114141192" },
    { nom: "ᴀᴜᴅɪ.ʙᴇʟᴛᴀʜ", numero: "254737681758" },
    // Add more developers here with their name and number
  ];

  let message = "Hello 👋\n *Welcome to SCENE-MD!*\n\n*✦━━◆CREATOR INFO◆━━✦*\n\n\n *◇NAME: _Beltah Tech 254 🇰🇪_*\n*◇AGE: 21*\n*◇LOCATION: _On Earth_*\n*◇BELIEVER: YES ✅*\n*◇FRIENDLY: YES ✅*\n*◇EGOISTIC: _YEEES ✅_*\n*◇FAV TEAM: _MANCHESTER UNITED_*\n*◇INSTAGRAM: https://instagram.com/beltah.ke*\n*◇Twitter: https://twitter.com/beltah254*\n\n______________________________\n\n*💙THANK YOU FOR LOVING BELTAH-MD*\n\n\n_The following are my contacts_:\n:";
  
  for (const dev of devs) {
    message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
  }

  const lien = mybotpic();
  
  // Check if the link is a video or gif
  if (lien.match(/\.(mp4|gif)$/i)) {
    try {
      zk.sendMessage(dest, { video: { url: lien }, caption: message }, { quoted: ms });
    } catch (e) {
      console.log("🥵🥵 Menu error: " + e);
      repondre("🥵🥵 Menu error: " + e);
    }
  } 
  // Check if the link is an image
  else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
      zk.sendMessage(dest, { image: { url: lien }, caption: message }, { quoted: ms });
    } catch (e) {
      console.log("🥵🥵 Menu error: " + e);
      repondre("🥵🥵 Menu error: " + e);
    }
  } 
  // Handle link error
  else {
    repondre(lien);
    repondre("link error");
  }
});


zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
    
  repondre("look on pm sir ")
  await zk.sendMessage(auteurMessage,{text : `https://wa.me/254114141192`},{quoted :ms})

})
 
