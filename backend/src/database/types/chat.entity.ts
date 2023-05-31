import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChatUser{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}