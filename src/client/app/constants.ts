export default {
	directoryHTML: {
		title: "HTML справочник",
		description: "Ознакомься с описанием HTML-тегов",
		img: null,
		lists: [
			{
				title: "132",
				subtitle: "123",
				items: [
          {
            title: "!", 
            items: [
							{ text: "<!DOCTYPE>", url: "#" },
							{ text: "<!-- -->", url: "#" }
						]
					},
					{
						title: "A", 
						items: [
							{ text: "<a>", url: "#" },
							{ text: "<abbr>", url: "#" },
							{ text: "<acronym>", url: "#" },
							{ text: "<address>", url: "#" },
							{ text: "<applet>", url: "#" },
							{ text: "<area>", url: "#" },
							{ text: "<article>", url: "#", tag: { text: "HTML5", className: "red"} },
							{ text: "<aside>", url: "#", tag: { text: "HTML5", className: "red"} },
							{ text: "<audio>", url: "#" }
						]
					}
				]
			}
		]
	},
	directoryCSS: {

	},
	themes: [
		{
			title: "Вёрстка",
			recipes: [
				{ 
					text: "Как выровнять слой по центру веб-страницы?",
					url: "#"
				},
				{ 
					text: "Как зафиксировать слой, чтобы он оставался на одном месте при прокрутке страницы?",
					url: "#"
				},
				{ 
					text: "Как разместить два слоя с заданной шириной рядом по горизонтали?",
					url: "#"
				},
				{ 
					text: "Как сделать слой полупрозрачным?",
					url: "#"
				},
				{ 
					text: "Как убрать полосы прокрутки?",
					url: "#"
				},
				{ 
					text: "Почему max-width не работает для таблицы?",
					url: "#"
				}
			]
		},
		{
			title: "Изображения",
			recipes: [
				{ 
					text: "Как убрать панель на изображениях в Internet Explorer 6?",
					url: "#"
				},
			]
		},
		{
			title: "Добавление картинок	",
			recipes: [
				{ 
					text: "Как добавить картинку на веб-страницу?",
					url: "#"
				},
				{ 
					text: "Почему изображение не показывается на сайте?",
					url: "#"
				},
				{ 
					text: "Почему изображения на странице видны только на моем компьютере и не отображаются на другом?",
					url: "#"
				},
				{ 
					text: "Установил путь к рисунку как /images/pic.gif, но рисунок не отображается на веб-странице. Почему?",
					url: "#"
				},
			]
		}
	]
}