// these functions will not be used, but I want to write them here as an example for later use

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



const testSearchArray = redditSearch('/r/popular.json');
export default testSearchArray
// this is how the object that is returned with search goes:
/*
    data (display in console as an object)
        data
            children (these are the actual posts)
                by default there are 24, each also and object
                but they are also ordered by ID which makes things A LOT easier
                    data
                        sooo many different children from awards, to whitelist status
*/