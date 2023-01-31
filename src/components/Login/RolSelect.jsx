import React from 'react'

export const RolSelect = () => {
    return (
        <>
            <div className="mb-3">
                <label>
                    Rol:
                    <select id='rol'>
                        <option value="admin">Admin</option>
                        <option value="cliente">Cliente</option>
                    </select>
                </label>
            </div>
        </>
    )
}

export default RolSelect;