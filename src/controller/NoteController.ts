import { Request, Response } from "express";
import { Note } from "../model/Note";

class NoteController{

    async create(req:Request, res:Response){
        try{
            const new_note = new Note();
            new_note.name = req.body.name;
            new_note.description = req.body.description;

            res.status(201).json({
                status: "Created!",
                message: "Succesffuly created note!"
            })
        }catch(err){
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
        }
    } 
}