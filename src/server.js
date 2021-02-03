require('./db/connection');
const express = require("express");
const {User} = require("./models/User");

const port = process.env.PORT || 5000
const app =  express();
app.use(express.json());

app.get("/user", (req, res) => {
    res.status(200).send({message: "API is working"});
});

app.post("/user", async (req, res) => {
    try {
        const user = new User(req.body);
        const savedValue = await user.save()
    res.status(201).send(savedValue);
    } catch (error) {
        res.status(500).send({message: "could not connect"});
    }
});

app.patch("/user/:id", async (req, res) => {
    try {
        const user = User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({message: "user not found"})
    }
});

app.delete("/user/:id", (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send({message: "user not found"})
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});