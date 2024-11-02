const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());  // Allow CORS to connect with React client



const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		credentials: true

	}
});
// Socket.IO logic
io.on("connection", (socket) => {
	console.log(`New connection: ${socket.id}`);

	socket.on("searchShoes", async (filters) => {
		console.log("Filters received:", filters);

		// Example of sending some dummy data back to the client
		const shoes = [{ size: filters.size, color: filters.color }];

		// Send shoes data to client
		shoes.forEach(shoe => socket.emit("shoeResult", shoe));
	});

	socket.on("disconnect", () => {
		console.log("Client disconnected");
	});
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));