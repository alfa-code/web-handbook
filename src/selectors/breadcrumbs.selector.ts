import { selectPathname } from 'Selectors/index';

import { routes } from 'Constants/index';

export function selectBreadCrumbs(state) {
    const pathname = selectPathname(state);

    if (!pathname || typeof pathname !== 'string') {
        return undefined;
    }

    const splittedPathname = pathname.split('/');
    const filteredSplittedPathname = splittedPathname.filter((item) => {
        return item !== '';
    });

    const breadcrumbs = filteredSplittedPathname.map((crumb, i) => {
        const route = routes[crumb];

        if (!route && filteredSplittedPathname[i - 1] === 'html-list') {
            return {
                name: `Элемент <${crumb}>`,
                url: crumb
            }
        }

        if (!route && filteredSplittedPathname[i - 1] === 'css-list') {
            return {
                name: crumb,
                url: crumb
            }
        }

        if (!route) {
            return undefined;
        }

        return {
            name: route.name,
            url: route.pathPart
        };
    });

    breadcrumbs.forEach((item, i) => {
        if (i >= 1) {
            item.url = pathJoin(breadcrumbs[i - 1].url, item.url);
        }
    });

    return breadcrumbs;
}

function pathJoin(path: string, pathPart: string) {
    return path + '/' + pathPart;
}
