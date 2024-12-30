import React from 'react'
import Campsites from '@/components/private/campsites';
import Dashboard from '@/components/private/dashboard'
import { ADMINROUTE } from '@/constants/index.c';
import BookingRoute from '@/components/private/booking-route';

const AdminPage = ({ params: { admin_route } }: { params: { admin_route: typeof ADMINROUTE[number]['value'] } }) => {
    return (
        <div className="w-full">
            {
                admin_route === "dashboard" ? <Dashboard /> :
                    admin_route === "campsites" ? <Campsites /> :
                        admin_route === "bookings" ? <BookingRoute /> :
                            admin_route === "users" ? "Users" :
                                admin_route === "reviews" ? "Reviews" :
                                    admin_route === "settings" ? "Settings" :
                                        null
            }
        </div>
    )
}

export default AdminPage;