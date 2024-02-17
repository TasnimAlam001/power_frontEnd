import Link from 'next/link'
import React from 'react'

export default function TicketId({params}) {
    console.log(params)
    const id =params.formattedValue;
  return (
    <div>
      <Link href={`/allTickets/ticketId/${id}`}>{params.formattedValue}</Link>
    </div>
  )
}
