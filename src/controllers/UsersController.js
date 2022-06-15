const AppError = require("../utils/AppError")

class UserController {
  create(request, response) {
    const {name, email, password} = request.body;

    if(!name){
      throw new AppError("nome é obrigatório")
    }


    response.json({ name, email, password})

  }

}


module.exports = UserController;