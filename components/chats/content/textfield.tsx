import { Column, Icon, Row, Textarea } from '@/dataslot-ui/components/base'
import { useTheme } from '@emotion/react'
import React from 'react'

const Textfield = () => {
    const theme = useTheme()
    return (
        <Column >
            <Textarea placeholder='พิมพ์ข้อความ...' sx={{ height: '80px', padding: '10px' }} />
            <Row sx={{ padding: '10px', width: '100%', gap: '15px', color: theme.color.text.secondary }}>
                <Icon sx={{ marginRight: 'auto' }} icon='fa-regular fa-paperclip' />
                <Icon icon='fa-regular fa-face-smile' />
                <Icon icon='fa-regular fa-comment-lines' />
            </Row>
        </Column>
    )
}

export default Textfield