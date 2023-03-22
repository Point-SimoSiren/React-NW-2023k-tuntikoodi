import "./App.css"
import React, {useState} from 'react'
import CustomerService from './Services/Customer'


// Tämä komponetti renderöidään CustomerList komponentin loopin jokaisella kierroksella
// ja ottaa propsina vastaan yhden yksittäisen customerin
const Customer = ({customer}) => {

    // Komponentin tila
    const [showDetails, setShowDetails] = useState(false)

return(
    <>
        <h3>{c.companyName} from {c.city}, {c.country}</h3>

        {showDetails && 
            <div className="customerDetails">
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

export default CustomerList