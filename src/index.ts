import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
// import { Profile } from "./entity/Profile"
// import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const profile = new Profile()
    // profile.gender = "male"
    // profile.photo = "me.jpg"
    // await AppDataSource.manager.save(profile)

    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    
    // await AppDataSource.manager.save(user)
    const photo = new Photo()
    photo.name='菊花'
    photo.filename='juhua.jpg'
    photo.description="黄色的菊花"
    photo.isPublished=true
    photo.views=6
    await AppDataSource.manager.save(photo)
    // console.log("Saved a new user with id: " + user.id)


    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)
    // let savedPhotos = await AppDataSource.manager.find(Photo);
    // console.log("All photos from the db: ", savedPhotos);

    
     // 完成
     console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
