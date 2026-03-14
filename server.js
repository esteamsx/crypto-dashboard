const express = require("express");
const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static("public"));

app.get("/status", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
