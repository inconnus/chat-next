'use client'
import { Column } from '@/dataslot-ui/components/base'
import Tab from '@/dataslot-ui/components/Tab'
import React from 'react'
const TAB = [
    { value: 'info', label: 'ข้อมูลลูกค้า', icon: 'fa-solid fa-user' },
    { value: 'note', label: 'โน๊ต', icon: 'fa-solid fa-notes' },
    { value: 'qa', label: 'คำถาม', icon: 'fa-solid fa-circle-question' },
]
const ChatInfo = () => {
    const onChange = () => {

    }
    return (
        <Column>
            <Tab onChange={onChange} contents={TAB} sx={{ height: '50px' }} />
        </Column>
    )
}

export default ChatInfo