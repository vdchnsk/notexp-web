import { INotePreview } from '../../@types/notes';

interface INoteCardParams {
    noteData: INotePreview;
}

export const NoteCard = ({ noteData }: INoteCardParams): JSX.Element => {
    return (
        <div
            className={`
                overflow-hidden
                min-w-[100px] w-[240px]
                min-h-[100px] max-h-[300px]
                p-1
                items-center 
                border-4 
                rounded-md
            `}
        >
            <img
                className={`
                    w-full h-2/5
                `}
                src={noteData.mainPreviewImage}
            />
            <h2>📄{noteData.title}</h2>
            <h3>{noteData.status}</h3>
            <span>⏰{new Date().getHours()}</span>
        </div>
    );
};
