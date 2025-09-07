import React from "react";

const AuthLayout = ({children} : {children:React.ReactNode}) => {
    return( 
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
            {children}
        </main>
    )
}

export default AuthLayout;