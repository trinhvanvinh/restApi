const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// import routes
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

// routes
app.get('/', (req, res)=>{
    res.send("we are on home")
})
// connect to db
mongoose.connect(
   "mongodb://api_book:trinhvanvinh018@ds233198.mlab.com:33198/resapi_book",
{ useNewUrlParser: true },
()=>{
    console.log('connected db');
});

// how to start listening to the server
app.listen(3000);













/*const express = require('express');
const app = express();
const Joi = require('joi');
app.use(express.json());


var courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];

app.get('/' , (req, res)=>{
    res.send('Hello world');
} );

app.get('/api/course', (req, res) =>{
    res.send(courses);
} );

app.get('/api/course/:id' , (req, res)=>{
   const course = courses.find(c=>c.id === parseInt(req.params.id));
   if(!course){
       res.status(404).send('id is incorrect!')
   }else{
       res.send(course);
   }
} );

app.post('/api/course', (req, res)=>{

    const {error} = validateCourse(req.body);

    if(error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course={
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course)
})

app.put('/api/courses/:id', (req, res)=>{
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('Bad request');

    const {error} = validateCourse(req.body);

    if(error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name=req.body.name;
    res.send(course);

});

function validateCourse(course){
    const schema={
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
}


const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listen onport ${port} ....`));
*/


