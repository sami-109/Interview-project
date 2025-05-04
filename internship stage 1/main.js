// Select the search input, the container for article sections, and the element to display result count
const input = document.querySelector('.js-search-input');
const contentSection = document.querySelector('.js-content-sections');
const result = document.querySelector('.posts-number');

/**
 * Highlights all occurrences of the search key inside the given text.
 * It wraps matched terms in <mark> tags for visual highlighting.
 * @param {string} text - The original text (e.g., article title, date, or body)
 * @param {string} key - The search keyword entered by the user
 * @returns {string} - The text with matched terms wrapped in <mark>
 */
function highlight(text, key){
    const regex = new RegExp(`(${key})`, 'gi'); // Create a case-insensitive global regex from the search key
    return text.replace(regex, '<mark>$1</mark>'); // Wrap matches in <mark>
}

// Listen for input events on the search field
input.addEventListener('input', (e) => {
    const searchKey = e.target.value.toLowerCase(); // Get the search input and convert to lowercase
    console.log(searchKey); // Log search key for debugging

    // Filter articles where title, date, or body includes the search key
    const filteredArticles = articles.filter(article => {
        return article.title.toLowerCase().includes(searchKey) ||
               article.date.toLowerCase().includes(searchKey) ||
               article.body.toLowerCase().includes(searchKey);
    });

    let sectionHTML = ''; // Will store the HTML to be injected

    // Loop over filtered articles and build HTML with highlighted matches
    filteredArticles.forEach(article => {
        const highlightedTitle = highlight(article.title, searchKey);
        const highlightedDate = highlight(article.date, searchKey);
        const highlightedBody = highlight(article.body, searchKey);

        // Append each article block with highlighted content
        sectionHTML += `
            <div class="section">
                <div class="title">${highlightedTitle}</div>
                <div class="date">${highlightedDate}</div>
                <div class="body">${highlightedBody}</div>
            </div>
        `;
    });

    // Inject the filtered and highlighted content into the page
    contentSection.innerHTML = sectionHTML;

    // Update the number of posts found
    result.innerHTML = `${filteredArticles.length} posts<span class="found"> were found</span>`;

    console.log(filteredArticles); // Optional debug log
});

