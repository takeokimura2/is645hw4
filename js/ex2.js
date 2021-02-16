const r = Number(prompt("enter the circle radius:"));

circle = {
  radius: r,

  circumference() {
    return 2 * 3.14 * r
  },

  area() {
    return 3.14 * Math.pow(r, 2)
  }

}


console.log(`Its circumference is ${circle.circumference()}`)
console.log(`Its area is ${circle.area()}`); 