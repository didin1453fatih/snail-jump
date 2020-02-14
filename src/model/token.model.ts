import { user } from './user.model';
import { Table, Column, Model, HasMany, Unique, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class token extends Model<token> {

    @Unique
    @Column
    token: string;

    @ForeignKey(() => user)
    @Column
    userId: number;

    @BelongsTo(() => user)
    user: user;
} 