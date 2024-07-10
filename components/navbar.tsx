'use client'
import { Column, Icon, IconButton, Image } from '@/dataslot-ui/components/base'
import { useTheme } from '@emotion/react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const IconLink = ({ icon, href }: { icon: string, href: string }) => {
    const theme = useTheme()
    const path = usePathname()
    return (
        <Link href={href}>
            <Icon sx={{ color: path?.includes(href) ? '#FFF' : theme.color.text.primary, fontSize: '24px', padding: '10px', cursor: 'pointer' }} icon={icon} />
        </Link>
    )
}

const Navbar = () => {
    const { mid } = useParams()
    const theme = useTheme()
    return (
        <Column sx={{ width: '50px', padding: '10px', backgroundColor: theme.color.background.primary, alignItems: 'center' }} as={'nav'}>
            <Image src={`https://profile.line-scdn.net/0hxGy1WQe_J2hESAyhw29YP3gNKQUzZiEgPCs6C2YcLQw-f2k5fy46DWhKLF45fmc5eS1qW2MfeAxg`} sx={{ width: '35px',marginBottom:'5px', height: '35px', borderRadius: '50%', border: '1.5px solid #FFF' }} alt='logo' width={50} height={50} />
            <IconLink icon='fa-solid fa-comment-dots' href={`/${mid}/chats`} />
            <IconLink icon='fa-solid fa-file-spreadsheet' href={`/${mid}/sheets`} />
        </Column>
    )
}

export default Navbar