import React from 'react'

const Intro = () => {


let name: string = "Sakar";

// let age: number = 12;
let age: number | string;
let isStudent: boolean = true;
let hobbies: string[];

// age = "chauhan";
// age = 24;


//! Not a recommended method
// let kuchBhi: any;
// kuchBhi = false;
// kuchBhi = "false";
// kuchBhi = 43;

// let kuchBhi: unknown;
// kuchBhi = false;
// kuchBhi = "false";
// kuchBhi = 43;

//! Not a recommended method
// let person: Object;

// type Person = {
//   name:string,
//   age?:number
// }

interface Person {
  name:string,
  age?:number
}

let person: Person = {
  name:"Sakar"
};

let people: Person[];


//! Not a recommended method
// let printName: Function;
let printName: (name: string)=>void;

// function printName(name: string){
//   console.log('name :>> ', name);
// }

// printName("Sakar")

// type X={
//   a: string,
//   b: number
// }

// type Y=X & {
//   c: string,
//   d: number
// }

interface X{
  a: string,
  b: number
}

interface Y extends X  {
  c: string,
  d: number
}

let y: Y = {
  c:"C",
  d:12,
  a:"A",
  b:2
}

  return (
    <div>Intro</div>
  )
}

export default Intro