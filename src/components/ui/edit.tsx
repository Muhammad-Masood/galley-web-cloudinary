import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";
import { Button } from "./button";

export function Edit(props:any) {
    const {id} = props;
    return(
        <div>
             <Link href={`/edit/${id}`}>
              <Button variant="ghost" className="gap-x-2 min-w-max">
              <FiEdit2/>
              <p className="">Edit</p>
              </Button>
            </Link>
        </div>
    )
}