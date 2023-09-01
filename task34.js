/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then
 use a for loop to print the name of each pizza.*/
var pizzas = ["BBQ", "Beef", "Cheese Lover"];
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
/*• Modify your for loop to print a sentence using the name of the pizza instead of printing just the
 name of the pizza. For each pizza you should have one line of output containing a simple statement like
 I like pepperoni pizza.*/
for (var i = 0; i < pizzas.length; i++)
    if (pizzas[i] == "Beef") {
        console.log("I like Beef pizza.");
    }
    else if (pizzas[i] == "BBQ") {
        console.log("I also like BBQ pizza");
    }
    else {
        console.log("i don't like cheese lover pizza");
    }
/*Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output
should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such
as I really love pizza!*/
console.log("I like pizza too much, BBQ is my favorite...but eating too much can make you fatty...by the way it's expensive");
