import { useState } from "react"

export default function SearchBar(props) {
    const [ term, setTerm ] = useState('')
    
    const handleChange = (e) => {
        setTerm(e.target.value)
        props.setSearchTerm(`r/all/search.json?q=${term}&restrict_sr=on&include_over_18=on&sort=relevance&t=all`)
    }
    
    return (
        <div>
            <h1>test</h1>
            <input value={term} type="text" placeholder="Search here" onChange={handleChange}></input><button>🔎</button>
        </div>
    )
}