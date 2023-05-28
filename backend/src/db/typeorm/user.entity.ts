import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'user_id'
    })
    id: number

    @Column()
    first_name: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    phone: number

    @Column()
    password: string
}