export class Person {
  constructor({ name, eye_color, hair_color }) {
    // Adapter Pattern
    this.name = name
    this.eyeColor = eye_color
    this.hairColor = hair_color
  }

  get Template() {
    return `
    <div class="card bg-dark mb-3 elevation-2 p-3 text-white">
      <h4>${this.name}</h4>
    </div>
    `
  }
}