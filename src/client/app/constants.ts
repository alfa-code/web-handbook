import htmlDirectory from 'Assets/images/html-directory.svg';

export default {
	directoryHTML: {
		title: "HTML справочник",
		description: "Ознакомься с описанием HTML-тегов",
		img: htmlDirectory,
		lists: [
			{
				title: "",
				subtitle: "",
				items: [
          {
            title: "!", 
            items: [
							{
 text: "<!DOCTYPE>",
url: "#" 
},
							{
 text: "<!-- -->",
url: "#" 
}
						]
					},
					{
						title: "A", 
						items: [
							{
 text: "<a>",
url: "#" 
},
							{
 text: "<abbr>",
url: "#" 
},
							{
 text: "<acronym>",
url: "#" 
},
							{
 text: "<address>",
url: "#" 
},
							{
 text: "<applet>",
url: "#" 
},
							{
 text: "<area>",
url: "#" 
},
							{
 text: "<article>",
url: "#",
tag: {
 text: "HTML5",
className: "red" 
} 
},
							{
 text: "<aside>",
url: "#",
tag: {
 text: "HTML5",
className: "red" 
} 
},
							{
 text: "<audio>",
url: "#" 
}
						]
					}
				]
			}
		]
	},
	directoryCSS: {},
	themes: [
		{
			title: "Вёрстка",
			url: "/recipes/theme",
			type: "html",
			recipes: [
				{ 
					text: "Как выровнять слой по центру веб-страницы?",
					url: "/recipes/theme/recipe",
					type: "html",
					description: "Перед тем как убрать полосы прокрутки с веб-страницы, подумайте, действительно ли вам это так необходимо. Отсутствие возможности прокрутки содержимого документа создает трудности посетителям сайта для просмотра информации. Если же существует острая необходимость построения дизайнерских изысков или желание создать своим читателям трудности, то вперед. Но вас предупреждали!"
				},
				{ 
					text: "Как зафиксировать слой, чтобы он оставался на одном месте при прокрутке страницы?",
					url: "/recipes/theme/recipe",
					description: "Свойство max-width не применяется к тегу <table>. Чтобы задать максимальную ширину таблицы создайте тег <div> с ограничениями и в него включите таблицу с шириной 100% (пример 1)."
				},
				{ 
					text: "Как разместить два слоя с заданной шириной рядом по горизонтали?",
					url: "/recipes/theme/recipe",
					description: "Для изменения степени прозрачности элемента применяется стилевое свойство opacity со значением от 0 до 1, где 0 соответствует полной прозрачности, а 1, наоборот, непрозрачности объекта. В браузере Internet Explorer это свойство не работает, поэтому специально для него приходится использовать filter, свойство, не входящее в спецификацию CSS. В примере 1 показано, как установить прозрачность слоя для всех браузеров."
				},
				{ 
					text: "Как сделать слой полупрозрачным?",
					url: "/recipes/theme/recipe",
					description: "Слой, создаваемый через тег <div>, является блочным элементом веб-страницы. Это означает, что по ширине слой занимает все доступное пространство и всегда начинается с новой строки. Поэтому ограничение ширины слоев никак не приведет к тому, что блоки станут располагаться рядом. Для нашей цели следует воспользоваться стилевым свойством float со значением left. Это свойство превращает блочный элемент в плавающий, что в свою очередь приводит к выравниванию слоя по левому краю и его обтеканию другими элементами по правому краю. На деле же слои при подобной манипуляции выстраиваются не друг под другом как обычно, а рядом по горизонтали. Но только в том случае, когда ширина слоев задана через свойство width."
				},
				{ 
					text: "Как убрать полосы прокрутки?",
					url: "/recipes/theme/recipe",
					description: "«Замораживание» слоя в определённом месте веб-страницы происходит с помощью стилевого свойства position со значением fixed. При этом положение слоя не меняется даже при прокрутке страницы с помощью скроллинга. Сами координаты слоя задаются через свойства left, right, top и bottom, которые соответственно определяют положение от левого, правого, верхнего и нижнего края окна браузера."
				},
				{ 
					text: "Почему max-width не работает для таблицы?",
					url: "/recipes/theme/recipe",
					description: "По умолчанию ширина слоя принимает значение auto, и слой, как правило, занимает всю доступную ширину. Поэтому описанным методом по центру можно выровнять только такой слой, у которого явно задана ширина в процентах или пикселах. После чего к стилю слоя следует добавить отступ слева (стилевое свойство margin-left) и справа (margin-right) со значением auto. Впрочем, также можно воспользоваться универсальным свойством margin со значением 0 auto. Первое значение задает нулевой отступ сверху и снизу от слоя, а второй — автоматический слева и справа (пример 1)."
				}
			]
		},
		{
			title: "Изображения",
			url: "/recipes/theme",
			recipes: [
				{ 
					text: "Как убрать панель на изображениях в Internet Explorer 6?",
					url: "/recipes/theme/recipe"
				},
			]
		},
		{
			title: "Добавление картинок	",
			url: "/recipes/theme",
			recipes: [
				{ 
					text: "Как добавить картинку на веб-страницу?",
					url: "/recipes/theme/recipe"
				},
				{ 
					text: "Почему изображение не показывается на сайте?",
					url: "/recipes/theme/recipe"
				},
				{ 
					text: "Почему изображения на странице видны только на моем компьютере и не отображаются на другом?",
					url: "/recipes/theme/recipe"
				},
				{ 
					text: "Установил путь к рисунку как /images/pic.gif, но рисунок не отображается на веб-странице. Почему?",
					url: "/recipes/theme/recipe"
				},
			]
		}
	],
	tagTypes: {
		title: "HTML5",
		types: [
			{
 type: "Тег <article>",
description: "Определяет содержание сайта вроде новости, статьи, записи блога, форума или др." 
},
			{
 type: "Тег <aside>",
description: "Определяет блок сбоку от контента для размещения рубрик, ссылок на архив, меток и другой информации." 
},
			{
 type: "Тег <audio>",
description: "Добавляет, воспроизводит и управляет настройками аудиозаписи на веб-странице." 
},
			{
 type: "Тег <bdi>",
description: "Указывает фрагмент текста, который должен быть изолирован от изменения направления вывода текста." 
},
			{
 type: "Тег <canvas>",
description: "Создает область, в которой при помощи JavaScript можно рисовать разные объекты, выводить изображения, трансформировать их и менять свойства." 
},
			{
 type: "Тег <command>",
description: "Создает команду в виде переключателя, флажка или обычной кнопки." 
},
			{
 type: "Тег <article>",
description: "Определяет содержание сайта вроде новости, статьи, записи блога, форума или др." 
},
			{
 type: "Тег <aside>",
description: "Определяет блок сбоку от контента для размещения рубрик, ссылок на архив, меток и другой информации." 
},
			{
 type: "Тег <audio>",
description: "Добавляет, воспроизводит и управляет настройками аудиозаписи на веб-странице." 
},
			{
 type: "Тег <bdi>",
description: "Указывает фрагмент текста, который должен быть изолирован от изменения направления вывода текста." 
},
			{
 type: "Тег <canvas>",
description: "Создает область, в которой при помощи JavaScript можно рисовать разные объекты, выводить изображения, трансформировать их и менять свойства." 
},
			{
 type: "Тег <command>",
description: "Создает команду в виде переключателя, флажка или обычной кнопки." 
},
		]
	}
}