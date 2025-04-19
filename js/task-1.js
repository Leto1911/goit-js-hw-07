const link = document.querySelectorAll(`#categories .item`);
console.log(`Number of categories: ${link.length}`);

link.forEach(item => {
  const tittle1 = item.querySelector(`h2`).textContent;
  const count = item.querySelectorAll(`ul li`);
  const itemCount = count.length;
  console.log(`Category: ${tittle1}`);
  console.log(`Elements: ${itemCount}`);
});
