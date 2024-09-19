// Coding Instrcutions:

/**    
     * Create a CRD application (CRUD without update) using json-server or another API
     * Use fetch and async/await to interact with the API
     * Use a form to create/post new entities
     * Build a way for users to delete entities
     * Include a way to get entities from the API and display them
     * You do NOT need update, but you can add it if you'd like
     * Use Bootstrap and/or CSS to style your project
*/

async function fetchPoems() {
    try {
        const response = await fetch('https://poetrydb.org/random/1');
        const rawJson = await response.text(); // Get the raw JSON as a string
        console.log('Raw JSON:', rawJson);

        const poems = JSON.parse(rawJson); // Parse the raw JSON string into an object
        console.log('Parsed JSON:', poems);

        // Display the poems (assuming you have a function for rendering them)
        // displayPoems(poems);
    } catch (error) {
        console.error('Error fetching poems:', error);
    }
}

fetchPoems();

/** 
 * Based on the PoetryDB Raw JSON, several poems are returned in an array.
 * Title, Author, Lines, and Linecount are the properties of each poem.
 * There is also extra information for poems longer than 100 lines i think.
*/