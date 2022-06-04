import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let studentName: string  = 'Joy';
let age: number = 55;
let isSmart: boolean = true;
let students: string[] = ['Joy', 'Biden', 'Harris'];
let fees: number[] = [48, 94, 38, 58];

interface Person {
  name: string,
  age: number,
  job?: string,
  employed: string | boolean,
  location?: string | number,
}

const person: Person = {
  name: 'Bill Clinton',
  age: 20,
  employed: true,
}

const handleAddUser = (firstName: string, age: number, address: string) => {
  const total = 50;
  console.log(firstName, age, address);
}


function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
