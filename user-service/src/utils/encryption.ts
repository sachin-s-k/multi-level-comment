import bcrypt from "bcryptjs"

export const hashPassword=async (password:string):Promise<string>=>{
    return await bcrypt.hash(password,10)
}

export const comparePassword=async (password:string,hash:string):Promise<Boolean>=>{

    return await bcrypt.compare(password,hash)

}