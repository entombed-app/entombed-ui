export const updateUser = async ({data, type, id}) => {
    const updatedInfo = {}
    updatedInfo[type] = data;
    console.log(updatedInfo)
    let URL = `https://elegy-backend.herokuapp.com/api/v1/users/${id}/`
    if (type === "profile_picture") URL = URL + "profile_picture"
    try {
        const response = await fetch(URL, {
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
        throw Error("Apologies for the error. Please try refreshing the page.")
    }
  }