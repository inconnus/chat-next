import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Icon, Padding, Row, Text } from '@/dataslot-ui/components/base'
import { CSSObject, useTheme } from '@emotion/react'
{/* <Text>{params.context[0].search}</Text> */ }
const Tab = ({ onChange, contents, sx }: { onChange: Function, contents: any, sx?: CSSObject }) => {
    const theme = useTheme()
    const [value, setValue] = useState('')
    const [currentTab, setCurrentTab] = useState('')
    const [noth, setNoth] = useState({ width: 0, left: 0 })
    const parantRef = useRef<HTMLDivElement>(null)
    const onSelect = (e: React.MouseEvent<HTMLButtonElement>, value: string) => {
        onChange(value)
        setNoth({
            width: e.currentTarget.clientWidth,
            left: e.currentTarget.offsetLeft
        })
        setCurrentTab(value)
    }
    useEffect(() => {
        setNoth({
            width: parantRef.current?.children[0].clientWidth || 0,
            left: 0
        })
        setCurrentTab(contents?.[0]?.value)
        onChange(contents?.[0]?.value)
    }, [])
    return (
        <Row sx={{ position: 'relative', boxShadow: 'inset 0 -2px 0 0px #ddd', ...sx }}>
            <Row ref={parantRef} sx={{ overflowX: 'scroll', scrollbarWidth: 'none', position: 'relative' }} >
                {contents?.map((item: any) => (
                    <Button onClick={(e) => onSelect(e, item?.value)} key={item?.value} sx={{
                        flexShrink: 0,
                        color: currentTab === item?.value ? theme?.color?.background?.primary : '#666',
                        background: 'none',
                        position: 'relative',
                        padding: '10px 16px',
                        fontSize: '20px'
                    }}>
                        <Row sx={{ gap: '5px' }}>
                            {item?.icon && <Icon sx={{ fontSize: '16px' }} icon={item?.icon} />}
                            {item?.label}
                        </Row>
                    </Button>
                ))}
                <Box style={{
                    transform: `translateX(${noth.left}px)`,
                    width: `${noth.width}px`
                }} sx={{ position: 'absolute', borderRadius: '2px', transition: 'transform 0.2s', bottom: '0', height: '2px', backgroundColor: theme?.color?.background?.primary }} />
            </Row>
        </Row>
    )
}

export default Tab