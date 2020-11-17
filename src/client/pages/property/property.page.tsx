import React from 'react';

import { Props } from './props';

import { Header, Navigation, Sidebar, Footer, Breadcrumbs, SupportTable } from 'Blocks/index';

import { Button } from 'Components/index';

import styles from './property.module.scss';

export const Property = () => {
    return (
        <div>
            <Header  />
            <div className="layout">
                <Navigation />
                <div className="content">

                    <div className="page">

                        <div className="pageContent">
                            <Breadcrumbs path={["Главное", "CSS справочник"]} />
                     
                            <div className="mt-4 text-heading-2">
                                Cвойство !important
                            </div>

                            <div className="mt-4">
                                <span className="text-body-3">Тип тега:</span>
                                <a href="#" className="link-body-3">Строчные элементы</a>
                            </div>

                            {/* <!-- Video -->
                            <div className="mt-4">
                                <img src="../../../img/video-player.png" alt="Video">
                            </div> */}

                            <div className="mt-4">
                                <Button className="btnGreen" text="Показывать видео" icon="check-icon" />
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
                                Краткая информация
                            </div>

                            <div className="mt-3">
                                {/* <include src='src/templates/components/property-page/property-info-table.html' locals='{
                                    "info": {
                                        "Значение по умолчанию": "Нет",
                                        "Наследуется": "Нет",
                                        "Применяется": "Ко всем элементам",
                                        "Ссылка на спецификацию": "http://www.w3.org/TR/CSS21/cascade.html#important-rules"
                                    }
                                }'></include> */}
                            </div>

                            <div className="mt-5 text-heading-4">
                                Версии CSS"
                            </div>

                            <div className="mt-3">
                                {/* <include src='src/templates/components/property-page/property-version-table.html'></include> */}
                            </div>

                            <div className="mt-5 text-heading-4">
                                Описание
                            </div>

                            <div className="mt-3 text-body-2">
                                Играет роль в том случае, когда пользователи подключают свою собственную таблицу стилей. Если возникает противоречие, когда стиль автора страницы и пользователя для одного и того же элемента не совпадает, то !important позволяет повысить приоритет стиля.
                                <br /><br />
                                При использовании пользовательской таблицы стилей или одновременном применении разного стиля автора и пользователя к одному и тому же селектору, браузер руководствуется следующим алгоритмом.
                                <br />
                                <br />
                                <ul>
                                    <li>!important добавлен в авторский стиль — будет применяться стиль автора.</li>
                                    <li>!important добавлен в пользовательский стиль — будет применяться стиль пользователя.</li>
                                    <li>!important нет как в авторском стиле, так и стиле пользователя — будет применяться стиль автора.</li>
                                    <li>!important содержится в авторском стиле и стиле пользователя — будет применяться стиль пользователя.</li>
                                </ul> 
                                Итог от применения !important в общем случае показан в табл. 1.
                            </div>

                            <div className="mt-3">
                                {/* <include src='src/templates/components/property-page/property-code-table.html'></include> */}
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
                                {/* <include src='src/templates/components/common/illustration.html' locals='{
                                    "imgUrl": "../../../img/illustration-2.png",
                                    "label": "Рис. 2. Сдвиг слоев при уменьшении окна браузера"
                                }'></include> */}
                            </div>

                            <div className="mt-5 text-heading-4">
                                Синтаксис
                            </div>
                            <div className="mt-3">
                                <div className="code">
                                    {"<!DOCTYPE html> <br> <html>"}
                                </div>
                            </div>

                            <div className="mt-5 text-heading-4">
                                Значения
                            </div>
                            <div className="mt-3 text-body-2">
                                У этого свойства нет значений.
                            </div>

                            <div className="mt-5 text-heading-4">
                                Пример
                            </div>

                            <div className="mt-3">
                                <div className="code">
                                    {"<!DOCTYPE html> <br> <html>"}
                                </div>
                            </div>

                            <div className="mt-3 text-body-3">
                                В данном примере для одного селектора задается одно и то же свойство с разными значениями. Но поскольку к первому селектору добавляется !important, то его стиль и будет применяться на странице.
                            </div>

                            <div className="mt-5 text-heading-4">
                                Браузеры
                            </div>
                            <div className="mt-3 text-body-3">
                                При добавлении !important к значению стилевого свойства его важность повышается. Если переопределить значение того же свойства без !important, оно будет игнорироваться браузерами. Но только не в Intenet Explorer версии 6 и ниже.
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
