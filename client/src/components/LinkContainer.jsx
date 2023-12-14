import Table from './Table'
import Form from './Form'
import {useState, useEffect} from 'react'
import { da } from 'date-fns/locale';

function LinkContainer() {

    const [favLinks, setFavLinks] = useState([]);

    const handleRemove = (index) => {
        const links = [...favLinks]
        links.splice(index, 1)
        setFavLinks(links)
        deleteLink(index + 1)
      }
    
      const handleSubmit = (favLink) => {
        const links = [...favLinks]
        links.push(favLink)
        setFavLinks(links)
        addLink(favLink)
      }

      const getLinks = async () => {
        try {
            const response = await fetch('/api/links')
            const data = await response.json()
            setFavLinks(data)
            console.log('Adding data:')
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    const addLink = async (favLink) => {
      try {
        const response = await fetch('/api/links', {
          method: 'POST',
          body: JSON.stringify(favLink),
          headers: {"Content-type": "application/json"}
        });
      } catch (error) {
        console.error(error);
      }
    };

    const deleteLink = async (id) => {
      console.log(id)
      try {
        await fetch(`/api/links/${id}`, {
          method: 'DELETE',
          body: JSON.stringify({id}),
          headers: {"Content-type": "application/json"}
        });
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      getLinks()
    }, [])

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