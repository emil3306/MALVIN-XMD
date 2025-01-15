85wBBR5B#LylfzvS2xI8nzKK9lWqsoM9IgOPj8VQ4iCEp7gp4VaEconst fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///=================When editing, do not accidentally delete anything !!MAIN-CONFIG=================================
SESSION_ID: process.env.SESSION_ID || "85wBBR5B#LylfzvS2xI8nzKK9lWqsoM9IgOPj8VQ4iCEp7gp4VaE",  // 📌 𝗚𝗲𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗶𝗱 𝗶𝗻 𝗣𝗮𝗶𝗿 𝗦𝗶𝘁𝗲 📌
MODE: process.env.MODE || "public",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
BOT_NAME: process.env.BOT_NAME || "𝙼𝙰𝙻𝚅𝙸𝙽 𝙼𝙳 v2",
AUTO_VOICE: process.env.AUTO_VOICE || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
AUTO_STICKER: process.env.AUTO_STICKER || "false", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
AUTO_REPLY: process.env.AUTO_REPLY || "false", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
ANTI_LINK: process.env.ANTI_LINK || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
ANTI_BAD: process.env.ANTI_BAD || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
AUTO_REACT: process.env.AUTO_REACT || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
///==================Do not change anything below=========================
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/7pg2gp.jpg", //do not change alive img url
ALIVE_MSG: process.env.ALIVE_MSG || "ʜɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ ᴀᴍ ᴍᴀʟᴠɪɴ xᴍᴅ ᴛʜᴇ ʙᴇsᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ🚀", // change alive msg if you wish

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

  
  
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/7pg2gp.jpg",
    
};
