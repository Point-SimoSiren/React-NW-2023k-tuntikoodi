import "./App.css"
import React, {useState, useEffect} from 'react'
import CustomerService from './Services/Customer'


const CustomerList = () => {

    // Komponentin tilassa (state) on customers tieto
    const [customers, setCustomers] = useState([])

    // UseEffect funktiota kutsutaan alussa kerran
    useEffect(() => {
        CustomerService.getAll()
        .then(data => setCustomers(data))
    } , [])


return(
    <>
        <h2>Customers</h2>
 
        {customers && customers.map(c => (
                <h3>{c.companyName} from {c.city}, {c.country}</h3>
        ))
    }
    
    </>
)

}

export default CustomerList