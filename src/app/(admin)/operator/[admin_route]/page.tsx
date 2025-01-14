import React from 'react'
import Campsites from '@/components/private/campsites';
import Dashboard from '@/components/private/dashboard'
import { ADMINROUTE } from '@/constants/index.c';
import UserManagement from '@/components/private/user-management';
import Settings from '@/components/private/settings';
import BookingsPage from '@/components/private/bookings-page';

const AdminPage = ({ params: { admin_route } }: { params: { admin_route: typeof ADMINROUTE[number]['value'] } }) => {
    return (
        <div className="w-full">
            {
                admin_route === "dashboard" ? <Dashboard /> :
                    admin_route === "campsites" ? <Campsites /> :
                        admin_route === "bookings" ? <BookingsPage /> :
                            admin_route === "users" ? <UserManagement /> :
                                admin_route === "settings" ? <Settings /> :
                                    "not found"
            }
        </div>
    )
}

export default AdminPage;