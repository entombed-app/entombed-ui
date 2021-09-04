export const updateUser = async ({data, type, id}) => {
    const updatedInfo = {}
    updatedInfo[type] = data;
    console.log(updatedInfo)
    try {
        const response = await fetch(`https://elegy-backend.herokuapp.com/api/v1/users/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedInfo)
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

export const fetchUser = async (userID) => {
    const url = `https://elegy-backend.herokuapp.com/api/v1/users/${userID}`
    try {
      const response = await fetch(url)
      const userData = await response.json()
      console.log(userData)
      return userData
    } catch (err) {
        console.log(err)
        throw Error("Apologies for the error. Please try refreshing the page.")
    }
  }