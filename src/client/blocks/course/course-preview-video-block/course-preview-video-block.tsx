import React, { ReactNode } from 'react';

import { VideoInfoBlock } from 'Blocks/video-info-block';
import PlayerBlock from 'Blocks/course/course-preview-video-block/player-block/player-block';

export class CoursePreviewVideoBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <VideoInfoBlock views={98} comments={9}/>
                <PlayerBlock/>
            </React.Fragment>
        );
    }
}
