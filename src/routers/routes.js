import config from '~/configs';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import HeaderOnly from '~/layouts/DefaultLayout/HeaderOnly';
export const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];
