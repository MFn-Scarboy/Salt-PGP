import React from 'react'
import { UserData } from '../../types'

interface INameComponentProps {
    user : UserData
}

const Name = ({user: { name }} : INameComponentProps) => {
    return (
        <>
            <h2>{name}</h2>
        </>
    )
}

export default Name