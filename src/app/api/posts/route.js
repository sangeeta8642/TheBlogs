import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET=async (req) => {
    try {
        const posts=await Post.find()
        return NextResponse.json(posts)
    } catch (error) {
        // console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}