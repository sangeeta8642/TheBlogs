import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { slug } = params
    try {
        const post = await Post.findOne({ slug })
        return NextResponse.json(post)
    } catch (error) {
        console.log(error);

    }

}

export const DELETE = async (req, { params }) => {
    const { slug } = params
    try {
        await Post.deleteOne({ slug })
        return NextResponse.json("Post deleted successfully")
    } catch (error) {
        console.log(error);

    }

}