import Post from "../models/Post.js";
import User from "../models/User.js";

//create
export const createPost = async(req, res) => {
    try{
        const {userId, description, picturePath} = req.body;
        const user = await User.findById(userId);

        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            locatio: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes:{},
            comments: {}
        })

        await newPost.save(); //save the post
        const post = await Post.find(); //grab ALL the posts
        res.status(201).json(post); //return the posts

    }catch (err){
        res.status(409).json({message: err.message});
    }
} //end createPost


//read 

export const getFeedPosts = async(req, res)=>{
    try{
        const post = await Post.find(); //grab ALL the posts
        res.status(200).json(post); //return the posts
    }catch(err){
        res.status(404).json({message: err.message});
    }
}//end getFeedPosts

export const getUserPosts = async(req, res) =>{
    try{
        const {userId} = req.params;
        const post = await Post.find({userId}); //grab the users posts
        res.status(200).json(post); //return the posts
    }catch(err){
        res.status(404).json({message: err.message});
    }
}//end getUserPost

//update

export const likePost = async(req, res)=>{
    try{
        const{id} = req.params;
        const{userId} = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId); //grabbing wheter the user liked a post or not

        if(isLiked){
            post.likes.delete(userId); //unlike
        }else{
            post.likes.set(userId, true);//set like
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {likes:post.likes},
            {new: true}
        );


        res.status(200).json(updatedPost); //return the like or unlike
    }catch(err){
        res.status(404).json({message: err.message});
    }
}