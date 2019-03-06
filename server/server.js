const express = require('express');
const port = process.env.PORT || 4001;
const app = express();

app.use(express.static('dist'))

app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
});
