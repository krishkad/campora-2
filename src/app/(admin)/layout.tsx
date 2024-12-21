import React, { ReactNode } from 'react'

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full">
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}

export default AdminLayout;