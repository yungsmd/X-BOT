const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Africa/Nairobi');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    let infoMsg =  `
╭─────═[ 𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 ]═─────⋆
├━━━━━━━━━━━━━━━━┈─⋆
│┠─═[ *MAIN INFO* ]
│╭───────────────···
┴│▸ *Bot Mode* : 【${mode} mode】
⬡│▸ *Owner* : ${s.OWNER_NAME}
⬡│▸ *Prefix* : [${s.PREFIXE}]
⬡│▸ *Plugins* : [ 245 ] 
⬡│▸ *Time* :  ${temps}
⬡│▸ *Today* : [ ${date} ]
`;
let menuMsg =  `⬡│▸ *Bot User* *${nomAuteurMessage}*
⬡│▸ *Time Zone* : [ Africa/Nairobi ] 
┬╰────────────────···
├━━━━━━━━━━━━━━━━┈─⋆
│┠─═[ *SUPPORT LINKS* ]
┬╭───────────────···
⬡ *FOLLOW OUR CHANNEL*
│▸ whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F
⬡ *JOIN OUR GROUP*
│▸ chat.whatsapp.com/CQvUnqaDK4fBjgMXvFEAsI
⬡ *TELEGRAM LINK*
│▸ t.me/beltah254 
┬╰────────────────···
╘✦•·············•••••••••···············•••••••••··················•✦\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙᴇʟᴛᴀʜ ʜᴀᴄᴋɪɴɢ ᴛᴇᴀᴍ🇰🇪\n\n${readmore}
𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒
`;
    
    for (const cat in coms) {
        menuMsg += `
╭═[ *${cat}* ]═────···\n┴╭───────────··· `;
        for (const cmd of coms[cat]) {
            menuMsg += `          
│✧⪼ *${cmd}* `    
        } 
        menuMsg +=`
┬╰───────────···\n╰────────────────···
`
    }
  
       menuMsg += `

𝗧𝗛𝗔𝗡𝗞 𝗬𝗢𝗨 𝗙𝗢𝗥 𝗟𝗢𝗩𝗜𝗡𝗚 𝗦𝗖𝗘𝗡𝗘-𝗠𝗗
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
