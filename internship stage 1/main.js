let sectionsHTML = '';
const searchInput = document.querySelector('.js-search-input');

//loops over the articles array and puts the content in the structure below
articles.forEach((section) => {
    sectionsHTML += `
        <div class="section">
            <div class="title">${section.title}</div>
            <div class="date">${section.date}</div>
            <div class="body">${section.body}</div>
        </div>
        `;
})

//display result 
document.querySelector('.js-content-sections')
.innerHTML = sectionsHTML;

//I created this function to count the number of occurences of the searched value and return the result.
const countOccurrences = function(array, value){
    return array.reduce((count, element) => {
        return (value === element ? count += 1 : count)
    },0);
}

//This wouldn't work, I tried multiple different ideas, but I just can't figure out the proper syntax to write it.
//My final plan was to bascially search using letters, which loops over the array displaying the results.
//As in if the condition is true and the value is found in the array articles, display that value, and add the class mark to each value,
//which highlights them. And if false, do not display the post, could also toggle hide class so posts won't appear, 
// and whether or not the value is found, execute the function to display total amount of occurrences.
searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    let posts = document.querySelector('.js-content-sections');
    posts.forEach(post => {
        if(post.textContent.toLowerCase().includes(value)){
            post.style.display = 'block';
            value.classList.toggle('mark');
        } else{
            post.style.display = 'none';
        }
        return document.querySelector('.posts-number').innerHTML = countOccurrences(articles, value);
        })
    })
    
