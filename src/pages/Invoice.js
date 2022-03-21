import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import invoices from '../data/invoices'

const Invoice = () => {
    const params = useParams()
    const navigate = useNavigate()
    console.log(params.invoiceID);
    const invoice = invoices.find(invoice => invoice.name === params.invoiceID)
    useEffect(() => {
        if(!invoice){
            navigate('..')
        }
    }, [])
  return (
    <div>{invoice === undefined ? 'nothing' : invoice.name}</div>
  )
}

export default Invoice