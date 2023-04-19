import "./App.css"
import React, {useState} from 'react'
import UserService from './Services/User'
import md5 from 'md5'

// Otetaan vastaan propsina setLisäystila ( = staten muutosfunktio) kutsuvalta List komponentilta
const UserAdd = ({setLisäystila, x, reload, setShowMessage, setMessage, setIsPositive}) => {

// Komponentin tilassa on input kenttien sen hetkinen sisältö
const [newFirstName, setNewFirstName] = useState('')
const [newLastName, setNewLastName] = useState('')
const [newUserName, setNewUserName] = useState('')
const [newPassword, setNewPassword] = useState('')
const [newPhone, setNewPhone] = useState('')
const [newAccessLevelId, setNewAccessLevelid] = useState(2)


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
    event.preventDefault()
    var newUser = {
      firstName: newFirstName,
      lastName: newLastName,
      userName: newUserName,
      password: md5(newPassword),
      phone: newPhone,
      accessLevelId: newAccessLevelId
  }
  
  UserService.create(newUser)
  .then(response => {
    if (response.status === 200) {
           
            setMessage(response.data)
            setIsPositive(true)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 4000);

            reload(!x)
            setLisäystila(false)
    }
})
.catch(error => {
    setMessage(error.message)
    setIsPositive(false)
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
     }, 6000)
  })
}


return(
    <div id="addNew">

    <h2>Adding new User</h2>

    <form onSubmit={handleSubmit}>
 
         <div>
             <input type="text" value={newFirstName} placeholder="First name"
                 onChange={({ target }) => setNewFirstName(target.value)} required />
         </div>
         <div>
             <input type="text" value={newLastName} placeholder="Last name"
                 onChange={({ target }) => setNewLastName(target.value)} />
         </div>
         <div>
             <input type="text" value={newUserName} placeholder="Username"
                 onChange={({ target }) => setNewUserName(target.value)} />
         </div>
         <div>
             <input type="text" value={newPassword} placeholder="Password"
                 onChange={({ target }) => setNewPassword(target.value)} />
         </div>
         <div>
             <input type="text" value={newPhone} placeholder="Phone"
                 onChange={({ target }) => setNewPhone(target.value)} />
         </div>
         <div>
             <input type="number" value={newAccessLevelId} placeholder="Access Level"
                 onChange={({ target }) => setNewAccessLevelid(target.value)} />
         </div>
      
      <input type='submit' value='save' />
      <input type='button' value='back' onClick={() => setLisäystila(false)} />
    </form>

 </div>
)

}

export default UserAdd
