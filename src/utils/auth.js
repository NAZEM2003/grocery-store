import {hash , compare} from "bcryptjs";
import {sign , verify} from "jsonwebtoken";

export const hashPassword = async (password)=>{
    const hashedPassword = await hash(password , 12);
    return hashedPassword;
}

export const verifyPassword = async (password , hashedPassword)=>{
    const isPassValid = await compare(password , hashedPassword);
    return isPassValid;
}

export const generateAccessToken = (data)=>{
    const token = sign({...data},process.env.AccessTokenSecretKey,{
        expiresIn:"1d"
    });
    return token;
}

export const verifyAccessToken = (token)=>{
    try{
        const tokenPayload = verify(token , process.env.AccessTokenSecretKey)
        return tokenPayload
    }
    catch(error){
        console.log("verify access token Error ->" , error);
        return false
    }
}

export const generateRefreshToken = (data)=>{
    const token = sign({...data},process.env.refreshTokenSecretKey,{
        expiresIn:"15d"
    });
    return token;
}