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
        const formData = new FormData();
        formData.append("profile_picture", data);
        patchInfo.headers = {}
        patchInfo["body"] = formData
    } else if (type === "images") {
        URL += "images"
        const formData = new FormData();
        formData.append("image", data);
        patchInfo.method = "POST"
        patchInfo.headers = {}
        patchInfo["body"] = formData
    } else {
        let updatedInfo = {}
        updatedInfo[type] = data;
        patchInfo["body"] = JSON.stringify(updatedInfo)
    }
    try {
        const response = await fetch(URL, patchInfo)
        if (!response.ok) {
            throw Error("We could not update your data. Pleash refresh")
        } else {
            const parsed = await response.json()
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