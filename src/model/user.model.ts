import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
export class user extends Model<user> {

    @Column
    username: string;

    @Column
    email: Date;

    @Column
    password: Date;    

    @Column
    gender: Date;    

    // @HasMany(() => Hobby)
    // hobbies: Hobby[];
}