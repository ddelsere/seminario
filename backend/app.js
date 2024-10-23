const express = require('express');
const app = express();

const validationRoutes = require('./src/routes/validation.routes');

const cors = require("cors");
const PORT = process.env.PORT || 3000;
app.use(cors("*")) // This Cross Origin Handling
app.use(express.urlencoded({ extended: true, limit: "200mb" }));
// This is required to handle urlencoded data
app.use(express.json({ limit: "200mb" })); 

app.use('/validate', validationRoutes);
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    // validationService.validateUrl("");
});

module.exports = app;