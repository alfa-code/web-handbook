import React from 'react';

// import { Props } from './props';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import { SupportTable, SpecificationTable } from 'Blocks/index';

// import styles from './attribute.module.scss';
import { Layout } from 'Pages/index';

export const Attribute = () => {
    return (
        <Layout>
            <div className="page">
                <div className="pageContent">
                    <BreadcrumbsContainer />

                    <p>
                        Контент временно отсутствует
                    </p>

                    {/* <div className="mt-4 text-heading-2">
                        Атрибут href
                    </div>

                    <div className="mt-4">
                        <span className="text-body-3">Тип тега: </span>
                        <a href="#" className="link-body-3 ml-1">Строчные элементы</a>
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
                        Задает адрес документа, на который следует перейти. Поскольку в качестве адреса ссылки может использоваться документ любого типа, то результат перехода по ссылке зависит от конечного файла. Так, архивы (файлы с расширением zip или rar) будут сохраняться на локальный диск. По умолчанию новый документ загружается в текущее окно браузера, однако это свойство можно изменить с помощью атрибута target.
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
                        Обязательный атрибут
                    </div>

                    <div className="mt-3 mt-sm-2 text-body-2">
                        Обязателен для ссылок.
                    </div>

                    <div className="mt-5 mt-sm-3 text-heading-4">
                        Значения
                    </div>

                    <div className="mt-3 mt-sm-2 text-body-2">
                        В качестве значения принимается полный или относительный путь к файлу.
                    </div>

                    <div className="mt-5 mt-sm-3 text-heading-4">
                        Значения по умолчанию
                    </div>

                    <div className="mt-3 mt-sm-2 text-body-2">
                        Нет.
                    </div>

                    <div className="mt-5 mt-sm-3 text-heading-4">
                        Пример
                    </div>

                    <div className="mt-3 mt-sm-2">
                        <div className="code">
                            {"<!DOCTYPE html> <br> <html>"}
                        </div>
                    </div> */}

                    {/* <div className="mt-6">
                        <include src='src/templates/components/common/comments.html'></include>
                    </div>
                    */}
                </div>
            </div>
        </Layout>
    );
}
