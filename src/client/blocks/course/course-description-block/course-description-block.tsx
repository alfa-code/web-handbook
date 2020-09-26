import React, { ReactNode } from 'react';
import Hoek from '@hapi/hoek';

import { Button } from 'Src/client/components/button';
import { COURSES_ENDPOINTS } from 'Src/constants/endpoints';

import styles from './course-description-block.module.scss';
import { Heading } from 'Components/heading';
// import resourceImage from 'Assets/icons/other/resource-picture.svg';
// import resourceCode from 'Assets/icons/other/resource-code.svg';
// import resourceLink from 'Assets/icons/other/resource-link.svg';
// import resourceDocument from 'Assets/icons/other/resource-document.svg';
import jsIcon from 'Assets/icons/technologies/js.png';
import clockIcon from 'Assets/icons/info-icons/clock.svg';
import javascriptImage from 'Assets/images/javascript.svg';

type Props = {
    currentCourse: any;
    isAuthenticated: boolean;
    isCourseStarted: boolean;
    currentCourseId: string;
    createUserCourseDA: any;
}

export class CourseDescriptionBlock extends React.PureComponent<Props> {
    renderRegisterBlock = () => {
        return (
            <div>
                <p>
                    Для того чтобы начать курс, войдите пол личным аккаунтом или зарегистрируйтесь.
                </p>
                <Button
                    text="Войти"
                    viewType="secondary"
                    href="/auth"
                    className={ styles.buttonLink }
                />
                <br/>
                <Button
                    text="Зарегистрироваться"
                    viewType="secondary"
                    href="/registration"
                    className={ styles.buttonLink }
                />
            </div>
        )
    }

    startTheCourse = () => {
        const { createUserCourseDA, currentCourseId } = this.props;
        createUserCourseDA(currentCourseId);
    }

    renderStartCourseBlock = () => {
        return (
            <div>
                <Button
                    className={ styles.button }
                    viewType="primary"
                    onClick={ this.startTheCourse }
                >
                    Начать изучение
                </Button>
            </div>
        )
    }

    renderResumeCourseBlock = () => {
        const { currentCourseId } = this.props;

        const href = Hoek.reachTemplate({ course_id: currentCourseId }, COURSES_ENDPOINTS.study);

        return (
            <Button
                text="Продолжить обучение"
                viewType="secondary"
                href={ href }
                className={ styles.button }
            />
        )
    }

    renderRightButtonsBlock = () => {
        const { isAuthenticated, isCourseStarted } = this.props;

        if (!isAuthenticated) {
            return this.renderRegisterBlock();
        }

        if (isCourseStarted) {
            return this.renderResumeCourseBlock();
        }

        return this.renderStartCourseBlock();
    }

    render(): ReactNode {
        const { currentCourse } = this.props;

        return (
            <div className={ styles.body }>
                <div className={ styles.description }>
                    <div className={ styles.subtitle }>
                        { currentCourse.short_description }
                    </div>
                    <div className={ styles.target }>
                        <Heading size={ 2 }>
                            Для кого этот курс
                        </Heading>
                        <p className={styles.paragraph}>
                        { currentCourse.full_description }
                        </p>
                    </div>
                    {/* <div className={ styles.target }>
                        <Heading size={ 2 }>Ресурсы</Heading>
                        <div>
                            <div className={ styles.row }>
                                <div className={ styles.column }>
                                    <div className={styles.imageTitleWrapper}>
                                        <img className={ styles.resourceImage }
                                             src={ resourceImage } alt="" />
                                        Изображение
                                    </div>
                                </div>
                                <div className={ styles.column }>
                                    <div className={styles.imageTitleWrapper}>
                                        <img className={ styles.resourceImage }
                                             src={ resourceCode } alt="" />
                                        Код
                                    </div>
                                </div>
                                <div className={ styles.column }>
                                    <div className={styles.imageTitleWrapper}>
                                        <img className={ styles.resourceImage }
                                             src={ resourceLink } alt="" />
                                        Ссылка
                                    </div>
                                </div>
                            </div>
                            <div className={ styles.row }>
                                <div className={ styles.column }>
                                    <div className={styles.imageTitleWrapper}>
                                        <img className={ styles.resourceImage }
                                             src={ resourceDocument } alt="" />
                                        Ссылка
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className={ styles.target }>
                        <Heading size={ 2 }>Программа курса</Heading>
                        <div className={ styles.videosWrapper }>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                            <div className={ styles.video }>
                                <div className={ styles.wrapper }>
                                    <img className={ styles.jsIcon }
                                         src={ jsIcon } alt="" />
                                    <div>
                                        <div className={ styles.title }>
                                            Знакомство с JavaScript
                                        </div>
                                        <div className={ styles.counter }>
                                            1 урок
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className={ styles.clockIcon }
                                         src={ clockIcon } alt="" />
                                    <span className={ styles.time }>
                                        2:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles.control }>
                    <img className={styles.jsImage} src={ javascriptImage } alt="" />
                    { this.renderRightButtonsBlock() }
                </div>
            </div>
        );
    }
}
