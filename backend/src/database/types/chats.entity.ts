import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChatRoom{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}