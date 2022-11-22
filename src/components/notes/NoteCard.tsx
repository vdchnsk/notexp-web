import { INotePreview } from '../../@types/notes';

import styles from '@styles/notes/note_card.module.scss';
import Image from 'next/image';

interface INoteCardParams {
    noteData: INotePreview;
}

export const NoteCard = ({ noteData }: INoteCardParams): JSX.Element => {
    return (
        <div className={styles.note_card}>
            <img className={styles.note_card__preview} src={noteData.mainPreviewImage} />
            <h2>📄{noteData.title}</h2>
            <h3>{noteData.status}</h3>
            <span>⏰{new Date().getHours()}</span>
        </div>
    );
};
