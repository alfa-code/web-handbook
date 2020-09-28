import React from 'react';

import styles from './player-management.module.scss';
import triangleDown from 'Assets/icons/bw/triangle-down-small.svg';
// import replayIcon from 'Assets/icons/info-icons/repeat.svg'
// import shuffleIcon from 'Assets/icons/info-icons/shuffle.svg'
// import savePlaylistIcon from 'Assets/icons/info-icons/save-playlist.svg'
// import moreIcon from 'Assets/icons/info-icons/more.svg'

export class PlayerManagement extends React.Component<any> {
    renderLessonsList = () => {
        const { lessons, courseInfo } = this.props;

        return lessons.map(lesson => {
            return (
                <div
                    key={ lesson.id }
                    className={styles.course}
                >
                    <span className={styles.counter}>1</span>
                    <div className={styles.image} />
                    <div className={styles.courseTitle}>
                        { courseInfo.title } — #{lesson.id}
                        {/* <div className={styles.gray}>JavaScript</div> */}
                    </div>
                </div>
            )
        })
    }

    render() {
        const { courseInfo } = this.props;

        return (
            <div className={styles.management}>
                <div className={styles.header}>
                    <div>
                        <div>
                            <div className={styles.title}>
                                { courseInfo.title }
                            </div>
                            {/* <div className={styles.videoTitle}>
                                Javascript - JavaScript 1 видео из 9
                            </div> */}
                        </div>
                        <img src={triangleDown} alt="" />
                    </div>
                    {/* <div className={styles.icons}>
                        <div>
                            <img src={replayIcon} alt="" />
                            <img src={shuffleIcon} alt="" />
                        </div>
                        <div>
                            <img src={savePlaylistIcon} alt="" />
                            <img src={moreIcon} alt="" />
                        </div>
                    </div> */}
                </div>
                <div className={styles.body}>
                    { this.renderLessonsList() }
                </div>
            </div>
        )
    };
}
