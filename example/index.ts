import 'dotenv/config'
import { createClient } from '../src/'

const client = createClient({
    headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
    },
})

async function main() {
    const res = await client.query({
        app: [
            { name: 'notaku-website-preview' },
            {
                secrets: { name: true },
                status: true,
            },
        ],
    })
    console.log(res.app)
}

main()
