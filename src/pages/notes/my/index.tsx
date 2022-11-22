import type { NextPage } from 'next';
import { MainLayout } from '../../../components/common/MainLayout';

import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import { pushNamed } from '../../../router/router';
import { NotesGrid } from '@components/notes/NotesGrid';

import { INotePreview } from '../../../@types/notes';
import { default as mockDB } from '../../../mockDB.json';

import styles from '@styles/draft/create-draft/create-draft.module.scss';

const HomePage: NextPage = () => {
    const router = useRouter();

    const notesList: Array<INotePreview> = JSON.parse(JSON.stringify(mockDB)).notes;

    return (
        <MainLayout title="Your Notes">
            <div>
                <main className={styles.main}>
                    <div className={styles.header}>
                        <h1> My library of Notes:</h1>
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<CreateIcon />}
                            onClick={() => router.push(pushNamed('create-draft'))}
                        >
                            Create a Note
                        </Button>
                    </div>
                    <NotesGrid notes={notesList} />
                </main>
                <footer></footer>
            </div>
        </MainLayout>
    );
};

export default HomePage;
