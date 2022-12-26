console.log("it works");

function getRecipeName() {
    const recipeName = prompt("What is the name of the recipe?");
    document.getElementById("recipe-name").textContent = recipeName;
}

function getIngredients() {
    const numIngredients = prompt("How many ingredients do you need for the recipe?");

    const ingredients = [];

    for (let i = 0; i < numIngredients; i++) {
        ingredients.push(prompt(`What is the ingredient ${ i + 1}?`));
    }

    for (let ingredient of ingredients) {
        const li = document.createElement("li");
        li.textContent = ingredient;
        document.getElementById("ingredients-list").appendChild(li);
    }
}

getRecipeName();
getIngredients();