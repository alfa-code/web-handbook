import { getHtmlTagsListByAlphabet } from './html';

const example = {
    "a": ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio"],
    "b": ["b", "base", "basefont", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button"],
    "c": ["canvas", "caption", "center", "cite", "code", "col", "colgroup", "comment"],
    "d": ["datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt"],
    "e": ["em", "embed"],
    "f": ["fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset"],
    "g": [],
    "h": ["h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html"],
    "i": ["i", "iframe", "img", "input", "ins"],
    "j": [],
    "k": ["kbd", "keygen"],
    "l": ["label", "legend", "li", "link"],
    "m": ["main", "map", "mark", "menu", "menuitem", "meta", "meter"],
    "n": ["nav", "noframes", "noscript"],
    "o": ["object", "ol", "optgroup", "option", "output"],
    "p": ["p", "param", "pre", "progress"],
    "q": ["q"],
    "r": ["rp", "rt", "ruby"],
    "s": ["s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup"],
    "t": ["table", "tbody", "td", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt"],
    "u": ["u", "ul"],
    "v": ["var", "video"],
    "w": ["wbr"],
    "x": [],
    "y": [],
    "z": [] 
};

test('Test filter html tags function', () => {
    const result = getHtmlTagsListByAlphabet();
    expect(JSON.stringify(result)).toBe(JSON.stringify(example));
});
