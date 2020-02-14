import { token } from './token.model';
import { Table, Column, Model, HasMany, Unique } from 'sequelize-typescript';

@Table
export class user extends Model<user> {

    @Unique
    @Column
    username: string;

    @Unique
    @Column
    email: string;

    @Column
    password: string;    

    @Column
    gender: string;    

    @HasMany(() => token)
    token: token[];
}