import React from 'react';

// import { Props } from './props';

import { Button } from 'Components/index';

import { Sidebar, Breadcrumbs, SupportTable, SpecificationTable, AttributesTable } from 'Blocks/index';

import VideoImg from "Assets/images/video-player.png";

// import styles from './tag.module.scss';
import { Layout } from 'Pages/index';

export const Tag = () => {
    return (
        <Layout>
            <div className="page">
                <div className="pageContent">
                    <Breadcrumbs path={["Главное", "HTML справочник ", "Тег <a>"]} />
                    
                    <div className="mt-4 text-heading-2">
                        Тег &lt; a &gt;
                    </div>

                    <div className="mt-4">
                        <span className="text-body-3">Тип тега:</span>
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

                    <div className="mt-5 mt-sm-3 text-heading-4">
                        Cпецификация
                    </div>

                    <div className="mt-3 mt-sm-2">
                        <SpecificationTable 
                            html={["3.2", "4.01", "5.0"]} 
                            xhtml={["1.0", "1.1"]} />
                    </div>

                    <div className="mt-5 mt-sm-3 text-heading-4">
                        Описание
                    </div>

                    <div className="mt-3 mt-sm-2 text-body-2">
                        Тег &lt; a &gt; является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег &lt; a &gt; устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы. <br /><br/>
                        Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку. В качестве значения атрибута href используется адрес документа (URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход. Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо от имени сайта или веб-страницы, где прописана ссылка. Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.
                    </div>

                    <div className="mt-5 mt-sm-3 text-heading-4">
                        Синтаксис
                    </div>
                    <div className="mt-3 mt-sm-2">
                        <div className="code">
                            {"<!DOCTYPE html> <br> <html>"}
                        </div>
                    </div>

                    <div className="mt-5 mt-sm-3 text-heading-4">
                        Атрибуты
                    </div>

                    <div className="mt-3 mt-sm-2">
                        <AttributesTable
                            attributes={[
                                {
 title: "accesskey",
description: "Активация ссылки с помощью комбинации клавиш." 
},
                                {
 title: "coords",
description: "Устанавливает координаты активной области." 
},
                                {
 title: "download",
description: "Предлагает скачать указанный по ссылке файл." 
},
                                {
 title: "href",
description: "Задает адрес документа, на который следует перейти." 
},
                                {
 title: "hreflang",
description: "Идентифицирует язык текста по ссылке." 
},
                                {
 title: "name",
description: "Устанавливает имя якоря внутри документа." 
},
                                {
 title: "rel",
description: "Отношения между ссылаемым и текущим документами." 
},
                                {
 title: "rev",
description: "Отношения между текущим и ссылаемым документами." 
},
                                {
 title: "shape",
description: "Задает форму активной области ссылки для изображений." 
},
                                {
 title: "tabindex",
description: "Определяет последовательность перехода между ссылками при нажатии на кнопку Tab." 
},
                                {
 title: "target",
description: "Имя окна или фрейма, куда браузер будет загружать документ." 
},
                                {
 title: "title",
description: "Добавляет всплывающую подсказку к тексту ссылки." 
},
                                {
 title: "type",
description: "Указывает MIME-тип документа, на который ведёт ссылка." 
}
                            ]}
                        />
                    </div>

                    <div className="mt-5 mt-sm-3 text-heading-4">
                        Закрывающий тег
                    </div>

                    <div className="mt-3 mt-sm-2 text-body-2">
                        Обязателен.
                    </div>

                    <div className="mt-5 mt-sm-3 text-heading-4">
                        Пример
                    </div>

                    <div className="mt-3 mt-sm-2">
                        <div className="code">
                            {"<!DOCTYPE html> <br> <html>"}
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        {/* <include src='src/templates/components/common/comments.html'></include> */}
                    </div>
                </div>
                <Sidebar type="html" />
            </div>
        </Layout>
    );
}
