import { useState } from "react"

function Form(props) {
    const [name, setName] = useState("")
    const [url, setURL] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleURLChange = (event) => {
        setURL(event.target.value)
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            props.submitLink({name, url})
        }}>
            <label for="linkName">Link Name:</label>
            <input type="text" id="linkName" name="linkName" onChange={handleNameChange}/>
            <br />
            <br />
            <label for="URL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" onChange={handleURLChange}/>
            <br/>
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default Form
