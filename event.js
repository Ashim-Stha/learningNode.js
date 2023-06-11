const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  //on listen for event
  console.log("HEllo");
});

customEmitter.on("response", (name, id) => {
  console.log(`hi ${name} and ${id}`);
}); //passsing arguments

customEmitter.emit("response", "ashim", 7); //emit emits event
