import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import invoices from '../data/invoices'

const Invoices = () => {
  return (
    <main>
        <h2>Invoices</h2>
        {invoices.map(invoice => (
            <Link style={{marginRight: '10px'}} to={invoice.name} key={invoice.name}>
                {invoice.name}
            </Link>
        ))}
        <Outlet/>
    </main>
  )
}

export default Invoices