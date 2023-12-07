export const SIDE_NAV_ROUTS = [
    {
        item: 'Person',
        route: '/profile'
    },
    {
        item: 'TwitterMobile',
        route: '/'
    },
    {
        item: 'Lists',
        route: '/lists'
    },
    {
        item: 'Bookmarks',
        route: '/bookmarks'
    },
    {
        item: 'Communities',
        route: '/soon'
    },
    {
        item: 'Monetization',
        route: '/soon'
    },
    {
        item: 'Logout',
        route: '/'
    }
]

export const SIDE_NAV_ROUTS_BIG = [
    {
        item: 'Twitter',
        route: '/'
    },
    {
        item: 'Home',
        route: '/'
    },
    {
        item: 'Explore',
        route: '/search'
    },
    {
        item: 'Notifications',
        route: '/notifications'
    },
    {
        item: 'Messages',
        route: '/soon'
    },
    {
        item: 'Lists',
        route: '/lists'
    },
    {
        item: 'Bookmarks',
        route: '/bookmarks'
    },
    {
        item: 'Communities',
        route: '/soon'
    },
    {
        item: 'Monetization',
        route: '/soon'
    },
    {
        item: 'Person',
        route: `/profile`
    },
    {
        item: 'Logout',
        route: '/'
    }
]

export const isDesktop = window.matchMedia('(min-width: 610px)').matches

export const shortSideNav = window.matchMedia('(max-width: 800px)').matches