import React, { PureComponent } from "react";

import { MainPageLink } from "Blocks/index";
import { Layout } from "Pages/index";
import HTMLImage1 from "Assets/images/html-directory.svg";
import HTMLImage2 from "Assets/images/html-instruments.svg";
import CSSImage1 from "Assets/images/css-directory.svg";
import CSSImage2 from "Assets/images/css-instruments.svg";
import MainSvg from "Assets/images/main.svg";

import { Props } from "./props";

import styles from "./main.module.scss";

export class Main extends PureComponent<Props> {
    render() {
        return (
            <Layout>
                <div className="page">
                    <div className={styles.mainPageContent}>
                        <div className={styles.mainPageTop}>
                            <img src={MainSvg} alt="Main" />
                            <div className={styles.mainPageTopContent}>
                                <span className="text-heading-2">
                                    Web Handbook
                                </span>
                                <h1 className="text-subheading">
                                    Карманный справочник html элементов, css стилей и других веб технологий.
                                </h1>
                            </div>
                        </div>

                        <div className={styles.mainPageLinks}>
                            <MainPageLink
                                title="HTML справочник"
                                subTitle="Все HTML теги"
                                image={ HTMLImage1 }
                                url="/html-list"
                            />
                            {/* <MainPageLink
                                title="CSS справочник"
                                subTitle="Все свойства"
                                image={CSSImage1}
                                url="#"
                            />

                            <MainPageLink
                                title="HTML рецепты"
                                subTitle="Набор руководств по HTML"
                                image={HTMLImage2}
                                url="#"
                            />

                            <MainPageLink
                                title="CSS рецепты"
                                subTitle="Набор руководств по СSS"
                                image={CSSImage2}
                                url="#"
                            /> */}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
