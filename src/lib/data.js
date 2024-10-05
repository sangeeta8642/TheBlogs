import { Post, User } from "./models";
import { connectToDb } from "./utils"
import { unstable_noStore as noStore } from "next/cache";

export const getUsers=async()=>{
    noStore()
    try {
        connectToDb();
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch the users");   
    }
}

export const getPosts=async()=>{
    noStore()
    try {
        connectToDb();
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch the posts");   
    }
}

export const getPost=async (slug) => {
    noStore()
    try {
        connectToDb()
        const post=await Post.findOne({slug})
        return post
    } catch (error) {
         console.log(error);
        throw new Error("failed to fetch the post");   
    }
}

export const getUser=async (id) => {
    noStore()
    try {
        connectToDb()
        const user=await User.findById(id)
        return user
    } catch (error) {
         console.log(error);
        throw new Error("failed to fetch the user");   
    }
}