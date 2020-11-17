import React from 'react';

import { Props } from './props';

import { Header, Navigation, Sidebar, Footer, Breadcrumbs, SupportTable } from 'Blocks/index';


import styles from './recipe.module.scss';
import { Alert } from 'Src/client/components';

export const Recipe = ({title} : Props) => {
    return (
        <div>
            <Header  />
            <div className="layout">
                <Navigation />
                <div className="content">

                    <div className="page">

                        <div className="pageContent">
                            <Breadcrumbs path={["Главное", "HTML рецепты ", "Структура"]} />
                     
                            <div className="mt-4 text-heading-2">
                                {title}
                            </div>

                            <div className="mt-4">
                                <span className="text-body-3">Тема:</span>
                                <a href="#" className="link-body-3">Структура</a>
                            </div>

                            <div className="mt-4">
                                <SupportTable  
                                    ie="1.0+"
                                    chrome="1.0+"
                                    opera="2.0+"
                                    safari="1.0+"
                                    firefox="1.0+"
                                    android="1.0+"
                                    ios="1.0+"
                                 />
                            </div>

                            <div className="mt-5 text-heading-4">
                                Задача
                            </div>

                            <div className="mt-3 text-body-2">
                                Ограничить максимальную ширину таблицы заданным значением.
                            </div>

                            <div className="mt-5 text-heading-4">
                                Решение
                            </div>

                            <div className="mt-3 text-body-2">
                                Свойство <b>max-width</b> не применяется к тегу <b>&lt; table &gt;</b> . Чтобы задать максимальную ширину таблицы создайте тег &lt; div &gt; с ограничениями и в него включите таблицу с шириной 100% (пример 1).
                            </div>

                            <div className="mt-5 text-heading-5">
                                Пример 1. Использование max-width
                            </div>
                            <div className="mt-3 code">
                                {"<!DOCTYPE html> <br> <html/>"}
                            </div>

                            <div className="mt-3 text-body-2">
                                Результат данного примера показан на рис. 1.
                            </div>

                            <div className="mt-3">
                                {/* <include src='src/templates/components/common/illustration.html' locals='{
                                    "imgUrl": "../../../img/illustration-1.png",
                                    "label": "Рис. 1. Слои, располагающиеся по горизонтали с помощью float"
                                }'></include> */}
                            </div>

                            <div className="mt-3 text-body-2">
                                Данный пример работает только для слоев, у которых ширина задана явно в процентах или пикселах через свойство width. Чтобы обтекание не распространялось дальше на последующие элементы, необходимо применить свойство clear, оно отменяет действие float. В примере для этой цели создается «пустой» элемент &lt; div class="clear" &gt;.
                            </div>

                            <div className="mt-3">
                                <Alert message="При уменьшении размеров окна браузера до определенной величины, слои сверстанные по указанной методике перестают располагаться по горизонтали и «перескакивают» вниз друг под друга (рис. 2). Чтобы этого не происходило, воспользуйтесь стилевым свойством min-width." />
                            </div>
                            
                            <div className="mt-3">
                                {/* <include src='src/templates/components/common/illustration.html' locals='{
                                    "imgUrl": "../../../img/illustration-2.png",
                                    "label": "Рис. 2. Сдвиг слоев при уменьшении окна браузера"
                                }'></include> */}
                            </div>

                            {/* <div className="mt-6">
                                <include src='src/templates/components/common/comments.html'></include>
                            </div> */}

                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
