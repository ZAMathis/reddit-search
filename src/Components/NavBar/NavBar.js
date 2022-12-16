import './NavBar.css'

export default function NavBar(props) {
    const { setSearchTerm } = props

    const handleClick = () => {
        setSearchTerm('r/popular.json')
    }
    
    return (
        <div className='nav-container'>
            <img className='nav-logo' src="https://i.imgur.com/PzODFCG.png" alt="logo" onClick={handleClick} />
        </div>
    )
}