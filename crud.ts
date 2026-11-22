import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Md.Shariful islam-2",
    //         email: "shariful2@gmail.com"
    //     }
    // })
    // console.log("Created User:", createUser)
    // create user for user id = 1

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "this is a title of content",
    //         content: "this is a big content of her",
    //         authorId: 2
    //     }
    // })
    // console.log(createPost)

    //create Profile
    const creatProfile = await prisma.profile.create({
        data: {
            bio: "web Development next level",
            userId: 2
        }
    })

    console.log(creatProfile)
}

run()