import React from 'react';

import { Props } from './props';

import { Icon, Tag, Button } from 'Components/index';

import styles from './sidebar.module.scss';

const mainSidebar = {
    title: "ПОПУЛЯРНЫЕ РЕЦЕПТЫ",
    items: [
        {
 icon: "image-icon",
text: "Как добавить картинку на веб-страницу?" 
},
        {
 icon: "computer-icon",
text: "Как добавить иконку сайта в адресную строку браузера?" 
},
        {
 icon: "image-icon",
text: "Как сделать обтекание картинки текстом?" 
},
        {
 icon: "background-icon",
text: "Как растянуть фон на всю ширину окна?" 
},
        {
 icon: "text-icon",
text: "Как сделать обтекание картинки текстом?" 
},
        {
 icon: "background-icon",
text: "Как растянуть фон на всю ширину окна?" 
},
        {
 icon: "image-icon",
text: "Как добавить фоновый рисунок на веб-страницу?" 
},
        {
 icon: "image-icon",
text: "Как выровнять фотографию по центру веб-страницы?" 
},
        {
 icon: "list-numbered-icon",
text: "Как разместить элементы списка горизонтально?" 
},
        {
 icon: "link-icon",
text: "Как открыть ссылку в новом окне?" 
},
        {
 icon: "image-icon",
text: "Как сделать, чтобы картинка менялась при наведении на нее курсора мыши?" 
},
        {
 icon: "text-icon",
text: "Как изменить расстояние между строками текста?" 
},
    ]
};
const htmlSidebar = {
    title: "ТИПЫ ТЕГОВ",
    items: [
        {
 icon: "html5-icon",
text: "HTML5" 
},
        {
 icon: "block-element-icon",
text: "Блочные элементы" 
},
        {
 icon: "line-item-icon",
text: "Строчные элементы" 
},
        {
 icon: "build-icon",
text: "Универсальные элементы" 
},
        {
 icon: "warning-icon",
text: "Нестандартные теги" 
},
        {
 icon: "bug-icon",
text: "Осуждаемые теги" 
},
        {
 icon: "video-icon",
text: "Видео" 
},
        {
 icon: "file-icon",
text: "Документ" 
},
        {
 icon: "volume-icon",
text: "Звук" 
},
        {
 icon: "image-icon",
text: "Изображения" 
},
        {
 icon: "extension-icon",
text: "Объекты" 
},
        {
 icon: "script-icon",
text: "Скрипты" 
},
        {
 icon: "list-numbered-icon",
text: "Списки" 
},
        {
 icon: "link-icon",
text: "Ссылки" 
},
        {
 icon: "table-icon",
text: "Таблицы" 
},
        {
 icon: "text-icon",
text: "Текст" 
},
        {
 icon: "formatting-icon",
text: "Форматирование" 
},
        {
 icon: "forms-icon",
text: "Формы" 
},
        {
 icon: "frame-icon",
text: "Фреймы" 
}
    ]
};
const cssSidebar = {
    title: "КАТЕГОРИИ CSS",
    items: [
        {
 icon: "regulation-icon",
text: "@-правила" 
},
        {
 icon: "animation-icon",
text: "Анимация" 
},
        {
 icon: "gradient-icon",
text: "Градиент" 
},
        {
 icon: "border-icon",
text: "Границы" 
},
        {
 icon: "image-icon",
text: "Изображения" 
},
        {
 icon: "interface-icon",
text: "Интерфейс" 
},
        {
 icon: "content-icon",
text: "Контент" 
},
        {
 icon: "line-item-icon",
text: "Отступы" 
},
        {
 icon: "print-icon",
text: "Печать" 
},
        {
 icon: "position-icon",
text: "Позиционирование" 
},
        {
 icon: "fields-icon",
text: "Поля" 
},
        {
 icon: "pseudoclasses-icon",
text: "Псевдоклассы" 
},
        {
 icon: "pseudoelements-icon",
text: "Псевдоэлементы" 
},
        {
 icon: "dimensions-icon",
text: "Размеры" 
},
        {
 icon: "rounded-icon",
text: "Скруглённые уголки" 
},
        {
 icon: "list-numbered-icon",
text: "Список" 
},
        {
 icon: "table-icon",
text: "Таблица" 
},
        {
 icon: "text-icon",
text: "Текст" 
},
        {
 icon: "formatting-icon",
text: "Форматирование" 
},    
        {
 icon: "background-color-icon",
text: "Цвет и фон" 
},    
        {
 icon: "font-icon",
text: "Шрифт" 
}    
    ]
};

export const Sidebar = ({ type }: Props) => {
    let sidebar = null;
    switch (type) {
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
        </div>
    );
}
