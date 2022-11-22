import { ITextTag } from '../../../@types/tags';
const randomColor = require('randomcolor'); //* unfortunutely, this lib doesnt support import/export

interface ITextTagProps extends ITextTag {
    value: string;
    color?: string;
    isActive?: boolean;
}

export const TextTag = ({ value, color = randomColor(), isActive = false }: ITextTagProps): JSX.Element => {
    return (
        <span
            style={{ color: color, borderColor: color }}
            className={`
                p-1 mr-1 
                text-center
                rder-solid border-2 rounded-md 
                ${isActive ? 'cursor-pointer' : 'cursor-default'}
            `}
        >
            {value}
        </span>
    );
};
