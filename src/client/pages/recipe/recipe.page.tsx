import React from 'react';

import { Props } from './props';

import { SupportTable } from 'Blocks/index';

// import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import Illustration1 from 'Assets/images/illustration-1.png';
import Illustration2 from 'Assets/images/illustration-2.png';

// import styles from './recipe.module.scss';

import { Alert } from 'Src/client/components';

export const Recipe = ({ title, type }: Props) => {
    return (
        <div className="page">
            <div className="pageContent">
                {/* <BreadcrumbsContainer /> */}

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

                <div className="mt-5 mt-sm-3 text-heading-4">
                    Задача
                </div>

                <div className="mt-3 mt-sm-2 text-body-2">
                    Ограничить максимальную ширину таблицы заданным значением.
                </div>

                <div className="mt-5 mt-sm-3 text-heading-4">
                    Решение
                </div>

                <div className="mt-3 mt-sm-2 text-body-2">
                    Свойство <b>max-width</b> не применяется к тегу <b>&lt; table &gt;</b> . Чтобы задать максимальную ширину таблицы создайте тег &lt; div &gt; с ограничениями и в него включите таблицу с шириной 100% (пример 1).
                </div>

                <div className="mt-5 mt-sm-3 text-heading-5">
                    Пример 1. Использование max-width
                </div>
                <div className="mt-3 mt-sm-2 code">
                    {"<!DOCTYPE html> <br> <html/>"}
                </div>

                <div className="mt-3 mt-sm-2 text-body-2">
                    Результат данного примера показан на рис. 1.
                </div>

                <div className="mt-3 mt-sm-2 illustration">
                    <img src={Illustration1} alt="illustration" />
                    <div className="mt-3 text-body-3">
                        Рис. 1. Слои, располагающиеся по горизонтали с помощью float
                    </div>
                </div>

                <div className="mt-3 mt-sm-2 text-body-2">
                    Данный пример работает только для слоев, у которых ширина задана явно в процентах или пикселах через свойство width. Чтобы обтекание не распространялось дальше на последующие элементы, необходимо применить свойство clear, оно отменяет действие float. В примере для этой цели создается «пустой» элемент ...
                </div>

                <div className="mt-3 mt-sm-2">
                    <Alert message="При уменьшении размеров окна браузера до определенной величины, слои сверстанные по указанной методике перестают располагаться по горизонтали и «перескакивают» вниз друг под друга (рис. 2). Чтобы этого не происходило, воспользуйтесь стилевым свойством min-width." />
                </div>

                <div className="mt-3 mt-sm-2 illustration">
                    <img src={Illustration2} alt="illustration" />
                    <div className="mt-3 text-body-3">
                        Рис. 2. Сдвиг слоев при уменьшении окна браузера
                    </div>
                </div>

                {/* <div className="mt-6">
                        <include src='src/templates/components/common/comments.html'></include>
                    </div> */}

            </div>
        </div>
    );
}
