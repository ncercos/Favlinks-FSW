import Table from './Table'
import Form from './Form'
import {useState} from 'react'

function LinkContainer() {

    const [favLinks, setFavLinks] = useState([]);

    const handleRemove = (index) => {
        const links = [...favLinks]
        links.splice(index, 1)
        setFavLinks(links)
      }
    
      const handleSubmit = (favLink) => {
        const links = [...favLinks]
        links.push(favLink)
        setFavLinks(links)
      }

    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table! </p>
            <Table linkData={favLinks} removeLink={handleRemove}/>
            <h1>Add New</h1>
            <Form submitLink={handleSubmit} />
        </div>
    )

}
export default LinkContainer