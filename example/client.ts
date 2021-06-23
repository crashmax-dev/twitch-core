import path from 'path'
import { TwitchCommandClient, TwitchChatMessage } from '../src'

import dotenv from 'dotenv'
dotenv.config()

const client = new TwitchCommandClient({
  username: process.env.BOT_USERNAME,
  oauth: process.env.OAUTH_KEY,
  channels: [process.env.CHANNEL],
  verboseLogging: false,
  botOwners: ['vs_code'],
  serverPort: 9999
})

client.on('message', (msg: TwitchChatMessage) => { })

client.provider.set(
  path.join(__dirname, 'config/commands.json'),
  path.join(__dirname, 'config/config.json')
)

client.registerDefaultCommands()

client.registerCommandsIn(path.join(__dirname, 'commands'))

client.connect()