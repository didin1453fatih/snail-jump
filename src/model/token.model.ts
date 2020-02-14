import { user } from './user.model';
import { Table, Column, Model, HasMany, Unique, HasOne } from 'sequelize-typescript';

@Table
export class token extends Model<token> {

    @Column
    @Unique
    token: string;

    @HasOne(() => user)
    user: user
}