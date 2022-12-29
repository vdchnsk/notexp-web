import { INotePreview } from '../../@types/notes';

import { NoteCard } from './NoteCard';

interface INotesGridParams {
    notes: Array<INotePreview>;
}

export const NotesGrid = ({ notes }: INotesGridParams): JSX.Element => {
    return (
        <div
            className={`
                columns-1
                sm:columns-2
                md:columns-3
                xl:columns-4
                max-w-7xl
            `}
        >
            {notes.map((note) => (
                <div className={`w-full mb-4`}>
                    <NoteCard key={note.id} noteData={note} />
                </div>
            ))}
        </div>
    );
};
