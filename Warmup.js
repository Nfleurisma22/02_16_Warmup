var cars = ['Toyota', 'Audi', 'Bentely'];
cars.push('Jeep', 'BMW', 'Ducati', 'Delorean', 'Chevy');
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift('Jeep');
console.log(cars);
cars.shift();
console.log(cars);


var car = {};
car.model = 'F500';
car['mode'] = 'stick shift';
car = {year : "1969"};
console.log(car);
car.year = "1972";
console.log(car);
