import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Item{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

}