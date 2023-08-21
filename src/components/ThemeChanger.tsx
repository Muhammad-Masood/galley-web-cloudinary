'use client'
import {useTheme} from "next-themes"
import { useEffect } from "react";
import {MdOutlineLightMode,MdDarkMode} from "react-icons/md";

export const ThemeChanger = () => {

  const {theme,setTheme} = useTheme();

  const handleTheme = () => {
    theme==='dark'?setTheme('light'):setTheme('dark');
  }
  
    return (
        <div className="bg-transparent cursor-pointer" onClick={handleTheme}>{theme=='dark'?<MdOutlineLightMode className="w-4 h-4"/>:<MdDarkMode className="w-4 h-4"/>}</div>
  )
}
