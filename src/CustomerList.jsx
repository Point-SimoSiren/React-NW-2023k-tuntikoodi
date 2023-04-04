import "./App.css"
import React, {useState, useEffect} from 'react'
import CustomerService from './Services/Customer'
import Customer from "./Customer"
import CustomerAdd from "./CustomerAdd"


const CustomerList = ({setShowMessage, setMessage, setIsPositive}) => {

    // Komponentin tilassa (state) on mm. customers tieto
    const [customers, setCustomers] = useState([])
    const [lisäystila, setLisäystila] = useState(false)
    // Hakukentän tilannetta seuraava state
    const [search, setSearch] = useState("")
    // x tilaa muuttamalla laukaistaan useEffectin ajo haluttaessa
    const [x, reload] = useState(false)

    // UseEffect funktiota kutsutaan alussa kerran. 2. parametrina taulukossa olevat statet jos joku
    //vaihtuu niin silloinkin kutsutaan
    useEffect(() => {
        CustomerService.getAll()
        .then(data => setCustomers(data))
    } , [x])


return(
    <>
             <h2><nobr>Customers</nobr>
                {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h2>

       {lisäystila && <CustomerAdd setLisäystila={setLisäystila} x={x} reload={reload} 
       setShowMessage={setShowMessage} setMessage={setMessage} setIsPositive={setIsPositive} /> }

       <input type="text" placeholder="Search by company name" onChange={({target}) => setSearch(target.value)} />

    {customers && customers.map(cust => 
         {
            const lowerCaseName = cust.companyName.toLowerCase()
            if (lowerCaseName.indexOf(search) > -1) {
                return(
              <Customer key={cust.customerId} x={x} reload={reload} customer={cust} setShowMessage={setShowMessage} setMessage={setMessage} setIsPositive={setIsPositive} />
            )
            }
            else {
                return(null)
            }
         }
    )}
    
    </>
)

}

export default CustomerList
