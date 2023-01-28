import { ITextTag } from '../../../@types/tags';
import { formRGBA } from '../../../common/utils/utils';

interface ITextTagProps extends Omit<ITextTag, 'color'> {
    value: string;
    color?: Array<string>;
    isActive?: boolean;
}

export const TextTag = ({ value, color = ['105', '194', '164'], isActive = false }: ITextTagProps): JSX.Element => {
    return (
        <span
            style={{ color: formRGBA(color), borderColor: formRGBA(color), background: formRGBA([...color, '.03']) }}
            className={`
                p-1 mr-1
                block
                text-center
                opacity-80
                rder-solid border-2 rounded-md 
                ${isActive ? 'cursor-pointer' : 'cursor-default'}
            `}
        >
            {value}
        </span>
    );
};
