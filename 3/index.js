/* Challenge 1: Favorite Foods
- Topic: Object Destructuring
1. Edit the faveFoods object so that it contains 
your favorite foods.
2. Destructure the faveFoods object into three consts: 
breakfast, lunch, and supper.
3. Fetch the meals <section> from the DOM.
4. Set the innerHTML content of the meals <section> to a paragraph
that states what your favorite foods are for breakfast, lunch, and supper.
Use a template literal to construct the string.

E.g.
For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝, 
and for supper I want usually want pizza 🍕.
*/

const faveFoods = {
    breakfast: 'chocolate croissant with capuccino 🥐',
    lunch: 'viet phoo soup and rise with fish 🍝',
    supper: 'papaya salad 🍕'
}

let meals = document.getElementById("meals");
console.log(meals);
meals.innerHTML = `<ul>
<li>For breakfast, I only like ${faveFoods.breakfast}</li>
<li>For lunch, I love ${faveFoods.lunch}</li>
<li>For supper I want usually ${faveFoods.supper}</li>
</ul>`;