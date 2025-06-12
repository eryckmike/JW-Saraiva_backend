import 'dotenv/config'       // se precisar de .env
import express from 'express'
import cors from 'cors'

import userRoutes from './src/routes/userRoutes.js';
import motoristaRoutes from './src/routes/motoristaRoutes.js';
import veiculoRoutes from './src/routes/veiculoRoutes.js';
import viagemRoutes from './src/routes/viagemRoutes.js';



const app = express()
app.use(cors())
app.use(express.json())


app.use('/users', userRoutes);
console.log('Rota /users registrada.');
app.use('/motoristas', motoristaRoutes);
console.log('Rota /motoristas registrada.');
app.use('/veiculos', veiculoRoutes);
console.log('Rota /veiculos registrada.');
app.use('/viagens', viagemRoutes);
console.log('Rota /viagens registrada.');

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
)
