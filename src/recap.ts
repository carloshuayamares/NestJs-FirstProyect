class Persona {
  constructor(private age: number, private name: string) {}
  getSummary() {
    return `My name is: ${this.name} and i've ${this.age} years old.`;
  }
}
const carlos = new Persona(24, 'Carlos Huayamares');
carlos.getSummary();
