import React from 'react'
import { useSelector } from 'react-redux'

const useUserData = () => {
    const user = useSelector((state) => state.auth)
    return [user]
}

export default useUserData
