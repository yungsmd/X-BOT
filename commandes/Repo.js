//"use strict";
//const fetch = require('node-fetch');
const { zokou } = require('../framework/zokou');

// Register the command with its aliases
zokou({
    nomCom: "repo",
    aliases: ["sc", "script"], // Adding aliases
    reaction: "😡",
    nomFichier: __filename
}, async (dest, zk, commandeOptions) => {
    const githubRepo = 'https://api.github.com/repos/Beltahtech/SCENE-MD3';
    const img = 'https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg';
    const { repondre, auteurMessage } = commandeOptions;

    try {
        const response = await fetch(githubRepo);
        const data = await response.json();

        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                update: data.updated_at,
                owner: data.owner.login,
            };

            const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            //const updateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

            const gitdata = `*👋 HELLO ,THIS IS SCENE-MD.*\n\nI'm A Multidevice WhatsApp User Bot created by *Beltah Tech 254 🇰🇪*.\n
[✨] *STARS:* - ${repoInfo.stars}
[🧧] *FORKS:* - ${repoInfo.forks}
[📅] *RELEASE DATE:* - ${releaseDate}
[🗼] *REPO:* - ${data.html_url}
[👨‍💻] *OWNER:* - *Beltah Tech 254 🇰🇪* 
__________________________________
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌`;

            await zk.sendMessage(dest, { 
                text: gitdata,
                contextInfo: {
                    mentionedJid: [auteurMessage],
                    externalAdReply: {
                        title: "😡𝐁𝐄𝐋𝐓𝐀𝐇 𝐓𝐄𝐂𝐇 𝐁𝐎𝐓𝐒😡",
                        body: "𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌",
                        thumbnailUrl: "https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg",
                        sourceUrl: 'https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            });
        } else {
            console.log("Could not fetch data");
            repondre("An error occurred while fetching the repository data.");
        }
    } catch (error) {
        console.error("Error fetching repository data:", error);
        repondre("An error occurred while fetching the repository data.");
    }
});
