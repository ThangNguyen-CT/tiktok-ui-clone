import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import HeaderOnly from '~/Layouts/DefaultLayout/HeaderOnly';
export const publicRouters = [
    { path: '/', component: Home },
    { path: '/profile/:nickname', component: Profile, layout: HeaderOnly },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
