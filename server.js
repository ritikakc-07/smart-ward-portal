const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const announcementsRoute = require('./routes/announcements');
const productsRoute = require('./routes/products');
const budgetRoute = require('./routes/budget');

app.use('/announcements', announcementsRoute);
app.use('/products', productsRoute);
app.use('/budget', budgetRoute);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
