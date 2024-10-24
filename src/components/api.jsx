import React, { useState } from "react";
import axios from "axios";

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const axios = require("axios");
const cheerio = require("cheerio");

const App = express();
const server = http.createServer(app);
const io = new Server(server);

//Listening for client connections via Socket.IO
io.on("connection", (socket) => {
  console.log("CLient connected", socket.id);

  //Listening for search queries from the client
  socket.on("searchShoes", async (filters) => {
    console.log("Searching shoes with filters:", filters);
    const { brand, size, width, color } = filters;

    try {
      //Call the web scraping function and send progressive results
      let shoes = await crawlShoes(brand, size, width, color, socket);
    } catch (error) {
      console.error("Error	scraping	shoes:", error);
      socket.emit("error, Failed to fetch shoes");
    }
  });

  //Clean up when a client disconnects
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

//Scraping function that sends real-time updates to the client
async function crawlShoes(brand, size, width, color, socket) {
  const url = ``;

  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  //Send each shoe result in real-time as they parsed
  $(".shoe-item").each((i, element) => {
    let name = $(element).find(".shoe-name").text();
    let image = $(element).find("img").attr("src");
    let price = $(element).find(".shoe-price").text();

    const shoe = { name, image, price };

    //	Send	each	shoe	to	the	client
    socket.emit("shoeResult", shoe);
  });
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server	running	on	port	${PORT}`));
