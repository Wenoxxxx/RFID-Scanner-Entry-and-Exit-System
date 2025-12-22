const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const axios = require("axios");

// Change COM port if needed
const port = new SerialPort({
  path: "COM5",        // Windows: COM3 / COM4
  baudRate: 9600
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

parser.on("data", async (data) => {
  const uid = data.trim();

  console.log("📡 RFID UID received:", uid);

  try {
    await axios.post("http://localhost:5000/api/rfid/scan", {
      uid
    });
    console.log("UID sent to backend");
  } catch (err) {
    console.error("❌ Backend error:", err.message);
  }
});

port.on("open", () => {
  console.log("🔌 Arduino serial connection established");
});
