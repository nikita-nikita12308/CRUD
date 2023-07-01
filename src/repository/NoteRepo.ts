import { Note } from "../model/Note";


interface INoteRepo{
    save(note:Note): Promise<Void>;
    update(note:Note): Promise<Void>;
    delete(noteId:number): Promise<Void>;
    retrieveById(noteId:number): Promise<Note>;
    retrieveAll(): Promise<Note[]>;
}

export class NoteRepo implements INoteRepo {
    
}