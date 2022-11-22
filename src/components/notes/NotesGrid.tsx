import { INotePreview } from '../../@types/notes';

import { NoteCard } from './NoteCard';
import styles from '@styles/notes/note_grid.module.scss';

interface INotesGridParams {
    notes: Array<INotePreview>;
}

export const NotesGrid = ({ notes }: INotesGridParams): JSX.Element => {
    console.log(notes);

    return (
        <div className={styles.note_grid}>
            {notes.map((note) => (
                <NoteCard noteData={note} />
            ))}
        </div>
    );
};
