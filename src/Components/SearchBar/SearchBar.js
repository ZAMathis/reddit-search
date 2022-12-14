import { useState } from "react"

export default function SearchBar(props) {
    const [ term, setTerm ] = useState('')
    
    const handleChange = (e) => {
        e.preventDefault()
        setTerm(e.target.value)
        props.setSearchTerm(`/search/?q=${e.target.value}`)
    }
    
    return (
        <div>
            <h1>test</h1>
            <input value={term} type="text" placeholder="Search here" onChange={handleChange}></input><button>🔎</button>
        </div>
    )
}