const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categories =>{
    const headings = categories.querySelector('h2');
    const elements = categories.querySelectorAll('ul li');
    
    console.log(`Category: ${headings.textContent}`);
    console.log(`Elements: ${elements.length}`);

})

