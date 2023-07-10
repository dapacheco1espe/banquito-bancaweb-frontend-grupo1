/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'home',
        title   : 'Home',
        tooltip : 'Inicio',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link    : '/client'
    },
    {
        id      : 'products',
        title   : 'Productos',
        tooltip : 'Productos',
        type    : 'aside',
        icon    : 'feather:shopping-bag',
        children: [
            {
                id      : 'cuentas',
                title   : 'Cuentas',
                tooltip : 'Cuentas',
                type    : 'basic',
                icon    : 'heroicons_outline:academic-cap',
                link    : '/client/account'
            },
            {
                id      : 'payments',
                title   : 'Pagos',
                tooltip : 'Pagos',
                type    : 'basic',
                icon    : 'heroicons_outline:currency-dollar',
                //link    : '/account-operations'
            },
            // {
            //     id      : 'history',
            //     title   : 'Historial de transancciones',
            //     tooltip : 'Historial de transacciones',
            //     type    : 'basic',
            //     icon    : 'heroicons_outline:document-text',
            //     //link    : '/account-history'
            // }
        ]
    },

];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
