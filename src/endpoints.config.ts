export default {
    passwd: process.env.JWT_PASSWD,
    
    typeDB: process.env.TYPEORM_BD,
    hostDB: process.env.TYPEORM_HOST,
    userDB: process.env.TYPEORM_USERNAME,
    passwdDB: process.env.TYPEORM_PASSWORD,
    nameDB: process.env.TYPEORM_DATABASE,
    portDB: process.env.TYPEORM_PORT
    
}