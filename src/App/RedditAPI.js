export async function redditSearch(searchTerm) {
    const output = []; // create an empty array to store the results

    try {
        // fetch the data with the search term and convert the response to JSON
        const response = await fetch(`http://www.reddit.com/${searchTerm}`, {
            method: 'get',
            mode: 'cors',
            headers: {
                
            },
        });
        
        const data = await response.json();

        data.data.children.forEach(item => { // iterate over the children in the response
            if (item.data.url) { // check if the item has a URL
                output.push({
                    key: item.data.id, // add the id as the key
                    author: item.data.author,
                    title: item.data.title,
                    image: item.data.url
                });
            }
        });
    } catch (err) {
        console.error(err); // log any errors
    }

    return output; // return the output array
}