import React from 'react'
import Campsites from '@/components/private/campsites';
import Dashboard from '@/components/private/dashboard'
import { ADMINROUTE } from '@/constants/index.c';

const AdminPage = ({ params: { admin_route } }: { params: { admin_route: typeof ADMINROUTE[number]['value'] } }) => {
    return (
        <div className="w-full">
            {
                admin_route === "dashboard" ? <Dashboard /> :
                    admin_route === "campsites" ? <Campsites /> :
                        null
            }
        </div>
    )
}

export default AdminPage;