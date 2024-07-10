'use client'
import { CacheProvider, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React from 'react'
import { theme } from '../config/theme'
import { myCache } from '../config/cache'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <CacheProvider value={myCache}>
            <EmotionThemeProvider theme={theme}>
                {children}
            </EmotionThemeProvider>
        </CacheProvider>
    )
}

export default ThemeProvider