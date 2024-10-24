const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Handle client connections
io.on("connection", (socket) => {
	console.log("Client connected:", socket.id);

	socket.on("searchShoes", async (filters) => {
		console.log("Searching shoes with filters:", filters);
		const { size, width, color } = filters;

		try {
			// Simulate the scraping and return dummy data for now
			let shoes = await crawlShoes(size, width, color);
			shoes.forEach((shoe) => {
				socket.emit("shoeResult", shoe); // Send each result to the client
			});
		} catch (error) {
			console.error("Error scraping shoes:", error);
			socket.emit("error", "Failed to fetch shoes");
		}
	});

	socket.on("disconnect", () => {
		console.log("Client disconnected:", socket.id);
	});
});

// Web scraping logic (or dummy data for this example)
async function crawlShoes(size, width, color) {
	// Example URL, you can replace it with an actual one for scraping.
	const url = `https://google.com/search?size=${size}&width=${width}&color=${color}`;

	// For now, let's use dummy data to simulate the response
	return [
		{ name: "Chelsea boots", size, width, color, price: "$120", image: "https://example.com/image1.jpg" },
		{ name: "Winter boots", size, width, color, price: "$150", image: "https://example.com/image2.jpg" },
		{ name: "Sneakers", size, width, color, price: "$100", image: "https://example.com/image3.jpg" },
	];
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));