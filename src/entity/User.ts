import { Entity, PrimaryGeneratedColumn, Column,Index, OneToOne, JoinColumn } from "typeorm"
import { Profile } from "./Profile"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    // @Index({ unique: true })
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToOne(() => Profile, (profile) => profile.user) 
    @JoinColumn()
    profile: Profile

}
