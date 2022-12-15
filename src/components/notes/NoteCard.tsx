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
                bg-secondary_light
                border-border_primary
                rounded-md
                text-primary
            `}
        >
            <img
                className={`
                    object-cover
                    w-full max-h-[200px]
                `}
                src={noteData.mainPreviewImage}
            />
            <h2>📄{noteData.title}</h2>
            <h3>{noteData.status}</h3>
            <span>⏰{new Date().getHours()}</span>
        </div>
    );
};
