import Sidebar from '@/components/private/sidebar';
import React, { ReactNode } from 'react'

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full flex">
            <div className="w-[350px]">
                <Sidebar />
            </div>
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}

export default AdminLayout;