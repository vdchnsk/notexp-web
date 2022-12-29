import { ITextTag } from './tags';

export enum NoteStatuses {
    'brandnew',
    'needs_to_be_refresed',
    'forgotten',
}

export interface INoteBase {}
export interface INotePreview {
    id: number;
    title: string;
    mainPreviewImage: string;
    textTags: Array<ITextTag>;
    status: NoteStatuses;
    needsToBeRefreshedIn: Date;
    dataOfCreation: Date;
    tags: { id: number; label: string }[];
}
export interface INotePublic extends INoteBase {}
export interface INotePrivate extends INoteBase {}
