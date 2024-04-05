import "reflect-metadata";
import "./extensions";
import { fizzBuzz } from "./exercises/fizzbuzz";

async function start() {
  console.log("Application starts...");

  console.log("hello_world".toCamelCase());

  for (let i = 0; i < 100; i++) {
    console.log(fizzBuzz(i));
  }

  console.log("Application ends...");
}

start();
