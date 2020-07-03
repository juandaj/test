import {cleanConsole, createAll} from './data';
import {exaMple1} from './example-1';
const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', 'Put here your function');

function exaMple2(companies) {
  const companiesExample1 = exaMple1(companies);
  let indicador = true; // indicador de validez de todos los campos
  let count = 0; // cuenta las veces que un campo no es válido

  companiesExample1.forEach((company) => {
    if (company.name[0].toUpperCase() !== company.name[0]) {
      count = count + 1; // para company.name
    }
    company.users.forEach((user) => {
      if (user.firstName !== '' && user.firstName[0].toUpperCase() !== user.firstName[0]) {
        count = count +1; // para user.firstName
      }
      if (user.firstName !== '' && user.firstName[0].toUpperCase() !== user.firstName[0]) {
        count = count +1; // para user.lastName
      }
    });
    console.log(count);
  });

  if (count > 0 ) {
    indicador = false; // En caso de encontrar campos erroneos
    console.log(`${'Los campos presentan '+count+' errores, estado: '}`, indicador);
  } else {
    indicador = true; // cuando los campos son válidos
    console.log(`${'Los campos presentan '+count+' errores, estado: '}`, indicador);
  }
}

exaMple2(companies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
