import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

class UserController {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(req, res) {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 12);
            const body = {
                ...req.body, password: hashedPassword
            }
            console.log(hashedPassword)
            const result = await this.userRepository.signUp(body);
            res.status(200).send(result)
        } catch (err) {
            console.log(err);
            res.status(500).send({ success: false, error: err.message })
        }
    }

    async signIn(req, res) {

        try {
            //First check email is present
            const { email, password } = req.body;
            const userEmail = await this.userRepository.emailCheck(email);
            if (!userEmail) {
                res.json({ sussess: false, error: "Invalid Credentials" });
            } else {
                console.log(password, userEmail.password)
                const passwordCheck = await bcrypt.compare(password, userEmail.password);
                console.log("password check", passwordCheck)
                if (passwordCheck) {
                    const token = jwt.sign(
                        {
                            email: userEmail
                        },
                        "SECRETTOKEN",
                        {
                            expiresIn: 60 * 60
                        }
                    )

                    res.status(200).json({ success: true, resp: token });
                } else {
                    res.json({ success: false, error: "Invalid Credentials" });
                }
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ success: false, error: "Some thing went wrong" })

        }
    }

    async checkEmail(req, res) {
        try {
            const { email } = req.body;
            const result = await this.userRepository.emailCheck(email);
            res.send(result);
        } catch (err) {
            console.log(err);
            res.status(500).send("SomeThing went wrong in inserting user")
        }
    }
}

export default UserController;
