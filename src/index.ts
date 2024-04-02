import "./extensions";
import "reflect-metadata";

async function start() {
  console.log("Application starts...");

  console.log("hello_world".toCamelCase());

  console.log("Application ends...");
}

start();
