import express from "express";
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    data: {
      message: 'Risso'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});