import { INotePreview } from '../../@types/notes';

import { NoteCard } from './NoteCard';

interface INotesGridParams {
    notes: Array<INotePreview>;
}

export const NotesGrid = ({ notes }: INotesGridParams): JSX.Element => {
    console.log(notes);

    return (
        <div
            className={`
                w-full
                flex 
                items-center justify-start
                flex-wrap
            `}
        >
            {notes.map((note) => (
                <NoteCard noteData={note} />
            ))}
        </div>
    );
};
