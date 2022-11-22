import { ITextTag } from '../../../@types/tags';
import styles from '@styles/tags/tags.module.scss';
const randomColor = require('randomcolor'); //* unfortunutely, this lib doesnt support import/export

interface ITextTagProps extends ITextTag {
    isActive?: boolean;
}

export const TextTag = ({ value, color = randomColor(), isActive = false }: ITextTagProps): JSX.Element => {
    return (
        <span
            className={styles.text_tag}
            style={{ color: color, border: `2px solid ${color}`, cursor: isActive ? 'pointer' : 'default' }}
        >
            {value}
        </span>
    );
};
