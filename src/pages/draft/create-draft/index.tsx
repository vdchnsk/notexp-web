import type { NextPage } from 'next';
import { MainLayout } from '../../../components/common/MainLayout';
import { CreateDraft } from '../../../components/draft/create-draft';

import { Button } from '@material-ui/core';
import { TextTag } from '@components/common/tags/TextTag';

const HomePage: NextPage = () => {
    return (
        <MainLayout title="Create Draft">
            <div className="flex justify-center bg-secondary text-primary">
                <main className="flex flex-col p-3 min-w-[700px] min-h-[50vh] gap-1 rounded-md">
                    <h1 className={`text-2xl mb-6`}>Create your draft</h1>
                    <h2 className={'text-xl'}>Choose the topic</h2>
                    ...
                    <h2 className={'text-xl'}>Choose note's preview image</h2>
                    ...
                    <h2 className={'text-xl'}>Short description</h2>
                    ...
                    <h2 className={'text-xl'}>Note content</h2>
                    <CreateDraft />
                    <h2 className={'text-xl'}>Choose corresponding tags:</h2>
                    <div className="flex flex-row mb-6">
                        <TextTag value="film" isActive />
                        <TextTag value="FILM" isActive />
                    </div>
                    <Button variant="outlined" color="primary">
                        Preview
                    </Button>
                </main>
            </div>
        </MainLayout>
    );
};

export default HomePage;
