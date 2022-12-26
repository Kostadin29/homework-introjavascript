console.log("it works");

const firstName = ["Bob", "Jill"];
const lastName = ["Gregory", "Wurtz"];
console.log(firstName, lastName);

function getFullNames(firstNames, lastNames) {
  const fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    const firstName = firstNames[i];
    const lastName = lastNames[i];

    const fullName = `${i + 1}. ${firstName} ${lastName}`;
    
    fullNames.push(fullName);
  }

  return fullNames;
}


const firstNames = ['Bob', 'Jill'];
const lastNames = ['Gregory', 'Wurtz'];
console.log(getFullNames(firstNames, lastNames));