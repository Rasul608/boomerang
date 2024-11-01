const User = require("../../models")

class gameUser{
    static async createUser(username, password, email){
        return await User.create({ username, password, email });
    }
    
    static async getUser(username) {
        return await User.findOne({ where: { username } });
      }
      
      }