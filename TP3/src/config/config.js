const  dotenv = require('dotenv');
dotenv.config()

class Config {
    constructor(){
        this.secreteWord= process.env.SECRETE_WORD;
        this.expiresIn = process.env.EXPIRES_IN;
    }
}
module.exports = new Config();