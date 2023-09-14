const express = require('express')
const server = express();
const port = 3000;

const Routes = require('./routes');

server.use(express.json());
server.use('/clients', Routes.ClientRoutes);
server.use('/skills', Routes.SkillRoutes);


server.listen(port, () =>{
    console.log (`API escuchando en puerto ${port}.`);
});