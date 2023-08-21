'use client'

import { useEffect, useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { useRouter } from "next/navigation"

export const Search = ({initialSearch} :{initialSearch:string}) => {
  const router = useRouter();
  const [tag,setTag] = useState(initialSearch??"");

  useEffect(() => {
    setTag(initialSearch);
  },[initialSearch])
    return (
    <div>
        <form className="flex  items-center space-x-2" onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery?tag=${tag}`);
        }}>
        <Input type="text" placeholder="Tag" value={tag} onChange={(e) => setTag(e.currentTarget.value)}  className=""/>
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
}
