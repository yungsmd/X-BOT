const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const Taphere = more.repeat(4001)

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

    moment.tz.setDefault("Africa/Nairobi");

// Créer une date et une heure en EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `

 *👋 Hello* : *_${nomAuteurMessage}_*
 
┏▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
▮ 『𝗠𝗔𝗜𝗡』
▯  🌐 *Work Type* : 【${mode} mode】
▮  🔑 *Starter* : [${s.PREFIXE}]
▯  📜 Plugins : [${cm.length}0] 
▮  ⌚️ *Time* :  ${temps}
▯  🖥️ *System* : [ Whiskeysockets ]
▮  🌌 *Theme* : [ Ultra 5G speed ]
▯  █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
└▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
┏────────────────⊷
┃ 『𝗦𝗧𝗢𝗥𝗔𝗚𝗘』
┃  📼 *Used Ram* : ${format(os.totalmem() - os.freemem())}
┃  📼 *Total Ram* :${format(os.totalmem())}
└─────═━┈┈━═─────⊷
╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┇ 『𝗖𝗢𝗡𝗧』
┇  🕵 *Dev* : 𝐁𝐞𝐥𝐭𝐚𝐡 𝐓𝐞𝐜𝐡 𝟐𝟓𝟒 🇰🇪
┇  📱 *User* : ${s.OWNER_NAME}
└▪︎─═━┈━═─ ═▪︎─═━┈━═─⊷
╒✦•··············•••••••••··············•··•✦
┇ 『𝗕𝗢𝗧 𝗦𝗧𝗔𝗧𝗨𝗦』
┇   ─┉┈◈◉◈┈┉
┇  📡 *Platform* : ${os.platform}
┇  🎲 *Status* : Ultimate speed Bot
┇  🗨️ *Series* : [Version 4 lite]
╘✦•·············•••••••••··················•✦\n${readmore}`;
 
    let menuMsg=` 

▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
 
◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢
𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒
`;

    for (const cat in coms) {
        menuMsg += `*╭────❒⁠⁠⁠⁠* *${cat}* *❒⁠⁠⁠⁠*`;
        for (const cmd of coms[cat]) {
            menuMsg += `  
*┋* ${cmd}`;
        }
        menuMsg += `
*┕───────────────────❒* \n`
    }

    menuMsg += `
    ➤ 𝐁𝐨𝐭 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫
> 𝐀 𝐩𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 𝐁𝐞𝐥𝐭𝐚𝐡 𝐓𝐞𝐜𝐡 𝐓𝐞𝐚𝐦
> 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐁𝐞𝐥𝐭𝐚𝐡 𝐊𝐞 𝐅𝐫𝐨𝐦 𝐊𝐞𝐧𝐲𝐚 

𝗧𝗛𝗔𝗡𝗞 𝗬𝗢𝗨 𝗙𝗢𝗥 𝗟𝗢𝗩𝗜𝗡𝗚 𝗦𝗖𝗘𝗡𝗘-𝗠�⁠⁠⁠⁠
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*Ibrahim-tech*" }, { quoted: ms });
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
