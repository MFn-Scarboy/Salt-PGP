import React from 'react'
import { UserData } from '../../types'

interface IAgeComponentProps {
    user : UserData
}

const Age = ({ user: { age }} : IAgeComponentProps) => {
    return (
        <>
            <div><i>{age}</i></div>
        </>
    )
}

export default Age
