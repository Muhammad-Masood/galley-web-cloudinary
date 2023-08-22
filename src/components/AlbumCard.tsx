"use client";

import { Folder, RootFolder } from "@/app/albums/album-api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";


export const AlbumCard = ({folder}:{folder:Folder}) => {
  return (
    <div>
      <Card className="w-max ">
        <CardHeader>
          <CardTitle>{folder.name}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={`/albums/${folder.name}`}>
          <Button>View Album</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
