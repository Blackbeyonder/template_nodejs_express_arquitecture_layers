// app.js

const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const serverConfig = require('./config/server');
const PORT =  serverConfig.port;
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
