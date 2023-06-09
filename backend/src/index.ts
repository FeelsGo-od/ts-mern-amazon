import express, { Request, Response } from 'express'
import { SampleProducts } from './data' 
import cors from 'cors'

const app = express()
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:5173']
    })
)

app.get('/api/products', (req: Request, res: Response) => {
    res.json(SampleProducts)
})

app.get('/api/products/:slug', (req: Request, res: Response) => {
    res.json(SampleProducts.find((x) => x.slug === req.params.slug))
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Served started at http://localhost:${PORT}`)
})