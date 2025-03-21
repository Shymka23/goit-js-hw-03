function slugify(title) {
  const lowerCaseTitle = title.toLowerCase();
  const splitCase = lowerCaseTitle.split(' ');
  const slug = splitCase.join('-');
  return slug;
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks" ordered 10 droids worth 5000 credits!"
