import Image from 'next/image';
import Link from 'next/link';
import { INotePreview } from '../../@types/notes';
import { TextTag } from '../common/tags/TextTag';
interface INoteCardParams {
    noteData: INotePreview;
}

export const NoteCard = ({ noteData }: INoteCardParams): JSX.Element => {
    return (
        <div
            className={`
                overflow-hidden
                min-h-[100px]
                bg-secondary_light
                border-border_primary
                rounded-md
                flex flex-col
                text-primary
            `}
        >
            <Link href="/">
                <NotePreview src={noteData.mainPreviewImage} />
            </Link>
            <div
                className={`
                    flex flex-col gap-2
                    p-3
                    text-primary
                `}
            >
                <h2 className={``}>{noteData.title}</h2>
                {/* <h3 className={`max-h-10 overflow-hidden text-ellipsis whitespace-nowrap`}>{noteData.status}</h3> */}
                {/* <span>{new Date().getHours()}</span> */}
                <NoteTags tags={noteData.tags} />
            </div>
        </div>
    );
};
const NotePreview: React.FC<{ src: string }> = ({ src }) => (
    <img
        className={`
            object-cover
            w-full max-h-[200px]
        `}
        src={src}
    />
);

const NoteTags: React.FC<{ tags: { id: number; label: string }[] }> = ({ tags }) => (
    <div className={`flex flex-wrap gap-1`}>
        {tags.map((tag) => (
            <TextTag key={tag.id} value={tag.label} />
        ))}
    </div>
);
