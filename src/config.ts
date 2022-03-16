import { Intents } from 'discord.js';

export default {
  prefix: 'racc ',
  token: process.env.DISCORD_TOKEN,
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
}
