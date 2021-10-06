import React from "react";
import { ExecutorPane } from "../ExecutorPane/ExecutorPane";
import "./RecipientsPane.css"

const RecipientsPane = ({recipients, handleDeleteRecipient}) => {
    const allRecipients = recipients.map(recipient => <ExecutorPane person={recipient.attributes} id={recipient.id} type="recipient" handleDeleteRecipient={handleDeleteRecipient} key={recipient.id}/>)

    return (
        <section className="recipients-pane">
            {allRecipients}
            <section className="add-recipients-pane">
                    <form className="recipients-form">
                        <h2 className="exec-title">Add New Recipient</h2>
                        <label>Name</label>
                        <input type="text"></input>
                        <label>Email</label>
                        <input type="email"></input>
                        <button className="add-new-recipient-button">Create</button>
                    </form>
            </section>
        </section>
    )
}

export default RecipientsPane