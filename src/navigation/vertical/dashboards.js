// ** Icons Import
import {
    Home,
    Circle,
    Users,
    Book,
    Settings,
    Box,
    Archive,
    UserPlus,
    Trello,
    Briefcase,
    BookOpen,
    CreditCard, Clipboard
} from 'react-feather'

export default [
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: <Home size={12}/>,
        navLink: '/dashboard'
    },
    {
        id: 'orders',
        title: 'Orders',
        icon: <CreditCard size={12}/>,
        navLink: '/orders'
    },
    {
        id: 'mainCat',
        title: 'Main category',
        icon: <BookOpen size={12}/>,
        navLink: '/main-category/view',
        children: [
            {
                id: 'viewMainCat',
                title: 'view',
                icon: <Circle size={12}/>,
                navLink: '/main-category/view'
            },
            {
                id: 'orderView',
                title: 'create',
                icon: <Circle size={12}/>,
                navLink: '/main-category/create'
            }
        ]
    },
    {
        id: 'subCat',
        title: 'Sub category',
        icon: <Briefcase size={12}/>,
        navLink: '/sub-category',
        children: [
            {
                id: 'viewSubCat',
                title: 'view',
                icon: <Circle size={12}/>,
                navLink: '/sub-category/view'
            },
            {
                id: 'orderView',
                title: 'create',
                icon: <Circle size={12}/>,
                navLink: '/sub-category/create'
            }
        ]
    }
]
