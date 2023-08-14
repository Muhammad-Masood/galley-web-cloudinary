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
    <div className="pt-2">
        <button className="bg-transparent" onClick={handleTheme}>{theme=='dark'?<MdOutlineLightMode className="w-6 h-6"/>:<MdDarkMode className="w-6 h-6"/>}</button>
    </div>
  )
}
