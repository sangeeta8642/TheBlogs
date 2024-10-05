"use server"
import { revalidatePath } from "next/cache"
import { Post, User } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from 'bcrypt'

export const addPost = async (prevState,formdata) => {

    const { title, desc, slug, userId,img } = Object.fromEntries(formdata)
    try {
        connectToDb()
        const post = new Post({
            title,
            desc,
            slug,
            userId,
            img
        })
        await post.save()
        console.log("saved to db");
        revalidatePath("/blog")
        revalidatePath("/admin")

    } catch (err) {
        console.log(err);
        return { error: "something went wrong" }

    }
}

export const addUser = async (prevState,formdata) => {

    const { username, email, password, img } = Object.fromEntries(formdata)
    try {
        connectToDb()
        const user = new User({
            username, email, password, img
        })
        await user.save()
        console.log("saved to db");
        revalidatePath("/admin")

    } catch (err) {
        console.log(err);
        return { error: "something went wrong" }

    }
}

export const deletePost = async (formdata) => {

    const { id } = Object.fromEntries(formdata)
    try {
        connectToDb()
       await Post.findByIdAndDelete(id)
        // await post.save()
        console.log("deleted from db");
        revalidatePath("/blog")
        revalidatePath("/admin")


    } catch (err) {
        console.log(err);
        return { error: "something went wrong" }

    }
}

export const deleteUser = async (formdata) => {

    const { id } = Object.fromEntries(formdata)
    try {
        connectToDb()

        await Post.deleteMany({ userId: id })
        await User.findByIdAndDelete(id)
        // await post.save()
        console.log("deleted from db");
        revalidatePath("/admin")

    } catch (err) {
        console.log(err);
        return { error: "something went wrong" }

    }
}

export const hangleGithubLogin = async () => {

    await signIn("github")
}

export const handleLogout = async () => {

    await signOut()
}

export const register = async (prevState, formData) => {

    const { username, email, password, passwordRepeat, img } = Object.fromEntries(formData)

    if (password !== passwordRepeat) {
        return { error: "Password mismatched" }
    }

    try {
        connectToDb()
        const user = await User.findOne({ username })

        if (user) {
            return { error: "Username already exists" }
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img
        })

        await newUser.save()
        console.log("saved to db");
        return { success: true }

    } catch (error) {
        console.log(error);
        return { error: error.message }

    }

}

export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData)

    try {

        await signIn("credentials", { username, password })

    } catch (error) {
        console.log(error);
        if (error.message === "CredentialsSignin") {
            return { error: "invalid username or password" }
        }
        throw error

    }

}