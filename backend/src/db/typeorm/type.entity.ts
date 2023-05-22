/* eslint-disable prettier/prettier */
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Armour {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'item_id'
    })
    id: number;

    @Column({
        name: 'type_of_armour'
    })
    name: string;
}