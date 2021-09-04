export const updateUser = async ({data, type, id}) => {
    let patchInfo = {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        }
    }
    let URL = `https://elegy-backend.herokuapp.com/api/v1/users/${id}/`
    if (type === "profile_picture") {
        URL += "profile_picture"
        const formdata = new FormData();
        formdata.append("profile_picture", data);
        patchInfo.headers = {}
        patchInfo["body"] = formdata
    } else {
        let updatedInfo = {}
        updatedInfo[type] = data;
        patchInfo["body"] = JSON.stringify(updatedInfo)
    }
    try {
        const response = await fetch(URL, patchInfo)
        if (!response.ok) {
            throw Error()
        } else {
            const parsed = await response.json()
            console.log(parsed)
            return "Successfully Updated"
        }
    } catch (err) {
        throw Error("We could not update your data. Please refresh")
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