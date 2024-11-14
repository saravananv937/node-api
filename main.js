import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.json({msg: 'Hello guys!'});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});