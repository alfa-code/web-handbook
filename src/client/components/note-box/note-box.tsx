import React from 'react';

import styles from './note-box.module.scss';

export const NoteBox = ({ children, label = 'Заметка' }: any) => {
    return (
        <div className={ styles.noteBox }>
            { children }
            <span className={ styles.label }>
                { label }
            </span>
        </div>
    );
}
