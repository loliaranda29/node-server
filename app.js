const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


const tareas = [
  { id: 1, description: 'Hacer las compras', completed: false },
  { id: 2, description: 'Preparar el desayuno', completed: true },
  { id: 3, description: 'Estudiar y practicar', completed: false },
];


app.get('/tareas', (req, res) => {
  res.json(tareas);
});


app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
