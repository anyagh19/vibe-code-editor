import {useSession} from "next-auth/react"

export const useCurrentUser = () => {
    const session = useSession();

    return session?.data?.user
}

//it is used when we want to get the current logged in user details like email name etc for client side rendering