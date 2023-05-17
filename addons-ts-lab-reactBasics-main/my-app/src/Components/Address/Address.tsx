import React from 'react'
import { UserData } from '../../types'

interface IUserAddressComponentProps {
    user : UserData
}

const Address = ({ user: { address }} : IUserAddressComponentProps) => {
    return (
        <>
            <div><i>{address}</i></div>
        </>
    )
}

export default Address
