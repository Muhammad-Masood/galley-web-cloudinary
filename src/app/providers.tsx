'use client'

import { ThemeProvider } from "next-themes"

export const Providers = ({children}: {children: React.ReactNode}) => {
    return(
        <div>
            <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
            </ThemeProvider>
        </div>
    )
}