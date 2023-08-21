"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "./button";
import {IoAlbumsOutline} from "react-icons/io5";
import {BiCollapseVertical} from "react-icons/bi";

// export function AlbumCollapsible({ onAlbumMenu }: { onAlbumMenu: boolean }) {
export function AlbumCollapsible() {
  return (
    <div>
        {/* <Button variant={`${true  ? "secondary" : "ghost"}`} className="w-full justify-start gap-x-1" > */}
      <Collapsible>
        <CollapsibleTrigger>
            {/* <div className="flex gap-x-1 items-center"> */}
                <IoAlbumsOutline className="icons" />
                Albums
                <BiCollapseVertical/>
            {/* </div> */}
        </CollapsibleTrigger>

        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
      {/* </Button> */}
    </div>
  );
}
