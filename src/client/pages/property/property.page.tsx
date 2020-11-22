import React from 'react';

// import { Props } from './props';

import { Sidebar, Breadcrumbs, SupportTable, PropertyInfoTable, PropertyVersionTable, PropertyCodeTable } from 'Blocks/index';

import VideoImg from "Assets/images/video-player.png";
import Illustration1 from 'Assets/images/illustration-1.png';
import Illustration2 from 'Assets/images/illustration-2.png';

import { Button } from 'Components/index';

// import styles from './property.module.scss';

import { Layout } from 'Pages/index';

export const Property = () => {
    return (
        <Layout>
            <div className="page">
                <div className="pageContent">
                    <Breadcrumbs path={["Главное", "CSS справочник"]} />

                    <div className="mt-4 text-heading-2">
                        Cвойство !important
                    </div>

                    <div className="mt-4">
                        <span className="text-body-3">Тип тега: </span>
                        <a href="#" className="link-body-3">Строчные элементы</a>
                    </div>

                    <div className="mt-4">
                        <img src={VideoImg} alt="Video" />
                    </div>

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
                        <PropertyInfoTable info={[
                            {
 title: "Значение по умолчанию",
value: "Нет"
},
                            {
 title: "Наследуется",
value: "Нет"
},
                            {
 title: "Применяется",
value: "Ко всем элементам"
},
                            {
 title: "Ссылка на спецификацию",
value: "http://www.w3.org/TR/CSS21/cascade.html#important-rules"
}
                        ]} />
                    </div>

                    <div className="mt-5 text-heading-4">
                        Версии CSS
                    </div>

                    <div className="mt-3">
                        <PropertyVersionTable />
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
                        <PropertyCodeTable />
                    </div>

                    <div className="mt-3 mt-sm-2 illustration">
                        <img src={Illustration1} alt="illustration" />
                        <div className="mt-3 text-body-3">
                            Рис. 1. Слои, располагающиеся по горизонтали с помощью float
                        </div>
                    </div>

                    <div className="mt-3 mt-sm-2 text-body-2">
                        Данный пример работает только для слоев, у которых ширина задана явно в процентах или пикселах через свойство width. Чтобы обтекание не распространялось дальше на последующие элементы, необходимо применить свойство clear, оно отменяет действие float. В примере для этой цели создается «пустой» элемент
                    </div>


                    <div className="mt-3 mt-sm-2 illustration">
                        <img src={Illustration2} alt="illustration" />
                        <div className="mt-3 text-body-3">
                            Рис. 2. Сдвиг слоев при уменьшении окна браузера
                        </div>
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
                <Sidebar type="css" />
                </div>
        </Layout>
    );
}
