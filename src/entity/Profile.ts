import { Entity, PrimaryGeneratedColumn, Column,Index, OneToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    // @Index({ unique: true })
    @Column()
    firstName: string;

    @Column()
    gender: string

    @Column()
    photo: string

    @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
    user: User
// 

    // ["gender", "id"]
}