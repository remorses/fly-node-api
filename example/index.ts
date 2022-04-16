import 'dotenv/config'
import { createClient } from '../src/'

const client = createClient({
    headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
    },
})

async function addSecrets({ name: appName, secrets }) {
    const { app } = await client.query({
        app: [{ name: appName }, { id: true }],
    })
    const appId = app.id
    await client.mutation({
        setSecrets: [
            { input: { appId, secrets: secrets, replaceAll: true } },
            { app: { name: true }, release: { status: true } },
        ],
    })
}
