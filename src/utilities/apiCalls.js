export const updateUser = async (user) => {
    console.log(user)
    try {
        const response = await fetch(`https://elegy-backend.herokuapp.com/api/v1/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if (!response.ok) {
            throw Error()
        } else {
            const parsed = await response.json()
            console.log(parsed)
            return "Successfully Updated"
        }
    } catch (err) {
        throw Error(err)
    }
} 