import { secureImages } from "./utils"

const baseURL = "https://elegy-backend.herokuapp.com/api/v1/"

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
    const url = `${baseURL}users/${userID}`
    try {
      const response = await fetch(url)
      const userData = await response.json()
      const updatedUserData = secureImages(userData)

      const execsRes = await fetch(`${url}/executors`)
      const execData = await execsRes.json()

      const recipsRes = await fetch(`${url}/recipients`)
      const recipsData = await recipsRes.json()
      
      const allUserData = await Promise.all([updatedUserData, execData, recipsData])
      return allUserData
    } catch (err) {
        throw Error("Apologies for the error. Please try refreshing the page.")
    }
  }

export const postCredentials = async (credentials) => {
  try {
    const response = await fetch(`${baseURL}login`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
    })
    if (!response.ok) {
        throw Error("Username and Password do not match.")
    } else {
        const data = await response.json()
        return data
    }
  } catch (err) {
      throw Error(err.message)
  }
}

export const sendFinalEmail = async (id) => {
    const memorialLink = `https://elegy-app.herokuapp.com/${id}/memorial`
    try {
        const response = await fetch(`${baseURL}users/${id}/email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user_url: memorialLink})
        })
        if (!response.ok) {
            throw Error("Could not send email, please refresh")
        } else {
            return "Email has been sent!"
        }
      } catch (err) {
          throw Error(err.message)
      }
}

export const deleteRecipient = async (userid, recipientid) => {
    const url = `${baseURL}users/${userid}/recipients/${recipientid}`
    try {
        const response = await fetch(url, {
            method: "DELETE"
        })
        if (!response.ok) {
            throw Error("Delete was unsuccessful. Please Try Again")
        } else {
            return "Recipient delete was successful"

        }
    } catch (err) {
        throw Error(err.message)
    }
}

export const createRecipient = async (userid, recipientInfo) => {
    const url = `${baseURL}users/${userid}/recipients`
    const newRecipient = {
        email: recipientInfo.email,
        name: recipientInfo.name
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipient)
        })
        if (!response.ok) {
            throw Error("New recipient was not created, please try again")
        } else {
            return response.json()
        }
    } catch (err) {
        throw Error(err.message)
    }
}