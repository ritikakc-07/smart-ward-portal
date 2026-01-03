const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const wardsRoutes = require('./routes/wards');
const budgetsRoutes = require('./routes/budget');
const allowanceRoutes = require('./routes/socialAllowance');
const documentsRoutes = require('./routes/documents');
const analysisRoutes = require('./routes/analysis');

// Use routes
app.use('/api/wards', wardsRoutes);
app.use('/api/budgets', budgetsRoutes);
app.use('/api/allowance', allowanceRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/analysis', analysisRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));