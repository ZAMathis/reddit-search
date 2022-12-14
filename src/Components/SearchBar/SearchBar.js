import { useState } from "react"

export default function SearchBar(props) {
    const [ term, setTerm ] = useState('')
    const { setSearchTerm } = props
    
    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setSearchTerm(`r/all/search.json?q=${term}&restrict_sr=on&include_over_18=off&sort=relevance&t=all`)
        
        if(term === '') {
            setSearchTerm('r/popular.json')
        }
    }
    
    return (
        <div>
            <h1>test</h1>
            <form onSubmit={handleSubmit}>
                <input value={term} type="text" placeholder="Search here" onChange={handleChange}></input><button>🔎</button>
            </form>
        </div>
    )
}