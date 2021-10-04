import React from 'react';
import { ExecutorPane } from '../ExecutorPane/ExecutorPane';

const RecipientsPane = ({recipients}) => {
    const allRecipients = recipients.map(recipient => <ExecutorPane person={recipient.attributes} type='recipient'/>)

    return (
        <section className='recipients-pane'>
            {allRecipients}
        </section>
    )
}

export default RecipientsPane