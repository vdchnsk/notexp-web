import { ITextTag } from './tags';

export enum NoteStatuses {
    'brandnew',
    'needs_to_be_refresed',
    'forgotten',
}

export interface INoteBase {}
export interface INotePreview {
    title: string;
    mainPreviewImage: string;
    textTags: Array<ITextTag>;
    status: NoteStatuses;
    needsToBeRefreshedIn: Date;
    dataOfCreation: Date;
}
export interface INotePublic extends INoteBase {}
export interface INotePrivate extends INoteBase {}
