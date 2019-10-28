import React, { Component } from "react";

import { Definition } from "Components/common/definition";

import styles from "./our-curses-block.pcss";

export class OurCursesBlock extends Component {
    render() {
        return (
            <div className={styles.ourCurses}>
                <Definition
                    title="Наши курсы"
                    titleSize={2}
                    text="Учим лучшим практикам, техникам и приёмам, которые передаются от профессионала к профессионалу."
                    position="center"
                />
            </div>
        );
    }
}
