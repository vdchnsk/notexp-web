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
                <div
                    key={note.id}
                    tabIndex={0}
                    className={`
                        rounded-md
                        hover:animate-border-out
                        focus:animate-border-out
                        relative w-full mb-4
                    `}
                >
                    <NoteCard noteData={note} />
                </div>
            ))}
        </div>
    );
};
