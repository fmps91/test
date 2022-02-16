import { Request, Response } from "express"
import { getRepository,getConnection } from "typeorm"
import { User } from "../models/User"

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.status(200).json(users);
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const user = getRepository(User).create(req.body);
    const result = await getRepository(User).save(user);
    return res.status(200).json(result);
}

export const getUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.status(200).json(results);
};

export const updateUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.status(200).json(results);
    }

    return res.status(404).json({ msg: 'Not user found' });
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    //const results = await getRepository(User).delete(req.body.id);
    
    const results = await getConnection()
    .createQueryBuilder()
    .delete()
    .from(User)
    .where("Name = :name", { name: req.body.Name })
    .execute();
    //.getOne();

    console.log("data result ",results);
  
    if(results.affected==1){
        return res.status(200).json({msg: 'user deteled'});
    }else{
        return res.status(404).json({msg: 'user not found'});
    }
    
};
