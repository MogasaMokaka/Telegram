const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const profilesRouter = require('./routes/profiles');

app.use(express.json());

app.use('/api/profiles', profilesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});