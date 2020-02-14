import { token } from './token.model';
import { Table, Column, Model, HasMany, Unique } from 'sequelize-typescript';

@Table
export class user extends Model<user> {

    @Column
    @Unique
    username: string;

    @Column
    @Unique
    email: string;

    @Column
    password: string;    

    @Column
    gender: string;    

    @HasMany(() => token)
    hobbies: token[];
}