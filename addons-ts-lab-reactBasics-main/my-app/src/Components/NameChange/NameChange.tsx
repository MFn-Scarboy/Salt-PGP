import React from 'react'
import { UserData } from '../../types'

interface INameChangeComponentProps {
    user : UserData,
    onNameChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const NameChange = ({ user: {name}, onNameChange} : INameChangeComponentProps) => {
    return (
        <>
            <div>
                <h2>Change the name '{name}'</h2>
                <input type="text" value={name} onChange={onNameChange} />
            </div>
        </>
    )
}

export default NameChange