const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

router.get('/', async(req,res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(err){
        res.json({message:err});
    }
});

router.post('/', async (req, res) => {
    const post = new Todo({
        title: req.body.title,
        description: req.body.description
    });
    try {
    const saveTodo = await Todo.save();
    res.json(saveTodo);
    }catch(err){
        res.json({ message: err });
    }

        
});

router.get('/postId', async (req, res) => {
    try{
    const todo = await   Todo.findById(req.params.id);
    res.json(todo);
}catch(err){
    res.json({ message: err });
}
});

router.delete('/:postId', async (req, res) =>{
    try{
        const removedTodo = await Todo.remove({_id: req.params.id });
        res.json(removedTodo);
    } catch (err) {
        res.json({ message: err});
    }
});



router.patch('/:postId', async (req, res)=> {
    try {
        const updatedTodo = await Todo.updateOne(
            { _id: req.params.id},
            { $set: { title: req.body.title }
        }
        );
        res.json(updatedTodo);
    } catch (err) {
        res.json({ message: err });
    }
})
module.exports = router;