import type { NextPage } from 'next';
import { MainLayout } from '../../../components/layout/MainLayout';

import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import { pushNamed } from '../../../router/router';
import { NotesGrid } from '@components/notes/NotesGrid';

import { INotePreview } from '../../../@types/notes';
import { default as mockDB } from '../../../mockDB.json';

const HomePage: NextPage = () => {
    const router = useRouter();

    const notesList: Array<INotePreview> = JSON.parse(JSON.stringify(mockDB)).notes;

    return (
        <MainLayout title="Your Notes">
            <div>
                <main
                    className={`
                        p-4
                        w-full 
                        bg-secondary
                        text-primary
                    `}
                >
                    <div className={`mb-4 flex flex-col gap-4`}>
                        <h1 className={`text-xl`}> My library of Notes:</h1>
                        <div className={`flex flex-row`}>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<CreateIcon />}
                                onClick={() => router.push(pushNamed('create-draft'))}
                            >
                                Create a Note
                            </Button>
                        </div>
                    </div>
                    <NotesGrid notes={notesList} />
                </main>
            </div>
        </MainLayout>
    );
};

export default HomePage;
