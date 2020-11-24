import { selectBreadCrumbs } from './breadcrumbs.selector';

const testState = {
    router: {
        location: {
            pathname: '/html-list/body'
        }
    }
};

const testBreadcrumbs_1 = [
    {
        name: 'HTML справочник',
        url: '/html-list'
    },
    {
        name: 'Тег <body>',
        url: '/html-list/body'
    }
  ];

test('Test filter html tags function', () => {
    const breadcrumbs = selectBreadCrumbs(testState);
    expect(JSON.stringify(breadcrumbs)).toBe(JSON.stringify(testBreadcrumbs_1));
});
