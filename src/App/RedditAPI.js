// these functions will not be used, but I want to write them here as an example for later use

export function redditSearch() {
    const output = [];

    fetch(`http://www.reddit.com/r/popular.json`) // fetch the data w search term
        .then(response => response.json()) // take that response and convert it to json
            .then(data => {
                console.log(data.data.children)
                for (let i in data.data.children) {
                    // console.log(data.data.children[i].data);
                    output.push({
                        key : i,
                        author : data.data.children[i].data.author,
                        title : data.data.children[i].data.title
                    })
                }
            }) // and then, for now, just take it and log it to the console.
    return output;
}

const testSearchArray = redditSearch();
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