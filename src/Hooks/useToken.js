import { useState, useEffect } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        console.log(token);
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://guarded-shore-68271.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }


    }, [user])
    return [token]
}
export default useToken