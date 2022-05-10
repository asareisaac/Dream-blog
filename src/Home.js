import { useState,useEffect } from "react";
import DisplayBlog from './DisplayBlog'
import useFetch from './useFetch'

const Home = () =>{
 const {data: blogs,isPending,error} = useFetch('http://localhost:9000/blogs');


//console.log('This page is running');





    return(
  <div className="home">
  {isPending && <div>Loading....</div>}
  {error && <div>{error}</div>}
{blogs && <DisplayBlog blogs = {blogs} blogtitle="All Blogs"/>}
{/*<DisplayBlog blogs = {blogs.filter((blog)=>blog.author=="Theo")} blogtitle="Theo's Blogs" />*/}
  </div>      
    );
}

export default Home;