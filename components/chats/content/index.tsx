'use client'
import { Column } from '@/dataslot-ui/components/base'
import Tab from '@/dataslot-ui/components/Tab'
import { useTheme } from '@emotion/react'
import React from 'react'
import Message from './message'
import Textfield from './textfield'
const TAB = [
    { value: 'chats', label: 'แชท', icon: 'fa-solid fa-comment-dots' },
    { value: 'sells', label: 'รายการซื้อ', icon: 'fa-solid fa-list' },
    { value: 'products', label: 'สินค้า', icon: 'fa-solid fa-list' },
    { value: 'services', label: 'บริการ', icon: 'fa-solid fa-tools' },
]
const ChatContent = () => {
    const theme = useTheme()
    const onChange = () => {

    }
    return (
        <Column sx={{ flex: '1', borderRight: `1px solid ${theme.color.border.primary}` }}>
            <Tab onChange={onChange} contents={TAB} sx={{ height: '50px' }} />
            <Message />
            <Textfield />
        </Column>
    )
}

export default ChatContent