import axios from "axios"  

export default async function getData(number) {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
   
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts/${number}`)
  
    console.log("Users:",  users);
    console.log("Posts:",  post);
    
}

getData(1)


