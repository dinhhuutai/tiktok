import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import image from '~/assets/images/index.js';
import style from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import {
    BoardIcon,
    HelpIcon,
    LanguageIcon,
    LogoutIcon,
    MailboxIcon,
    MenuIcon,
    MessageIcon,
    PlusIcon,
    SettingIcon,
    UserNameIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <BoardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserNameIcon />,
            title: 'Xem hồ sơ',
            to: '/@tai',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={image.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button upload href="./" leftIcon={<PlusIcon />}>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            {/* // Using a wrapper <div> or <span> tag around the reference
                            // element solves this by creating a new parentNode context. */}
                            <span>
                                <Tippy interactive delay={[0, 70]} content="Tin nhắn" placement="bottom">
                                    <button style={{ marginLeft: 12 }} className={cx('action-btn')}>
                                        <MessageIcon width="2.6rem" height="2.6rem" />
                                    </button>
                                </Tippy>
                            </span>

                            <span>
                                <Tippy interactive delay={[0, 70]} content="Hộp thư" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MailboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </span>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1678520746753026.jpeg?x-expires=1661335200&x-signature=KcnFn5qytov56b%2FaF3EfBkwe5%2Bc%3D"
                                alt="Dinh Huu Tai"
                                fallback=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MenuIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
