import "./App.css"
import React, {useState, useEffect} from 'react'
import UserService from './Services/User'
import 'bootstrap/dist/css/bootstrap.min.css'


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

        <table className="table table-dark">
            <thead>
            <tr>
                <th>Username</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
        {users && users.map(u => (
            <tr>
                <td>{u.userName}</td>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.phone}</td>
            </tr>
          
        )
        )}
            </tbody>
        </table>
        </>
    )

}

export default UserList
