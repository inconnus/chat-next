'use client'
import { Column } from '@/dataslot-ui/components/base'
import { useTheme } from '@emotion/react'
import React from 'react'
import ListItem from './item'
const chatList = [
    { name: 'John Doe', message: 'Hello!', time: '10:00', tags: ['urgent'], profile: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Jane Smith', message: 'How are you?', time: '10:05', tags: ['important'], profile: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Alice Johnson', message: 'Meeting at 3 PM', time: '10:10', tags: ['meeting'], profile: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Bob Brown', message: 'Project update', time: '10:15', tags: ['work'], profile: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Charlie Davis', message: 'Lunch?', time: '10:20', tags: ['casual'], profile: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Diana Evans', message: 'Check this out', time: '10:25', tags: ['info'], profile: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Eve Foster', message: 'Good morning', time: '10:30', tags: ['greeting'], profile: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'Frank Green', message: 'Can you help?', time: '10:35', tags: ['help'], profile: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Grace Harris', message: 'See you soon', time: '10:40', tags: ['farewell'], profile: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { name: 'Hank Irving', message: 'Got it', time: '10:45', tags: ['acknowledgment'], profile: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Ivy Johnson', message: 'Thanks!', time: '10:50', tags: ['gratitude'], profile: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: 'Jack King', message: 'No problem', time: '10:55', tags: ['response'], profile: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { name: 'Karen Lee', message: 'Let\'s do it', time: '11:00', tags: ['agreement'], profile: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { name: 'Leo Martin', message: 'I\'ll be there', time: '11:05', tags: ['confirmation'], profile: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: 'Mona Nelson', message: 'What\'s up?', time: '11:10', tags: ['casual'], profile: 'https://randomuser.me/api/portraits/women/8.jpg' }
];


const List = () => {
    const theme = useTheme()
    const onChange = () => {

    }
    return (
        <Column sx={{ width: '340px', minWidth: '300px', flexShrink: 0, overflowY: 'scroll', borderRight: `1px solid ${theme.color.border.primary}` }}>
            {chatList.map((item, index) => (
                <ListItem key={index} name={item.name} message={item.message} time={item.time} tags={item.tags} profile={item.profile} />
            ))}
        </Column>
    )
}

export default List