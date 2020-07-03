import {cleanConsole, createAll} from './data';
const companies = createAll();
const hasCar = true; // Establece que solo los user con car = true se guarden
cleanConsole(2, companies);
console.log('---- EXAMPLE 2 --- ', 'Solution');

function exaMple2(hasCar, companies) {
  console.log(hasCar, companies);
  let index = 0;
  companies.forEach((company) => {// recorre company
    const userCars = [];
    company.users.forEach((user) => {// recorre users para encontrar los usuarios con car = true
      if (hasCar == user.car) {
        // si car = false, se elimina el usuario
        userCars.push(user);
      }
    });
    companies[index].users = userCars; // se reasignan los cars = true
    index = index +1;
  });
  console.log(companies);
  return companies;
}

exaMple2(hasCar, companies);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et le
// booléen "hasCar". Pour chaque "company" vous devez garder uniquement les
// "users" dont la valeur de l'attribut "car" est égal au paramètre de la
// fonction "hasCar" et l'attribut "usersLength" doit renseigner le nombre de
// "users" correspondant au paramètre "hasCar".
