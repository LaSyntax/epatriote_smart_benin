const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'ePatrioteSmartBenin',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
    ],

    base: '/epatriote_smart_benin/',
    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
        nav: [{
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'Github',
                link: 'https://github.com/ePatrioteCreative/epatriote_smart_benin'
            },
            {
                text: 'Pub.Dev',
                link: 'https://pub.dev/packages/epatriote_smart_benin'
            }
        ],
        sidebar: {
            '/guide/': [{
                title: 'Guide',
                collapsable: true,
                children: [
                    '',
                    'department_widget',
                    'city_widget',
                    'distreet_widget',
                    'department_plus_city_widget',
                    'department_plus_city_plus_distreet_widget'
                ]
            }, ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}