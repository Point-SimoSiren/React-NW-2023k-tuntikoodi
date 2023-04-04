import "./App.css"
import React, {useState, useEffect} from 'react'
import UserService from './Services/User'


const UserList = ({setShowMessage, setMessage, setIsPositive}) => {

    // Komponentin tilassa (state) on mm. customers tieto
    const [users, setUsers] = useState([])
    const [lisäystila, setLisäystila] = useState(false)
    // x tilaa muuttamalla laukaistaan useEffectin ajo haluttaessa reload komentoa kutsumalla
    const [x, reload] = useState(false)

    // UseEffect funktiota kutsutaan alussa kerran. 2. parametrina taulukossa olevat statet jos joku
    //vaihtuu niin silloinkin kutsutaan
    useEffect(() => {
        UserService.getAll()
        .then(data => setUsers(data))
    } , [x])


return(
        <>
                <h2><nobr>Users</nobr>
                    {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h2>

        {users && users.map(u => (
            <p>u.firstName</p>
        )
        )}
        
        </>
    )

}

export default UserList
