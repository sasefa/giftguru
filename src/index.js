import { disableReactDevTools } from '@fvilers/disable-react-devtools';
if (process.env.NODE_ENV === 'production') disableReactDevTools();
const app = require('../../server/server');  // Importing the configured Express app

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
