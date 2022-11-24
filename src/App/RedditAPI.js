// these functions will not be used, but I want to write them here as an example for later use

export function redditSearch(searchTerm) {
    fetch(`http://www.reddit.com/search.json?q=${searchTerm}`) // fetch the data w search term
        .then(response => response.json()) // take that response and convert it to json
            .then(data => console.log(data.data)) // and then, for now, just take it and log it to the console.
}

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