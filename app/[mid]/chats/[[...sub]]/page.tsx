'use client'
import ChatContent from '@/components/chats/content'
import ChatInfo from '@/components/chats/info'
import List from '@/components/chats/list'
import { Row } from '@/dataslot-ui/components/base'
import React from 'react'
import useSWRSubscription from 'swr/subscription'

const Page = (params: any) => {
    const { data, error } = useSWRSubscription('wss://8543-58-11-38-139.ngrok-free.app/ws', (key, { next }) => {
        const socket = new WebSocket(key)
        socket.addEventListener('message', (event) => next(null, event.data))
        socket.addEventListener('error', (event) => next(event))
        return () => socket.close()
    })
    console.log(data);
    
    return (
        <Row sx={{ width: '100%' }}>
            <List />
            <ChatContent />
            <ChatInfo />
        </Row>
    )
}

export default Page