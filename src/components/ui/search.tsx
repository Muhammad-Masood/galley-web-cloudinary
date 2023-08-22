'use client'

import { useEffect, useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { useRouter } from "next/navigation"


interface SearchProps{
  initialSearch?:string;
  byTag:boolean;
}

// export const Search = ({initialSearch} :{initialSearch:string}) => {
export const Search = ({initialSearch,byTag}:SearchProps) => {
  const router = useRouter();
  const [tag,setTag] = useState(initialSearch||"");
  const handleSearchSubmit = (e:any) => {
      e.preventDefault();
      byTag? (tag!==""?router.replace(`/gallery?tag=${tag}`):router.replace('/gallery')) 
      : (tag!==""?router.replace(`/albums?name=${tag}`) : router.replace('/albums'));
  }
    return (
    <div>
        <form className="flex  items-center space-x-2" onSubmit={handleSearchSubmit}>
        <Input type="text" placeholder={`${byTag?"Tag":"Album name"}`} value={tag} onChange={(e) => setTag(e.currentTarget.value)}  className=""/>
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
}
