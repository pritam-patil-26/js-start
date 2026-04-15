// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isloggedIn = false
// console.log(tinderUser);            ///{ id: '123abc', name: 'sam', isloggedIn: false }
 
const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstName: "pritam",
            lastName: "patil"
        }
    } 
}
// console.log(regularUser.fullname.userFullName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyc@gmail.com"
    }
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));        //[ 'id', 'name', 'isloggedIn' ]
// console.log(Object.values(tinderUser));       //[ '123abc', 'sam', false ]
// console.log(Object.entries(tinderUser));     //[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isloggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isloggedIn'));      //true


const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "pritam"
}

//course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor : Instructor} = course
console.log(Instructor);

// {
// "name" : "pritam",
// "coursename": "js in hindi",
// "price": "free"
// }

[
{},
{},
{}
]