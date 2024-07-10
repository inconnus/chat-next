import { Column, Image, Row, Text } from '@/dataslot-ui/components/base'
import { useTheme } from '@emotion/react'
import React from 'react'

const Tag = ({ label }: { label: string }) => <Text sx={{ border: '1px solid #4d82ff', color: '#4d82ff', fontSize: '15px', borderRadius: '20px', padding: '0 12px' }}>{label}</Text>
const ListItem = ({ name, message, time, tags, profile }: { name: string, message: string, time: string, tags: string[], profile: string }) => {
    const theme = useTheme()
    return (
        <Row sx={{ padding: '10px', gap: '10px', alignItems: 'center', cursor: 'pointer', ':hover': { backgroundColor: '#e9e9e9' } }}>
            <Image src={profile} sx={{ borderRadius: '50%', width: '50px', height: '50px', flexShrink: 0 }} />
            <Column sx={{ flex: 1 }}>
                <Text>{name}</Text>
                <Text maxLine={1} sx={{ color: '#777' }}> {message}</Text>
                <Row sx={{ gap: '5px 4px', flexWrap: 'wrap' }}>
                    {tags.map((tag, index) => (
                        <Tag key={index} label={tag} />
                    ))}
                </Row>
            </Column>
            <Column sx={{ alignItems: 'center', gap: '3px' }}>
                <Text sx={{ color: theme?.color?.text?.primary, fontSize: '16px' }}>{time}</Text>
                <Text sx={{ color: '#FFF', backgroundColor: '#44ad53', borderRadius: '20px', padding: '0 8px', fontSize: '16px' }}>2</Text>
            </Column>
        </Row>
    )
}
export default ListItem