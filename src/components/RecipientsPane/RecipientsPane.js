import React, {useState} from "react";
import { ExecutorPane } from "../ExecutorPane/ExecutorPane";
import "./RecipientsPane.css"

const RecipientsPane = ({recipients, handleDeleteRecipient, handleCreateRecipient}) => {
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")

    const allRecipients = recipients.map(recipient => <ExecutorPane person={recipient.attributes} id={recipient.id} type="recipient" handleDeleteRecipient={handleDeleteRecipient} key={recipient.id}/>)

    const handleClick = async () => {
        handleCreateRecipient({name: newName, email: newEmail})
    }

    return (
        <section className="recipients-pane">
            {allRecipients}
            <section className="add-recipients-pane">
                    <form className="recipients-form">
                        <h2 className="exec-title">Add New Recipient</h2>
                        <label>Name</label>
                        <input type="text" placeholder="Name" value={newName} onChange={(e)=> setNewName(e.target.value)}></input>
                        <label>Email</label>
                        <input type="email" placeholder="Email" value={newEmail} onChange={(e)=> setNewEmail(e.target.value)}></input>
                        <button className="add-new-recipient-button" onClick={() => handleClick()}>Create</button>
                    </form>
            </section>
        </section>
    )
}

export default RecipientsPane