import { Column, Row, Image, Text } from '@/dataslot-ui/components/base'
import { useTheme } from '@emotion/react'
import React from 'react'
const chatConversations = [
    { type: 'messageSent', text: 'สวัสดีครับ มีอะไรให้ช่วยไหมครับ?' },
    { type: 'message', text: 'สวัสดีค่ะ ฉันมีปัญหาเกี่ยวกับการสั่งซื้อของฉันค่ะ' },
    { type: 'messageSent', text: 'ขอโทษด้วยครับ รบกวนขอหมายเลขคำสั่งซื้อของคุณหน่อยครับ' },
    { type: 'message', text: 'ได้ค่ะ หมายเลขคือ 123456' },
    { type: 'messageSent', text: 'ขอบคุณครับ ขอเช็คข้อมูลให้ก่อนนะครับ' },
    { type: 'message', text: 'โอเคค่ะ ฉันจะรอ' },
    { type: 'messageSent', text: 'ผมได้เช็คคำสั่งซื้อของคุณแล้วครับ ดูเหมือนว่าจะมีความล่าช้าในการจัดส่ง' },
    { type: 'message', text: 'อ๋อ เข้าใจแล้วค่ะ แล้วฉันจะได้รับของเมื่อไหร่คะ?' },
    { type: 'messageSent', text: 'คำสั่งซื้อคาดว่าจะจัดส่งถึงพรุ่งนี้ครับ' },
    { type: 'message', text: 'ขอบคุณสำหรับข้อมูลค่ะ' },
    { type: 'messageSent', text: 'ยินดีครับ มีอะไรให้ช่วยอีกไหมครับ?' },
    { type: 'message', text: 'ไม่มีแล้วค่ะ ขอบคุณมาก!' },
    { type: 'messageSent', text: 'ขอให้มีวันที่ดีครับ!' },
    { type: 'message', text: 'คุณก็เช่นกันค่ะ!' },
    { type: 'messageSent', text: 'ลาก่อนครับ!' },
    { type: 'message', text: 'ลาก่อนค่ะ!' },
    { type: 'messageSent', text: 'ถ้ามีคำถามอื่น ๆ สามารถติดต่อมาได้เลยนะครับ' },
    { type: 'message', text: 'ได้ค่ะ ขอบคุณอีกครั้ง!' },
    { type: 'messageSent', text: 'ดูแลตัวเองด้วยนะครับ!' },
    { type: 'message', text: 'คุณก็เช่นกันค่ะ บาย!' }
];

const Item = ({ type, text }: { type: string; text: string }) => {
    const theme = useTheme()
    return (
        <Row sx={{ width: '100%', padding: '10px', flexDirection: type === 'message' ? 'row' : 'row-reverse' }}>
            <Image src={`https://profile.line-scdn.net/0hxGy1WQe_J2hESAyhw29YP3gNKQUzZiEgPCs6C2YcLQw-f2k5fy46DWhKLF45fmc5eS1qW2MfeAxg`} sx={{ width: '35px', marginBottom: '5px', height: '35px', borderRadius: '50%', border: '1.5px solid #FFF' }} alt='logo' width={50} height={50} />
            <Column sx={{ width: '100%', alignItems: type === 'message' ? 'flex-start' : 'flex-end' }}>
                <Text sx={{ padding: '4px 10px' }}>Chindanai Mala-eiam</Text>
                <Text sx={{ backgroundColor: type === 'message' ? '#e6e6e6' : '#c3f69d', padding: '4px 15px', borderRadius: '20px', color: theme?.color?.text?.secondary }}>{text}</Text>
            </Column>
        </Row>
    )
}
const Message = () => {
    const theme = useTheme()
    return (
        <Column sx={{ flex: '1', overflowY: 'scroll', flexDirection: 'column-reverse', borderBottom: `1px solid ${theme.color.border.primary}` }}>
            <Column sx={{ flexDirection: 'column' }}>
                {chatConversations.map((item, index) => (
                    <Item type={item.type} key={index} text={item.text} />
                ))}
            </Column>
        </Column>
    )
}

export default Message