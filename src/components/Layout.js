/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import Helmet from 'react-helmet';
import classNames from 'classnames';

const Layout = ({ location, children }) => {
    return (
        <Fragment>
            <Helmet>
                <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
                <meta name='viewport' content='width=device-width' />

                <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' type='text/css' charset='utf-8' />
            </Helmet>
            <div
                className='lang-nav screen-only'
            >
                <a
                    href='../en/'>
                    <span
                        className={classNames(
                            'flag-icon', 'flag-icon-gb',
                            {
                                active: location && (location.pathname === '/en/')
                            }
                        )}
                    ></span></a>
                <span css={css`display: inline-block; width: 1rem;`} />
                <a
                    href='../fr/'>
                    <span
                        className={classNames(
                            'flag-icon', 'flag-icon-fr',
                            {
                                active: location && (location.pathname === '/fr/')
                            }
                        )}
                    ></span>
                </a>
            </div>
            {children}
        </Fragment>
    );
};

export default Layout;
