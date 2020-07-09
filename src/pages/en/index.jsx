import React from 'react';
import Helmet from 'react-helmet';

import Theme from '../../components/Theme.js';
import Layout from '../../components/Layout.js';

const IndexEnPage = ({ location }) => (
    <Theme>
        <Helmet>
            <title>Stéphane Klein Resume | Full Stack Developer, Devops Engineer, Web Architect, Open-Source Enthusiast</title>
        </Helmet>
        <Layout location={ location }>
            <article>
                <header id='header'>
                    <section className='title'>
                        <h1>Stéphane Klein</h1>
                        <p className='tagline'><span>Full Stack Developer,</span> <span>Devops Engineer</span></p>
                    </section>
                    <section className='contact'>
                        <ul>
                            <li>37 years live in <a href='http://fr.wikipedia.org/wiki/Paris'>Paris</a></li>
                            <li>
                                <a href='mailto:contact@stephane-klein.info'>contact@stephane-klein.info</a>
                            </li>
                            <li><a href='http://stephane-klein.info'>http://stephane-klein.info</a></li>
                            <li><a href='tel:33661487604'>(+33) 6 61 48 76 04</a></li>
                            <li className='external-links'>
                                <a href='https://twitter.com/klein_stephane' title='Twitter'><i className='fa fa-twitter' aria-hidden='true'></i></a>
                                <a href='https://github.com/harobed' title='GitHub'><i className='fa fa-github' aria-hidden='true'></i></a>
                                <a href='https://www.linkedin.com/in/stephanekleinfrommetz/' title='Linkedin'><i className='fa fa-linkedin' aria-hidden='true'></i></a>
                            </li>
                        </ul>
                    </section>
                </header>

                <hr />

                <section className='resume-section abstract'>
                    <header><h2>Abstract</h2></header>
                    <div>
                        <p>15 years experience in development and system administration.<br /> Expert in OpenSource software, especially Web system (frontend and backend).<br /> Skills in Software architecture and project management.<br /> I perform technological watch and
                        track best practices every day.<br /> I love challenging projects.</p>
                    </div>
                </section>

                <hr />

                <section className='resume-section skills'>
                    <header><h2>Main skills</h2></header>

                    <div>
                        <section>
                            <h3>Front End Web</h3>

                            <ul>
                                <li><span>Angular.JS</span></li>
                                <li><span>Vue.JS</span></li>
                                <li><span>React.js</span></li>
                                <li><span>cutting edge HTML5 and CSS3 techniques</span></li>
                            </ul>
                        </section>

                        <section>
                            <h3>Back End Web</h3>

                            <ul>
                                <li><span>Python (Flask, aiohttp)</span></li>
                                <li><span>Golang</span></li>
                                <li><span>NodeJS</span></li>
                            </ul>
                        </section>

                        <section>
                            <h3>DevOps</h3>

                            <ul>
                                <li><span>Debian</span></li>
                                <li><span>Docker</span></li>
                                <li><span>Ansible</span></li>
                                <li><span>Kubernetes</span></li>
                            </ul>
                        </section>
                    </div>
                </section>
                <hr />

                <section className='resume-section experiences'>
                    <header><h2>Experiences</h2></header>

                    <div>
                        <section>
                            <header>
                                <h3><a href='https://www.scaleway.com/'>Scaleway</a></h3>
                                <dl>
                                    <dt>Role</dt>
                                    <dd className='role'>DevOps, Product Owner</dd>

                                    <dt>Location</dt>
                                    <dd className='location'><a href='https://fr.wikipedia.org/wiki/Paris'>Paris</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span className='to'>Since January 2018</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p>Stack and tools:</p>

                                <p>Ubuntu, Golang (grpc, genproto, sqlx, cobra/viper, logrus...), gRPC and Protobuf, Vagrant, Docker, Ansible, GitLab CI/CD, Some Bash for scripting, Packer, iPXE, TFTP (<a href='https://github.com/tftp-go-team/hooktftp'>Hooktftp</a>), DHCP Server, PostgreSQL, <a href='https://github.com/golang-migrate/migrate'>Migrate</a>, Minio, Sentry...</p>

                                <p>Process:</p>

                                <ul>
                                    <li>We follow <a href='https://nvie.com/posts/a-successful-git-branching-model/'>Gitflow workflow</a></li>
                                    <li>Merge Request + review for each patch</li>
                                    <li>Document all in Markdown incrementally</li>
                                    <li><a href='https://about.gitlab.com/handbook/communication/#everything-starts-with-an-issue'>Everything starts with an issue</a></li>
                                    <li>We use mock components to integrate our components with other team components</li>
                                </ul>
                            </div>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3><a href='https://gemnasium.com'>Gemnasium</a></h3>
                                <dl>
                                    <dt>Role</dt>
                                    <dd className='role'>Full-Stack Developer</dd>

                                    <dt>Location</dt>
                                    <dd className='location'><a href='https://37signals.com/remote'>Full remote</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span className='from'>June 2017</span><span>&nbsp;to&nbsp;</span><span className='to'>December 2017</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='https://gemnasium.com'>Gemnasium</a> monitors software dependencies, notifies users of security updates or advisories and automates source code updates. Tens of thousands of users trust Gemnasium to identify and address known vulnerabilities
                                in open source software. Gemnasium works with Ruby, NPM, PHP, Python, Bower and Java.</p>
                            </div>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3><a href='http://tech-angels.com/'>Tech-Angels</a></h3>
                                <dl>
                                    <dt>Role</dt>
                                    <dd className='role'>IT System Administrator / Devops Engineer</dd>

                                    <dt>Location</dt>
                                    <dd className='location'><a href='https://37signals.com/remote'>Full remote</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>From&nbsp;</span><span className='from'>January 2016</span><span>&nbsp;to&nbsp;</span><span className='to'>June 2017</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='http://tech-angels.com'>Tech-Angels</a> is a software company which develop and operate <a href='https://gemnasium.com'>Gemnasium</a> product and provide web hosting IT managed services.</p>

                                <p>Environment:</p>

                                <ul>
                                    <li>Languages: Python, Go</li>
                                    <li>OS: Debian, Red Hat Atomic Host</li>
                                    <li>Configuration management: Ansible, Puppet</li>
                                    <li>Cluster management software: OpenShift (based on Docker and Kubernetes)</li>
                                    <li>Distributed object store: Ceph</li>
                                    <li>Version Control Systems: git</li>
                                    <li>Tools: GitLab, Vagrant</li>
                                    <li>Aggregated centralized logs: Fluenli, ElasticSearch, Kibana</li>
                                </ul>
                            </div>
                        </section>

                        <hr className='screen-only' />

                    </div>
                </section>

                <div className='page-break'></div>

                <section className='resume-section experiences'>
                    <header><h2 className='print-only'>Experiences</h2></header>

                    <div>
                        <section className='job'>
                            <header>
                                <h3><a href='http://www.bearstech.com'>Bearstech</a></h3>
                                <dl>
                                    <dt>Role</dt>
                                    <dd className='role'>R&amp;D Developer</dd>

                                    <dt>Location</dt>
                                    <dd className='location'><a href='https://37signals.com/remote'>Full remote</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>From&nbsp;</span><span className='from'>August 2012</span><span>&nbsp;to&nbsp;</span><span className='to'>January 2016</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='https://bearstech.com/'>Bearstech</a> is an engineers worker cooperative expert on IT managed services provider, web hosting and application development.</p>

                                <p>Environment:</p>

                                <ul>
                                    <li>Languages: Python, Go, Lua, Ruby</li>
                                    <li>Framework: Django, Pyramid (Python)</li>
                                    <li>Databases : Mysql, SQLite, Redis</li>
                                    <li>Front-end web: Bootstrap, Bower, SCSS, AngularJS, Flot, Gulp</li>
                                    <li>HTTP Server: Nginx + Lua</li>
                                    <li>Version Control Systems: git</li>
                                    <li>Configuration management: Ansible</li>
                                    <li>Tools: Jenkins, LXC, Vagrant and Vagrant-lxc</li>
                                </ul>
                            </div>
                        </section>

                        <hr />

                        <section className='job'>
                            <header>
                                <h3><a href='http://www.homeloc.com'>Homeloc</a></h3>
                                <dl>
                                    <dt>Role</dt>
                                    <dd className='role'>Lead Full Stack Developer</dd>

                                    <dt>Location</dt>
                                    <dd className='location'><a href='https://en.wikipedia.org/wiki/Paris'>Paris</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>From&nbsp;</span><span className='from'>June 2012</span><span>&nbsp;to&nbsp;</span><span className='to'>July 2012</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p>Homeloc is a startup of 10 employees, the first French multiposting service for vacation rentals.</p>

                                <p>Environment:</p>
                                <ul>
                                    <li>Languages: Python</li>
                                    <li>Framework: Tornado (Python)</li>
                                    <li>Databases: MongoDB</li>
                                    <li>Version Control Systems: git</li>
                                </ul>
                            </div>
                        </section>

                        <hr />

                        <section className='job'>
                            <header>
                                <h3><a href='http://www.is-webdesign.com'>isWebdesign</a></h3>
                                <dl>
                                    <dt>Role</dt>
                                    <dd className='role'>Lead Full Stack Developer / IT System Administrator</dd>

                                    <dt>Location</dt>
                                    <dd className='location'><a href='https://en.wikipedia.org/wiki/Metz'>Metz</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>From&nbsp;</span><span className='from'>January 2006</span><span>&nbsp;to&nbsp;</span><span className='to'>June 2012</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p>isWebdesign is a Web agency based in Metz. The company offers graphic design and development services to serve corporations and governmental organizations digital strategies.</p>
                            </div>
                        </section>
                    </div>
                </section>

                <hr />

                <section className='resume-section education'>
                    <header><h2>Education</h2></header>

                    <div>
                        <section>
                            <header>
                                <h3>Summer Lion Session</h3>
                                <dl>
                                    <dt>Period</dt>
                                    <dd className='period'><span className='to'>Summer 2017</span></dd>
                                </dl>
                            </header>

                            <p>I attended a Summer Lion Session at <a href=''>TheFamily</a> during which I had received training on startup culture <a href='https://joinlion.co/a-propos'>(more information about Lion formation)</a>.</p>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3>DEUST NTIC</h3>
                                <dl>
                                    <dt>Period</dt>
                                    <dd className='period'><span>From&nbsp;</span><span className='from'>1999</span><span>&nbsp;to&nbsp;</span><span className='to'>2001</span></dd>
                                </dl>
                            </header>

                            <p>Metz University Computer Science Certificate</p>
                        </section>
                    </div>
                </section>

                <hr />

                <footer>
                    <p>
                        <a rel='author' href='http://stephane-klein.info'>Stéphane Klein</a> &mdash;
                        <a rel='author' href='mailto:contact@stephane-klein.info'>contact@stephane-klein.info</a> &mdash;
                        <a rel='author' href='tel:33661487604'>(+33) 6 61 48 76 04</a>
                    </p>
                </footer>
            </article>
        </Layout>
    </Theme>
);

export default IndexEnPage;
