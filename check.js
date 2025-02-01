


export const register=async()=>{
    const [name,email,password]=req.body;
const user = await User.findOne({email});
if(user) 
    return res.json({message:"already"})
const hashPass = await bcrypt.hssh(password,10);
    user = await User.Create({name,email,password:hashPass});
    res.json({message:"user registered"});
}