import React from 'react';
import { Global, css } from '@emotion/core';
import 'normalize.css';

const Theme = ({ children }) => (
    <>
        <Global
            styles={css`
                :root {
                    --serif-font-family: Georgia,"DejaVu Serif",Norasi,serif;
                    --sans-serif-font-family: Verdana,"DejaVu Sans","Bitstream Vera Sans",Geneva,sans-serif;
                }

                BODY {
                    color: #444;
                    font-family: Georgia,"DejaVu Serif",Norasi,serif;
                    font-size: 14px;
                    line-height: 20px;
                }

                A, A:visited, A:hover {
                    color: #660003;
                    text-decoration: none;
                }

                A:hover {
                    color: #990003;
                }

                UL {
                    margin-top: 20px;
                    padding-left: 20px;
                }

                @media screen {
                    .print-only {
                        display: none;
                    }
                }

                @media print {
                    .screen-only {
                        display: none;
                    }
                }

                .page-break {
                    display: block;
                    page-break-before: always;
                }
                BODY {
                    margin: 0 20%;
                }

                @media (max-width: 1280px) {
                    BODY {
                        margin: 0 5%;
                    }

                    .lang-nav {
                        right: 5%;
                        padding-right: 2em;
                    }
                }

                .title {
                    H1 {
                        font-size: 48px;
                        font-weight: 400;
                        font-family: var(--serif-font-family);
                        letter-spacing: 3px;
                        line-height: 48px;
                        margin: 0;
                        padding: 0;
                        text-transform: uppercase;
                    }
                    .tagline {
                        font-size: 17px;
                        font-style: italic;
                        font-family: var(--serif-font-family);
                        letter-spacing: 2px;
                        margin: 0;
                        padding: 0;
                        text-transform: uppercase;

                        SPAN {
                            white-space: nowrap;
                        }
                    }
                }
                .contact {
                    UL {
                        margin: 0;
                        padding: 0;
                        list-style-image: none;
                        list-style-type: none;
                        LI {
                            text-align: right;
                        }
                    }
                    .external-links {
                        A {
                            margin-right: 0.5rem;

                            &:last-child {
                                margin-right: 0;
                            }
                        }

                    }
                }


                .resume-section {
                    H2 {
                        font-family: var(--serif-font-family);
                        font-style: italic;
                        font-weight: 400;
                        margin: 1em 0;
                    }

                    H3 {
                        font-family: var(--sans-serif-font-family);
                        font-weight: 400;
                        margin: 1em 0 0.5em 0;

                        A, A:visited, A:hover {
                            color: #333;
                        }
                    }

                    HEADER {
                        H3 {
                            margin-bottom: 0;
                        }

                        DL {
                            font-size: 12px;
                            margin: 0;
                            DT {
                                display: none;
                            }
                            DD {
                                margin: 0;
                                display: inline-block;
                            }
                            .role:after {
                                content: " - ";
                                white-space: pre;
                            }
                        }
                    }
                    SECTION {
                        margin: 1em 0;
                    }
                }

                .period {
                    .from:after {
                        content: " - ";
                        white-space: pre;
                    }
                }

                .skills {
                    UL {
                        list-style-image: none;
                        list-style-type: none;
                        padding: 0;
                        margin: 0.5em 0;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        grid-auto-rows: auto;

                        LI {
                            font-family: var(--sans-serif-font-family);
                            font-size: 0.8em;
                            margin: 0.5em 0;
                            white-space: nowrap;
                        }
                    }
                }

                FOOTER {
                    overflow: hidden;
                    text-align: center;
                    P {
                        margin: 2em 0;
                    }

                    A {
                        white-space: nowrap;
                    }
                }

                // horizontal rules
                HR {
                    display: block;
                    border-image: none;
                    border: none;
                    border-top: 1px solid #444;
                    margin:2em;
                }

                .resume-section HR {
                    width: 40%;
                    margin-left: auto;
                    margin-right: auto;
                    border-color: #ccc;
                }

                // flag rules
                .flag-icon-background {
                    background-size: contain;
                    background-position: 50%;
                    background-repeat: no-repeat;
                }

                .flag-icon {
                    background-size: contain;
                    background-position: 50%;
                    background-repeat: no-repeat;
                    position: relative;
                    display: inline-block;
                    width: 1.33333333em;
                    line-height: 1em;
                }

                .flag-icon:before {
                    content: "\\00a0";
                }
                .flag-icon.flag-icon-squared {
                    width: 1em;
                }

                .flag-icon-fr {
                    background-image: url(//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/flags/4x3/fr.svg);
                }
                .flag-icon-fr.flag-icon-squared {
                    background-image: url(//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/flags/1x1/fr.svg);
                }

                .flag-icon-gb {
                    background-image: url(//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/flags/4x3/gb.svg);
                }
                .flag-icon-gb.flag-icon-squared {
                    background-image: url(//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/flags/1x1/gb.svg);
                }

                // lang-nav
                .lang-nav {
                    position: absolute;
                    top: 10em;
                    right: 20%;
                    padding-right: 2em;

                    .flag-icon {
                        opacity: 0.4;
                        transition: opacity .5s ease-out;
                        -moz-transition: opacity .5s ease-out;
                        -webkit-transition: opacity .5s ease-out;
                        -o-transition: opacity .5s ease-out;
                        &.active {
                            opacity: 1;
                        }
                        &:hover {
                            opacity: 1;
                        }
                    }
                }

                // Theme color
                ARTICLE {
                    background-color: #f5f5f5;

                    margin-top: 8em;
                    padding-top: 4em;
                    border-top: 8px solid #666;

                    margin-bottom: 4em;
                    padding-bottom: 2em;
                    border-bottom: 4px solid #666;

                    > HEADER, > SECTION {
                        padding: 0 2em;
                    }
                }

                // Layout
                #header {
                    display: grid;
                    grid-template-columns: 3fr 1fr;
                    grid-auto-rows: auto;
                }

                .resume-section {
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                    grid-auto-rows: auto;

                    HEADER {
                        position: relative;
                    }
                }

                .period {
                    position: absolute;
                    top: 0;
                    right: 0;
                }

                @media (max-width: 640px) {
                    BODY {
                        margin: 0;
                    }

                    #header {
                        display: block;
                    }

                    .resume-section {
                        display: block;

                        HEADER {
                                position: relative;
                            }
                        }

                        .lang-nav {
                            top: 1em;
                            right: 0;
                        }

                        .contact UL {
                            margin-top: 1em;

                            LI {
                                text-align: left;
                            }
                        }

                        .skills {
                            UL {
                                display: block;

                                LI {
                                    display: inline-block;
                                }
                                LI:not(:last-child) {
                                    >*:after {
                                        content: ", ";
                                    }
                                }
                            }
                        }

                        .resume-section HEADER DL DD.period {
                            display: block;
                        }
                        .period {
                            position: relative;

                            :not(.from):not(.to) {
                                display: inline-block;
                            }

                            .from:after {
                                content: "";
                            }
                        }
                }
            `}
        />
        { children }
    </>
);

export default Theme;
