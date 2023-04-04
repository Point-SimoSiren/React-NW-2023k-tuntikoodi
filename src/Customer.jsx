import "./App.css"
import React, {useState} from 'react'
import CustomerService from './Services/Customer'

// Tämä komponetti renderöidään CustomerList komponentin loopin jokaisella kierroksella
// ja ottaa propsina vastaan yhden yksittäisen customerin
const Customer = ({customer, setMessage, setIsPositive, setShowMessage, x, reload}) => {

    // Komponentin tila
    const [showDetails, setShowDetails] = useState(false)


    // Poistofunktio
    const deleteCustomer = (CustToDelete) => {

    var jatko = window.confirm("Are you sure you want to delete customer " + CustToDelete.companyName + "?")

     if (jatko === false) {
        alert("Deleting process cancelled successfully!")
     }
     else {
            CustomerService.remove(CustToDelete.customerId)
            .then(res => {
                if (res.status === 200) {
                setMessage(`Successfully removed customer ${customer.companyName}`)
                setIsPositive(true)
                setShowMessage(true)
                window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)
                
                setShowDetails(false)
                reload(!x)

                setTimeout(() => {
                    setShowMessage(false)
                }, 4000)  
                }
                })
            .catch(error => {
                setMessage(error.response.data)
                setIsPositive(false)
                setShowMessage(true)
                window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)
            })
                setTimeout(() => {
                    setShowMessage(false)
                }, 7000)  
        }
    }

return(
    <>
       {showDetails && <h3 style={{color: 'red', fontSize: 30}} onClick={() => setShowDetails(!showDetails)}>{customer.companyName} from {customer.city}, {customer.country}</h3>}

        {!showDetails && <h3 onClick={() => setShowDetails(!showDetails)}>{customer.companyName} from {customer.city}, {customer.country}</h3>}


        {showDetails && 
            <div className="customerDetails">
                <h3>{customer.companyName}</h3>

                <button onClick={() => deleteCustomer(customer)}>Delete</button>
                <button>Edit</button>

                <table>
                    <thead>
                        <tr>
                            <th>Contact Name</th>
                            <th>Contact Title</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{customer.contactName}</td>
                            <td>{customer.contactTitle}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        }

    </>
)
}


export default Customer