import React from 'react'
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";


const RootLayout = ({ children }: { children: string }) => {
    return (
        <div className="w-full root">
              <Navbar />
            <main className="w-full">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout