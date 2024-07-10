import ChatContent from '@/components/chats/content'
import ChatInfo from '@/components/chats/info'
import List from '@/components/chats/list'
import { Row } from '@/dataslot-ui/components/base'
import React from 'react'
import useSWRSubscription from 'swr/subscription'

const Page = (params: any) => {
 
    
    return (
        <Row sx={{ width: '100%' }}>
            <List />
            <ChatContent />
            <ChatInfo />
        </Row>
    )
}

export default Page