import "./App.css"
import React, {useState} from 'react'
import CustomerService from './Services/Customer'

// Otetaan vastaan propsina setMuokkaustila ( = staten muutosfunktio) kutsuvalta Customer.jsx komponentilta
const CustomerEdit = ({muokattavaAsiakas, setMuokkaustila, x, reload, setShowMessage, setMessage, setIsPositive}) => {

// Komponentin tilassa on input kenttien sen hetkinen sisältö
const [newCustomerId, setNewCustomerId] = useState(muokattavaAsiakas.customerId)
const [newCompanyName, setNewCompanyName] = useState(muokattavaAsiakas.companyName)
const [newContactName, setNewContactName] = useState(muokattavaAsiakas.contactName)
const [newContactTitle, setNewContactTitle] = useState(muokattavaAsiakas.contactTitle)

const [newCountry, setNewCountry] = useState(muokattavaAsiakas.country)
const [newAddress, setNewAddress] = useState(muokattavaAsiakas.address)
const [newCity, setNewCity] = useState(muokattavaAsiakas.city)

const [newPostalCode, setNewPostalCode] = useState(muokattavaAsiakas.postalCode)
const [newPhone, setNewPhone] = useState(muokattavaAsiakas.phone)
const [newFax, setNewFax] = useState(muokattavaAsiakas.fax)


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
    event.preventDefault()
    var editedCustomer = {
      customerId: muokattavaAsiakas.customerId, // <---- Otetaan suoraan propsina tulleesta asiakkaasta, ei muuteta
      companyName: newCompanyName, // Kaikki muut tiedot tulee statesta ja siis input kentistä
      contactName: newContactName,
      contactTitle: newContactTitle,
      country: newCountry,
      address: newAddress,
      city: newCity,
      postalCode: newPostalCode,
      phone: newPhone,
      fax: newFax
  }

// debug
 console.log(editedCustomer)
  
  CustomerService.update(editedCustomer)
  .then(response => {
    if (response.status === 200) {
           
            setMessage(response.data)
            setIsPositive(true)
            setShowMessage(true)

            setTimeout(() => {
                setShowMessage(false)
            }, 4000);

            reload(!x)
            setMuokkaustila(false)
    }
})
.catch(error => {
    setMessage(error.message)
    setIsPositive(false)
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
     }, 7000)
  })
}


return(
    <div id="addNew">

    <h2>Editing Customer {muokattavaAsiakas.companyName}</h2>

    <form onSubmit={handleSubmit}>
        <div>
             <input type="text" value={newCustomerId} disabled />
         </div>
         <div>
             <input type="text" value={newCompanyName} placeholder="Company name"
                 onChange={({ target }) => setNewCompanyName(target.value)} required />
         </div>
         <div>
             <input type="text" value={newContactName} placeholder="Contact name"
                 onChange={({ target }) => setNewContactName(target.value)} />
         </div>
         <div>
             <input type="text" value={newContactTitle} placeholder="Contact title"
                 onChange={({ target }) => setNewContactTitle(target.value)} />
         </div>
         <div>
             <input type="text" value={newCountry} placeholder="Country"
                 onChange={({ target }) => setNewCountry(target.value)} />
         </div>
         <div>
             <input type="text" value={newAddress} placeholder="Address"
                 onChange={({ target }) => setNewAddress(target.value)} />
         </div>
         <div>
             <input type="text" value={newCity} placeholder="City"
                 onChange={({ target }) => setNewCity(target.value)} />
         </div>
         <div>
             <input type="text" value={newPostalCode} placeholder="Postal code"
                 onChange={({ target }) => setNewPostalCode(target.value)} />
         </div>
         <div>
             <input type="text" value={newPhone} placeholder="Phone"
                 onChange={({ target }) => setNewPhone(target.value)} />
         </div>
         <div>
             <input type="text" value={newFax} placeholder="Fax"
                 onChange={({ target }) => setNewFax(target.value)} />
         </div>
      
      <input type='submit' value='save' />
      <input type='button' value='back' onClick={() => setMuokkaustila(false)} />
    </form>

 </div>
)

}

export default CustomerEdit
