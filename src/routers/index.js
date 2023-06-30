import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/Layouts/DefaultLayout/HeaderOnly';
export const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
];
