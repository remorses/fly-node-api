## Example

**Still unpublished, work in progress**

```ts
import 'dotenv/config'
import { createClient } from 'fly-node-api'

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
```
