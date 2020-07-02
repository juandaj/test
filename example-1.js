import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', 'first exercise solution');

function exaMple1(companies) {
  let index = 0;
  companies.forEach((company) => {
    // console.log(company.name[0].toUpperCase() + company.name.slice(1), index);
    companies[index].name = company.name[0].toUpperCase() + company.name.slice(1);
    let index2 = 0;
    company.users.forEach((user) => {
      if (user.firstName === undefined ) {
        companies[index].users[index2].firstName = '';
      } else {
        companies[index].
            users[index2].
            firstName = companies[index].
                users[index2].firstName[0].toUpperCase() + companies[index].
                users[index2].firstName.slice(1);
      }
      if (user.lastName === undefined) {
        companies[index].users[index2].lastName = '';
      } else {
        companies[index].
            users[index2].
            lastName = companies[index].
                users[index2].lastName[0].toUpperCase() + companies[index].
                users[index2].lastName.slice(1);
      }
      // companies[index].users[index2]
      // user.firstName
      index2 = index2 +1;
    });
    companies[index].users.sort(function(a, b) {
      if (a.firstName > b.firstName) {
        return 1;
      }
      if (a.firstName < b.firstName) {
        return -1;
      }
      return 0;
    });
    index = index +1;
  });

  // companies.users.sort();

  companies.sort(function(a, b) {
    if (a.users.length < b.users.length) {
      return 1;
    }
    if (a.users.length > b.users.length) {
      return -1;
    }
    return 0;
  });
  console.log(companies);
  /* companies.forEach(company => {
    company.name.
    console.log( company.name[0].toUpperCase() + company.name.slice(1));
  });
  console.log('hola mundo'); */
};

exaMple1(companies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
