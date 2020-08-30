const User = require('./../models/user.model')
class userController {

    getAllUsers(req, res) {
    res.status(200).send(    {
            usersList
        })   
    }

    // getUserById(req, res) {
    //     const userid = req.params
    //     let temp = usersList.find((item) => {
    //         item.userid == userid
    //     })
    //     console.log(usersList)

    //     res.status(200).send(    {
    //             user: "user"
    //         })   
    // }


    createUser(req, res) {
        // let todo = new User({
        //     email: req.body.title,
        //     userName: req.body.description,
        // })

        // let createdTodo = todo.save((err, data) => {
        //     if (err) res.status(400).send(JSON.stringify(err));
        //     res.status(201).send(JSON.stringify(data));
        // })

    }
}


module.exports = userController;