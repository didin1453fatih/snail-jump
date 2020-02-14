import { token } from './../src/model/token.model';
import { user } from '../src/model/user.model';

import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    database: 'grpc',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: './storage/data/data.db',
    models: [user, token], // or [Player, Team],
});



export async function init() {    
    // await sequelize.sync({ force: false });
}