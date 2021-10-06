import React from "react";
import { ExecutorPane } from "../ExecutorPane/ExecutorPane";

const RecipientsPane = ({recipients, handleDeleteRecipient}) => {
    const allRecipients = recipients.map(recipient => <ExecutorPane person={recipient.attributes} id={recipient.id} type="recipient" handleDeleteRecipient={handleDeleteRecipient} key={recipient.id}/>)

    return (
        <section className="recipients-pane">
            {allRecipients}
        </section>
    )
}

export default RecipientsPane