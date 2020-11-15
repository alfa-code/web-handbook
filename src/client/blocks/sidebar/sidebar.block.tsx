import React from 'react';

import { Props } from './props';

import { Icon, Tag, Button } from 'Components/index';

import styles from './sidebar.module.scss';

const mainSidebar = {
    title: "ПОПУЛЯРНЫЕ РЕЦЕПТЫ",
    items: [
        { icon: "image-icon", text: "Как добавить картинку на веб-страницу?" },
        { icon: "computer-icon", text: "Как добавить иконку сайта в адресную строку браузера?" },
        { icon: "image-icon", text: "Как сделать обтекание картинки текстом?" },
        { icon: "background-icon", text: "Как растянуть фон на всю ширину окна?" },
        { icon: "text-icon", text: "Как сделать обтекание картинки текстом?" },
        { icon: "background-icon", text: "Как растянуть фон на всю ширину окна?" },
        { icon: "image-icon", text: "Как добавить фоновый рисунок на веб-страницу?" },
        { icon: "image-icon", text: "Как выровнять фотографию по центру веб-страницы?" },
        { icon: "list-numbered-icon", text: "Как разместить элементы списка горизонтально?" },
        { icon: "link-icon", text: "Как открыть ссылку в новом окне?" },
        { icon: "image-icon", text: "Как сделать, чтобы картинка менялась при наведении на нее курсора мыши?" },
        { icon: "text-icon", text: "Как изменить расстояние между строками текста?" },
    ]
};
const htmlSidebar = {
    title: "ПОПУЛЯРНЫЕ РЕЦЕПТЫ",
    items: [
        { icon: "image-icon", text: "Как добавить картинку на веб-страницу?" },
        { icon: "computer-icon", text: "Как добавить иконку сайта в адресную строку браузера?" },
        { icon: "image-icon", text: "Как сделать обтекание картинки текстом?" },
        { icon: "background-icon", text: "Как растянуть фон на всю ширину окна?" },
        { icon: "text-icon", text: "Как сделать обтекание картинки текстом?" },
        { icon: "background-icon", text: "Как растянуть фон на всю ширину окна?" },
        { icon: "image-icon", text: "Как добавить фоновый рисунок на веб-страницу?" },
        { icon: "image-icon", text: "Как выровнять фотографию по центру веб-страницы?" },
        { icon: "list-numbered-icon", text: "Как разместить элементы списка горизонтально?" },
        { icon: "link-icon", text: "Как открыть ссылку в новом окне?" },
        { icon: "image-icon", text: "Как сделать, чтобы картинка менялась при наведении на нее курсора мыши?" },
        { icon: "text-icon", text: "Как изменить расстояние между строками текста?" },
    ]
};
const cssSidebar = {
    title: "ПОПУЛЯРНЫЕ РЕЦЕПТЫ",
    items: [
        { icon: "image-icon", text: "Как добавить картинку на веб-страницу?" },
        { icon: "computer-icon", text: "Как добавить иконку сайта в адресную строку браузера?" },
        { icon: "image-icon", text: "Как сделать обтекание картинки текстом?" },
        { icon: "background-icon", text: "Как растянуть фон на всю ширину окна?" },
        { icon: "text-icon", text: "Как сделать обтекание картинки текстом?" },
        { icon: "background-icon", text: "Как растянуть фон на всю ширину окна?" },
        { icon: "image-icon", text: "Как добавить фоновый рисунок на веб-страницу?" },
        { icon: "image-icon", text: "Как выровнять фотографию по центру веб-страницы?" },
        { icon: "list-numbered-icon", text: "Как разместить элементы списка горизонтально?" },
        { icon: "link-icon", text: "Как открыть ссылку в новом окне?" },
        { icon: "image-icon", text: "Как сделать, чтобы картинка менялась при наведении на нее курсора мыши?" },
        { icon: "text-icon", text: "Как изменить расстояние между строками текста?" },
    ]
};

export const Sidebar = (props: Props) => {
    let sidebar = null;
    const key: any = "main";

    console.log('type', props.type)

    switch (key) {
        case "main":
            sidebar = mainSidebar;
            break;
        case "html":
            sidebar = htmlSidebar;
            break;
        case "css":
            sidebar = cssSidebar;
            break;
    }

    return (
        <div className={ styles.pageSide }>
            <div className="text-heading-6">{ sidebar.title }</div>

            { sidebar.items.map((item, i) => {
                return (
                    <a href="#" className={ styles.pageSideItem } key={i}>
                        <Icon className={ styles.svgIcon } size="16" icon={item.icon} />
                        <div className="text-body-3">
                            {item.text}
                        </div>
                    </a>
                )
            })}

             <div className="mt-4 text-heading-6">
                Курсы
            </div>

            <a href="#" className={ styles.pageSideItem }>
                <div className="text-body-3">Основы JavaScript</div>

                <Tag className="green" text="FREE" />
            </a>

            <a href="#" className={ styles.pageSideItem }>
                <div className="text-body-3">Оформление текста</div>
            </a>

            <a href="#" className={ styles.pageSideItem }>
                <div className="text-body-3">Основы HTML 5</div>
            </a>

            <div className={ [styles.pageSidePromoCard, "mt-4"].join(' ') }>
                <div className="text-heading-5">Бесплатная платформа для обучения и подготовки IT специалистов.</div>
                <div className="mt-2">
                    <div className="text-body-3">Краткие, насыщенные информацией видео-курсы.</div>
                </div>

                <div className="mt-3">
                    <Button text="Смотреть сайт" />
                </div>
            </div>
         
            {/* <if condition="type == 'main'">
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "image-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как добавить картинку на веб-страницу?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "computer-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как добавить иконку сайта в адресную строку браузера?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "image-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как сделать обтекание картинки текстом?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "background-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как растянуть фон на всю ширину окна?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "text-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как сделать обтекание картинки текстом?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "background-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как растянуть фон на всю ширину окна?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "image-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как добавить фоновый рисунок на веб-страницу?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "image-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как выровнять фотографию по центру веб-страницы?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "list-numbered-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как разместить элементы списка горизонтально?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "link-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как открыть ссылку в новом окне?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "image-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как сделать, чтобы картинка менялась при наведении на нее курсора мыши?"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "text-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Как изменить расстояние между строками текста?"
                    }'></include>
                </a>
            </if>
            <elseif condition="type == 'html'">
                <include src='src/templates/components/common/typography/text.html' locals='{
                    "class": "text-heading-6",
                    "text": "ТИПЫ ТЕГОВ"
                }'></include>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "html5-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "HTML5"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "block-element-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Блочные элементы"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "line-item-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Строчные элементы"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "build-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Универсальные элементы"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "warning-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Нестандартные теги"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "bug-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Осуждаемые теги"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "video-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Видео"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "file-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Документ"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "volume-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Звук"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "image-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Изображения"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "extension-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Объекты"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "script-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Скрипты"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "list-numbered-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Списки"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "link-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Ссылки"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "table-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Таблицы"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "text-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Текст"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "formatting-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Форматирование"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "forms-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Формы"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "frame-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Фреймы"
                    }'></include>
                </a>
            </elseif>
            <elseif condition="type == 'css'">
                <include src='src/templates/components/common/typography/text.html' locals='{
                    "class": "text-heading-6",
                    "text": "КАТЕГОРИИ CSS"
                }'></include>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "regulation-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "@-правила"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "animation-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Анимация"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "gradient-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Градиент"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "border-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Границы"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "image-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Изображения"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "interface-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Интерфейс"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "content-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Контент"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "line-item-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Отступы"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "print-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Печать"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "position-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Позиционирование"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "fields-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Поля"
                    }'></include>
                </a>
            
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "pseudoclasses-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Псевдоклассы"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "pseudoelements-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Псевдоэлементы"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "dimensions-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Размеры"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "rounded-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Скруглённые уголки"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "list-numbered-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Список"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "table-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Таблица"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "text-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Текст"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "formatting-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Форматирование"
                    }'></include>
                </a>
                
                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "background-color-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Цвет и фон"
                    }'></include>
                </a>

                <a href="#" class="page-side-item">
                    <include src='src/templates/components/common/svg.html' locals='{
                        "size": "16px",
                        "icon": "font-icon"
                    }'></include>
            
                    <include src='src/templates/components/common/typography/text.html' locals='{
                        "class": "text-body-3",
                        "text": "Шрифт"
                    }'></include>
                </a>
            </elseif> */}

        </div>
    );
}
