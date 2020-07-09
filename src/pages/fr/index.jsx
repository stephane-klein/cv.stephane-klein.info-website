import React from 'react';
import Helmet from 'react-helmet';

import Theme from '../../components/Theme.js';
import Layout from '../../components/Layout.js';

const IndexEnPage = ({ location }) => (
    <Theme>
        <Helmet>
            <title>Curriculum vitæ de Stéphane Klein | CV | Développeur fullstack, DevOps, Administrateur Système | 15 ans d'expérience</title>
        </Helmet>
        <Layout location={location}>
            <article>
                <header id='header'>
                    <section className='title'>
                        <h1>Stéphane Klein</h1>
                        <p className='tagline'><span>Développeur fullstack,</span> <span>DevOps</span></p>
                    </section>
                    <section className='contact'>
                        <ul>
                            <li>37 ans, célibataire<br /> non fumeur, réside à <a href='http://fr.wikipedia.org/wiki/Paris'>Paris</a></li>
                            <li>
                                <a href='mailto:contact@stephane-klein.info'>contact@stephane-klein.info</a>
                            </li>
                            <li><a href='http://stephane-klein.info'>http://stephane-klein.info</a></li>
                            <li><a href='tel:33661487604'>(+33) 6 61 48 76 04</a></li>
                            <li className='screen-only external-links'>
                                <a href='https://twitter.com/klein_stephane' title='Twitter'><i className='fa fa-twitter' aria-hidden='true'></i></a>
                                <a href='https://github.com/harobed' title='GitHub'><i className='fa fa-github' aria-hidden='true'></i></a>
                                <a href='https://www.linkedin.com/in/stephanekleinfrommetz/' title='Linkedin'><i className='fa fa-linkedin' aria-hidden='true'></i></a>
                            </li>
                        </ul>
                    </section>
                </header>

                <hr />

                <section className='resume-section abstract'>
                    <header><h2>Profil</h2></header>
                    <div>
                        <p>15 ans d'expérience en développement et en administration système.<br /> Spécialisé dans les technologies open-source, en particulier Web, frontend et backend.<br /> Compétences en <a href='http://fr.wikipedia.org/wiki/Architecture_logicielle'>architecture logicielle</a>        et en gestion de projets.<br /> Passionné, pratique constante de veilles technologiques.</p>
                    </div>
                </section>

                <hr />

                <section className='resume-section skills'>
                    <header><h2>Technologies</h2></header>

                    <div>
                        <section>
                            <h3>Langages de programmation</h3>

                            <ul>
                                <li><a href='http://fr.wikipedia.org/wiki/Python'>Python 2 / 3</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Golang'>Go</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Javascript'>Javascript</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Php'>Php</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/C_%28langage%29'>C/C++</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Java_%28langage%29'>Java</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Bourne-Again_shell'>Bash</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Assembleur'>Asm</a> <a href='http://fr.wikipedia.org/wiki/Zilog_Z80'>z80</a> et <a href='http://fr.wikipedia.org/wiki/X86'>x86</a></li>
                            </ul>
                        </section>

                        <section>
                            <h3>Bases de données</h3>

                            <ul>
                                <li><a href='http://fr.wikipedia.org/wiki/Postgresql'>PostgreSQL</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/PL/pgSQL'>PL/pgSQL</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Mysql'>Mysql</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/SQLite'>SQLite</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/CouchDB'>CouchDB</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/MongoDB'>MongoDB</a></li>
                            </ul>
                        </section>

                        <section>
                            <h3>Moteurs de recherches</h3>

                            <ul>
                                <li><a href='https://fr.wikipedia.org/wiki/Elasticsearch'>ElasticSearch</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Xapian'>Xapian</a></li>
                                <li><a href='http://packages.python.org/Whoosh/'>Whoosh</a></li>
                                <li><a href='http://www.blevesearch.com/'>Bleve</a></li>
                            </ul>
                        </section>

                        <section>
                            <h3>Tests</h3>

                            <ul>
                                <li><a href='http://docs.python.org/library/unittest.html'>unittest</a></li>
                                <li><a href='http://readthedocs.org/docs/nose/en/latest/'>Nose</a></li>
                                <li><a href='http://en.wikipedia.org/wiki/Selenium_%28software%29'>Selenium</a></li>
                            </ul>
                        </section>

                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Standard_du_Web'>Standards du web</a></h3>

                            <ul>
                                <li><a href='http://fr.wikipedia.org/wiki/Html'>XHTML</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Html'>HTML4/5</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade'>CSS</a> <em>v2, v3</em></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Document_Object_Model'>DOM</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Svg'>SVG</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Canvas_%28HTML%29'>Canvas</a></li>
                                <li><a href='http://en.wikipedia.org/wiki/Xpath'>XPath</a></li>
                            </ul>
                        </section>

                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Standard_du_Web'>Outils web frontend</a></h3>

                            <ul>
                                <li><a href='http://lesscss.org/'>LessCSS</a></li>
                                <li><a href='http://sass-lang.com/'>SCSS</a></li>
                                <li><a href='http://compass-style.org/'>Compass</a></li>
                                <li><a href='http://twitter.github.io/bootstrap/'>Bootstrap</a></li>
                                <li><a href='http://bower.io/'>Bower</a></li>
                            </ul>
                        </section>

                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Format_de_donn%C3%A9es'>Formats de données</a></h3>

                            <ul>
                                <li><a href='http://fr.wikipedia.org/wiki/Json'>JSON</a></li>
                                <li><a href=''>XML</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Yaml'>Yaml</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Comma-separated_values'>CSV</a></li>
                            </ul>
                        </section>

                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Standard_du_Web'>Librairies Javascript</a></h3>

                            <ul>
                                <li><a href='http://fr.wikipedia.org/wiki/Jquery'>jQuery</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Dojo_Toolkit'>Dojo Toolkit</a></li>
                                <li><a href='http://fr.wikipedia.org/wiki/Ext_%28JavaScript%29'>ExtJS</a></li>
                                <li><a href='http://emberjs.com/'>Ember.js</a></li>
                                <li><a href='http://angularjs.org/'>AngularJS</a></li>
                                <li><a href='http://facebook.github.io/react/'>React</a></li>
                            </ul>
                        </section>

                        <section>
                            <h3><a href='http://en.wikipedia.org/wiki/List_of_software_development_philosophies'>Software development philosophies</a></h3>

                            <ul>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/M%C3%A9thode_agile'>Méthode agile</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Extreme_programming'>Méthode XP</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Scrum_%28m%C3%A9thode%29'>SCRUM</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/TDD'>TDD</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
                <div className='page-break'></div>
                <section className='resume-section skills'>
                    <header><h2 className='print-only'>Technologies</h2></header>

                    <div>
                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Syst%C3%A8me_de_gestion_de_versions'>Système de gestion de versions</a></h3>

                            <ul>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Apache_Subversion'>Subversion</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Mercurial'>Mercurial</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Git'>Git</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Bazaar_%28logiciel%29'>Bazaar</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Protocole_r%C3%A9seau'>Protocoles réseaux</a></h3>

                            <ul>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Http'>HTTP</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Webdav'>WebDAV</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Tcp/ip'>TCP/IP</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Domain_Name_System'>DNS</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/XMPP'>XMPP</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Standard_du_Web'>Librairies, Frameworks Python</a></h3>

                            <ul>
                                <li>
                                    <a href='http://aiohttp.readthedocs.io/en/stable/'>aiohttp</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Flask_%28programming%29'>Flask</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Django_%28Web_framework%29'>Django</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/SQLAlchemy'>SQLAlchemy</a>
                                </li>
                                <li>
                                    <a href='http://www.makotemplates.org/'>Mako</a>
                                </li>
                                <li>
                                    <a href='http://jinja.pocoo.org/docs/'>Jinja2</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>Système d'exploitation</h3>

                            <ul>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Debian'>Debian</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Ubuntu_%28operating_system%29'>Ubuntu</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Redhat'>RedHat</a>
                                </li>
                                <li>
                                    <a href='http://www.projectatomic.io/'>AtomicProject</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Macosx'>Mac OSX</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Ms_windows'>MS Windows</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>Hébergeur web</h3>

                            <ul>
                                <li>
                                    <a href='http://online.net/'>Online</a>
                                </li>
                                <li>
                                    <a href='http://ovh.com/'>Ovh</a>
                                </li>
                                <li>
                                    <a href='http://scaleway.com/'>Scaleway</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Virtualisation'>Virtualisation</a></h3>

                            <ul>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Vserver'>VServer</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Virtualbox'>Virtualbox</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Vmware'>VMware</a>
                                </li>
                                <li>
                                    <a href='http://www.vagrantup.com/'>Vagrant</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Lxc'>LXC</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>Logging tools</h3>

                            <ul>
                                <li>
                                    <a href='http://www.fluentd.org/'>Fluentd</a>
                                </li>
                                <li>
                                    <a href='https://www.elastic.co/fr/products/logstash'>Logstash</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Serveur_de_messagerie_%C3%A9lectronique'>Services Mail</a></h3>

                            <ul>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Postfix'>Postfix <em>(SMTP)</em></a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Dovecot'>Dovecot <em>(IMAP/POP)</em></a>
                                </li>
                                <li>
                                    <a href='http://amavis.sourceforge.net/'>Amavis</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Spamassassin'>Spamassassin</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Clamav'>ClamAV</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Sieve'>Sieve</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/SPF'>SPF</a>
                                </li>
                                <li>
                                    <a href='http://postgrey.schweikert.ch/'>Postgrey</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3><a href='http://fr.wikipedia.org/wiki/Serveur_web'>Serveurs Web</a></h3>

                            <ul>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Nginx'>nginx</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Apache'>Apache 2</a>
                                </li>
                                <li>
                                    <a href='http://traefik.io/'>Traefik</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Lighttpd'>lighttpd</a>
                                </li>
                                <li>
                                    <a href='http://gunicorn.org/'>Gunicorn</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3><a href='https://en.wikipedia.org/wiki/Configuration_management'>Configuration management</a> / <a href='https://en.wikipedia.org/wiki/Infrastructure_as_Code'>Infrastructure as Code</a></h3>

                            <ul>
                                <li>
                                    <a href='https://fr.wikipedia.org/wiki/Ansible_(logiciel)'>Ansible</a>
                                </li>
                                <li>
                                    <a href='https://github.com/openstack/ara'>ARA records Ansible Playbook</a>
                                </li>
                                <li>
                                    <a href='https://fr.wikipedia.org/wiki/Puppet'>Puppet</a>
                                </li>
                                <li>
                                    <a href='http://terraform.io/'>Terraform</a>
                                </li>
                                <li>
                                    <a href='http://docs.fabfile.org/'>Fabric / Fabtools</a>
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3>Monitoring system</h3>

                            <ul>
                                <li><a href='https://prometheus.io/'>Prometheus</a></li>
                            </ul>
                        </section>
                    </div>
                </section>
                <div className='page-break'></div>
                <section className='resume-section skills'>
                    <header><h2 className='print-only'>Technologies</h2></header>

                    <div>
                        <section>
                            <h3>Divers</h3>

                            <ul>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/BIND'>BIND9</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Proftpd'>ProFTPd</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Backuppc'>BackupPC</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Rsync'>Rsync</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Ejabberd'>ejabberd</a>
                                </li>
                                <li>
                                    <a href='http://supervisord.org/'>Supervisord</a>
                                </li>
                                <li>
                                    <a href='http://fr.wikipedia.org/wiki/Netfilter'>Netfilter</a>
                                </li>
                                <li>
                                    <a href='http://en.wikipedia.org/wiki/Shorewall'>Shorewall</a>
                                </li>
                                <li>
                                    <a href='http://piwik.org/'>Piwik</a>
                                </li>
                                <li>
                                    <a href='http://jenkins-ci.org/'>Jenkins</a>
                                </li>
                                <li>
                                    <a href='http://redis.io/'>Redis</a>
                                </li>
                                <li>
                                    <a href='http://docs.fabfile.org/'>Fabric</a>
                                </li>
                                <li>
                                    <a href='http://influxdb.com/'>InfluxDB</a>
                                </li>
                                <li>
                                    <a href='https://fr.wikipedia.org/wiki/Docker_(logiciel)'>Docker</a>
                                </li>
                                <li>
                                    <a href='http://kubernetes.io/'>Kubernetes</a>
                                </li>
                                <li>
                                    <a href='https://www.openshift.com/'>OpenShift</a>
                                </li>
                                <li>
                                    <a href='http://ceph.com/'>Ceph</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>

                <hr />

                <section className='resume-section experiences'>
                    <header><h2>Expériences</h2></header>

                    <div>
                        <section>
                            <header>
                                <h3><a href='https://www.scaleway.com/'>Scaleway</a></h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>DevOps, Lead developer</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://fr.wikipedia.org/wiki/Paris'>Paris</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span className='to'>Depuis janvier 2018</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p>Langage, librairies et outils :</p>

                                <p>Ubuntu, Golang (grpc, genproto, sqlx, cobra/viper, logrus...), gRPC and Protobuf, Vagrant, Docker, Ansible, GitLab CI/CD, Some Bash for scripting, Packer, iPXE, TFTP (<a href='https://github.com/tftp-go-team/hooktftp'>Hooktftp</a>), DHCP Server, PostgreSQL, <a href='https://github.com/golang-migrate/migrate'>Migrate</a>, Minio, Sentry...</p>

                                <p>Procédures et méthodes d'organisation :</p>

                                <ul>
                                    <li>Suivi du workflow <a href='https://nvie.com/posts/a-successful-git-branching-model/'>GitFlow</a></li>
                                    <li>Utilisation des Merge Request et de la revue de code pour chaque patch</li>
                                    <li>Documentation au fur et à mesure de l'évolution des projets au format Markdown</li>
                                    <li><a href='https://about.gitlab.com/handbook/communication/#everything-starts-with-an-issue'>Toute action commence avec une issue</a></li>
                                    <li>Création et utilisation de Mock pour tester facilement l'intégration de plusieurs composants</li>
                                </ul>
                            </div>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3><a href='https://gemnasium.com'>Gemnasium</a></h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>Développeur fullstack</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://37signals.com/remote'>Full remote</a></dd>

                                    <dt>Period</dt>
                                    <dt>Period</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>Juin 2017</span><span>&nbsp;à&nbsp;</span><span className='to'>Décembre 2018</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='https://gemnasium.com'>Gemnasium</a> est un service de sécurité en ligne qui vous alerte des vulnérabilités des paquets de dépendances de vos logiciels.
                                </p>
                            </div>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3><a href='http://tech-angels.com/'>Tech-Angels</a></h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>DevOps</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://37signals.com/remote'>Full remote</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>Janvier 2016</span><span>&nbsp;à&nbsp;</span><span className='to'>Juin 2017</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p>La société <a href='http://tech-angels.com'>Tech-Angels</a> est éditrice du services <a href='https://gemnasium.com/'>Gemnasium</a> et propose des prestations d'hébergement sur mesure.</p>

                                <p>Technologies mises en oeuvre :</p>

                                <ul>
                                    <li>Langages : <a href='http://fr.wikipedia.org/wiki/Python'>Python</a>, <a href='http://fr.wikipedia.org/wiki/Golang'>Go</a></li>
                                    <li>Configuration management : <a href='https://en.wikipedia.org/wiki/Ansible_(software)'>Ansible</a>, <a href='https://en.wikipedia.org/wiki/Puppet_(software)'>Puppet</a></li>
                                    <li>Cluster management software :
                                        <a href='https://www.openshift.com/'>OpenShift</a> (basé sur
                                        <a href='https://en.wikipedia.org/wiki/Docker_(software)'>Docker</a> et
                                        <a href='https://en.wikipedia.org/wiki/Kubernetes'>Kubernetes</a> )
                                    </li>
                                    <li>Distributed object store : <a href='https://en.wikipedia.org/wiki/Ceph_(software)'>Ceph</a></li>
                                    <li>Logiciel de gestion de version : <a href='http://fr.wikipedia.org/wiki/Git'>git</a></li>
                                    <li>Outils : <a href='https://about.gitlab.com/'>GitLab</a>, <a href='http://www.vagrantup.com/'>Vagrant</a></li>
                                    <li>Agrégation centralisé de logs: <a href='http://www.fluentd.org/'>Fluentd</a>, <a href='https://www.elastic.co/products/elasticsearch'>ElasticSearch</a>, <a href='https://www.elastic.co/products/kibana'>Kibana</a></li>
                                </ul>
                            </div>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3><a href='http://www.bearstech.com'>Bearstech</a></h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>Développeur R&amp;D</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://37signals.com/remote'>Full remote</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>Août 2012</span> <span>&nbsp;à&nbsp;</span> <span className='to'>Janvier 2016</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='http://www.bearstech.com'>Bearstech</a> est une société coopérative d’ingénieurs spécialisée en infogérance, hébergement et développement d'applications complexes.</p>

                                <p>Technologies mises en oeuvre :</p>

                                <ul>
                                    <li>Langages : <a href='http://fr.wikipedia.org/wiki/Python'>Python</a>, <a href='http://fr.wikipedia.org/wiki/Golang'>Go</a>,
                                        <a href='http://fr.wikipedia.org/wiki/Lua'>Lua</a></li>
                                    <li>Framework : <a href='https://www.djangoproject.com/'>Django</a>,
                                        <a href='http://en.wikipedia.org/wiki/Pyramid_%28web_framework%29'>Pyramid</a> (<a href='http://fr.wikipedia.org/wiki/Python_%28langage%29'>Python</a>)</li>
                                    <li>Moteur de template : <a href='http://jinja.pocoo.org/docs/'>Jinja2</a>, <a href='http://www.makotemplates.org/'>Mako</a></li>
                                    <li>Bases de données : <a href='http://fr.wikipedia.org/wiki/Mysql'>Mysql</a>, <a href='http://fr.wikipedia.org/wiki/SQLite'>SQLite</a>,
                                        <a href='http://redis.io/'>Redis</a>
                                    </li>
                                    <li>Frontend : <a href='http://twitter.github.io/bootstrap/'>Bootstrap</a>, <a href='http://bower.io/'>Bower</a>, <a href='http://sass-lang.com/'>SCSS</a>,
                                        <a href='http://angularjs.org/'>AngularJS</a>, <a href='http://www.flotcharts.org/'>Flot</a></li>
                                    <li>Serveur HTTP : <a href='http://wiki.nginx.org/Main'>Nginx</a> + <a href='http://wiki.nginx.org/HttpLuaModule'>Lua</a></li>
                                    <li>Logiciel de gestion de version : <a href='http://fr.wikipedia.org/wiki/Git'>git</a></li>
                                    <li>Outils : <a href='http://jenkins-ci.org/'>Jenkins</a>, <a href='http://www.vagrantup.com/'>Vagrant</a> et <a href='https://github.com/fgrehm/vagrant-lxc'>Vagrant-lxc</a></li>
                                </ul>
                            </div>
                        </section>
                        <hr />

                    </div>
                </section>
                <div className='page-break'></div>
                <section className='resume-section experiences'>
                    <header><h2 className='print-only'>Expérience</h2></header>

                    <div>
                        <section>
                            <header>
                                <h3><a href='http://www.homeloc.com'>Homeloc</a></h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>Lead developer</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://fr.wikipedia.org/wiki/Paris'>Paris</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>Juin 2012</span><span>&nbsp;à&nbsp;</span><span className='to'>Juillet 2012</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='http://www.homeloc.com'>Homeloc</a> est une startup qui propose une solution de multidiffusion d'annonces de locations de vacances.</p>

                                <p>Technologies et pratiques mises en oeuvre :</p>

                                <ul>
                                    <li>Framework : <a href='http://www.tornadoweb.org/'>Tornado</a> (<a href='http://fr.wikipedia.org/wiki/Python_%28langage%29'>Python</a>)</li>
                                    <li>Moteur de template : <a href='http://jinja.pocoo.org/docs/'>Jinja2</a></li>
                                    <li>Base de données : <a href='http://fr.wikipedia.org/wiki/MongoDB'>MongoDB</a></li>
                                    <li>Logiciel de gestion de version : <a href='http://fr.wikipedia.org/wiki/Git'>git</a></li>
                                    <li>Méthode de développement : <a href='http://fr.wikipedia.org/wiki/M%C3%A9thode_agile'>méthode agile</a>, itération d'une semaine, retrospective, définition du contenu du <a href='http://referentiel.institut-agile.fr/backlog.html'>backlog</a>,
                            recherche de <a href='http://en.wikipedia.org/wiki/Minimum_viable_product'>Minimun Viable Product</a></li>
                                </ul>
                            </div>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3><a href='http://www.is-webdesign.com'>isWebdesign</a></h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>Développeur senior, Administrateur Système, Responsable technique</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://fr.wikipedia.org/wiki/Metz'>Metz</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>Janvier 2006</span><span>&nbsp;à&nbsp;</span><span className='to'>Juin 2012</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='http://www.is-webdesign.com'>isWebdesign</a> est une <a href='http://fr.wikipedia.org/wiki/Web_agency'>agence web</a> située en
                                    <a href='http://fr.wikipedia.org/wiki/Lorraine'>Lorraine</a>, spécialisée dans la création de sites Internet, d'applications web au service des entreprises, des collectivités et des associations.<br /> Elle regroupe plusieurs pôles de compétences
                        : l'expertise et le conseil en matière de communication numérique, la conception et la réalisation de sites plurimédias, la conception d'applications web, la formation à l'usage des CMS et des technologies du Web, la maintenance de site et de
                        l'hébergement sur mesure.
                                </p>

                                <p>Quelques-uns de mes projets :</p>

                                <ul>
                                    <li>Développement d'un générateur et système de saisie de questionnaires, générateur de rapports en fonction des résultats des questionnaires - secteur de l'assurance
                                    </li>

                                    <li>Développement d'une application web de commerce B2B, espace-client… pour un important distributeur européen de véhicules deux roues
                                    </li>
                                    <li>Développement d'une application de génération d'un catalogue technique web et PDF, multilingue, pour une société industrielle internationale
                                    </li>
                                    <li>Développement d'une application web de suivi commercial (CRM) et espace-client - secteur de l'assurance
                                    </li>
                                    <li>
                            …
                                    </li>
                                </ul>

                                <p>Responsable de l'installation, de la configuration et de la maintenance :</p>

                                <ul>
                                    <li>d'environ une dizaine de serveurs d'hébergement sous Debian</li>
                                    <li>de nombreux serveurs virtualisés sous <a href='http://fr.wikipedia.org/wiki/Linux-VServer'>Linux-VServeur</a></li>
                                    <li>de serveurs de mails, serveurs d'hébergement Php et Python, serveurs DNS…</li>
                                    <li>d'un système de sauvegarde automatisée</li>
                                    <li>d'une plateforme de développement : gestionnaire de projets, dépôts de codes sources, wiki interne, documentation interne…</li>
                                    <li>…</li>
                                </ul>

                                <p>Autres fonctions : étude avant ventes, réalisation de cahiers des charges, préparation du contenu d'offres, présentation des projets aux clients, support technique.</p>
                            </div>
                        </section>
                    </div>
                </section>
                <div className='page-break'></div>
                <section className='resume-section experiences'>
                    <header><h2 className='print-only'>Expérience</h2></header>

                    <div>
                        <hr className='screen-only'/>
                        <section>
                            <header>
                                <h3><a href='http://www.linbox.com/'>Linbox FAS</a></h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>Développeur senior</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://fr.wikipedia.org/wiki/Metz'>Metz</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>Septembre 2005 2016</span><span>&nbsp;à&nbsp;</span><span className='to'>Décembre 2005</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='http://www.linbox.com'>Linbox</a> est une société de services en Logiciels Libres. Éditrice de produits de gestion de parcs informatiques.</p>

                                <ul>
                                    <li>Langages mis en oeuvre : C, Java (Swing), PHP, script BASH, script DOS, ...</li>
                                    <li>Environnement : GNU/Linux Debian, MS Windows</li>
                                    <li>Technologies : ssh, cgi, ...</li>
                                    <li>Outils : subversion, qemu, ...</li>
                                </ul>

                                <p>Projets :</p>

                                <ul>
                                    <li>
                            Application d'administration de postes clients MS Windows via SSH pour le
                                        <a href='http://www.interieur.gouv.fr/'>Ministère de l'intérieur</a>
                                    </li>
                                    <li>
                            Création et adaptation d'outils d'analyses de <a href='http://fr.wikipedia.org/wiki/Digital_Video_Broadcasting'>flux DVB</a> pour
                                        <a href='http://fr.wikipedia.org/wiki/TDF'>TDF</a>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3>Indépendant</h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>Réalisation de sites Internet, services…</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://fr.wikipedia.org/wiki/Metz'>Metz</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>Janvier 2005</span><span>&nbsp;à&nbsp;</span><span className='to'>Décembre 2015</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p>Conception du site Internet de la Communauté de Communes du Haut Chemin.<br /> Conduite de projets, Zope, Plone, création de produits Plone, formation, support.</p>
                                <p>D'autres petites missions d'adminstration système et de conseil.</p>
                            </div>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3><a href='http://www.linbox.com/'>Linbox FAS</a></h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>Développeur senior</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://fr.wikipedia.org/wiki/Metz'>Metz</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>Septembre  2004</span><span>&nbsp;à&nbsp;</span><span className='to'>Décembre 2004</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='http://www.linbox.com'>Linbox</a> est une société de services en Logiciels Libres. Éditrice de produits de gestion de parcs informatiques.</p>

                                <p>Projet : développement d'une application de diffusion d'informations embarquée dans des transports en commun.<br /> Technologies : TCL, GNU/Linux Debian, Subversion…</p>
                            </div>
                        </section>
                    </div>
                </section>
                <div className='page-break'></div>
                <section className='resume-section experiences'>
                    <header><h2 className='print-only'>Expérience</h2></header>

                    <div>
                        <hr className='screen-only'/>
                        <section>
                            <header>
                                <h3><a href='http://www.ktp.net/'>KTP Concept</a></h3>
                                <dl>
                                    <dt>Fonction</dt>
                                    <dd className='role'>Développeur, Administrateur système, Responsable technique</dd>

                                    <dt>Localisation</dt>
                                    <dd className='location'><a href='https://fr.wikipedia.org/wiki/Metz'>Metz</a></dd>

                                    <dt>Period</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>Septembre 2001</span><span>&nbsp;à&nbsp;</span><span className='to'>Août 2003</span></dd>
                                </dl>
                            </header>

                            <div>
                                <p><a href='http://www.ktp.net'>KTP Concept</a> est une <a href='http://fr.wikipedia.org/wiki/Web_agency'>agence web</a> d'une dizaine de salariés.<br /> Création de solution web : sites Internet, Intranet…</p>

                                <p>Mes différentes fonctions dans cette entreprise :</p>

                                <ul>
                                    <li>Développement et suivi de la réalisation de diverses applications Internet telles que : moteur de recherche, site d’emploi, commerce électronique (paiement en ligne, catalogue entièrement administrable), système de publication de contenu, ou
                            de zones sécurisées…<br /> Analyse des besoins, réalisation de cahiers des charges, choix des solutions techniques, déploiement, assistance…<br /> Différents outils/langages utilisés au cours des différents développements : HTML, CSS, Javascript,
                            Php, Perl, Python, Visual Basic, Delphi, MySQL, PostgreSQL, MS Access.</li>

                                    <li>Administration de plus de 150 sites web: déploiement des sites, la gestion des bases de données, des noms de domaines et des comptes mails. Assistance auprès des clients sur site ou à distance.</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </section>

                <hr />

                <section className='resume-section education'>
                    <header><h2>Formations</h2></header>

                    <div>
                        <section>
                            <header>
                                <h3>Participation à la Summer Session de Lion</h3>
                                <dl>
                                    <dt>Période</dt>
                                    <dd className='period'><span className='to'>2017</span></dd>
                                </dl>
                            </header>

                            <p>L'école de La culture startup chez <a href=''>TheFamily</a> <a href='https://joinlion.co/a-propos'>(en savoir plus sur la formation Lion)</a>.</p>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3>Préparation du diplôme d'ingénieur au CNAM de Metz</h3>
                                <dl>
                                    <dt>Période</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>2004</span><span>&nbsp;à&nbsp;</span><span className='to'>2005</span></dd>
                                </dl>
                            </header>

                            <p>Génie informatique – Informatique, Conception, Développement<br /> 3 modules sur 3 obtenus la première année.</p>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3>DEUST NTIC</h3>
                                <dl>
                                    <dt>Période</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>1999</span><span>&nbsp;à&nbsp;</span><span className='to'>2001</span></dd>
                                </dl>
                            </header>

                            <p>Diplôme d'Étude Universitaire Scientifique et Technique<br /> en Nouvelle Technologie de l'Information et de la Communication</p>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3>1ère année de DEUG MIAS</h3>
                                <dl>
                                    <dt>Période</dt>
                                    <dd className='period'><span>De&nbsp;</span><span className='from'>1998</span><span>&nbsp;à&nbsp;</span><span className='to'>1999</span></dd>
                                </dl>
                            </header>

                            <p>Mathématique et Informatique Appliqués aux Sciences</p>
                        </section>

                        <hr />

                        <section>
                            <header>
                                <h3>Baccalauréat Scientifique (spécialité Mathématiques)</h3>
                                <dl>
                                    <dt>Période</dt>
                                    <dd className='period'><span className='to'>1999</span></dd>
                                </dl>
                            </header>

                            <p>Options génie Mécanique et génie Électrique - Lycée Louis Vincent, Metz</p>
                        </section>
                    </div>
                </section>

                <hr />

                <section className='resume-section languages'>
                    <header><h2>Langues</h2></header>

                    <div>
                        <section>
                            <header>
                                <h3>Anglais</h3>
                            </header>

                            <p>Lu, écrit. Autonome dans la lecture et la rédaction de documentations techniques, échanges de mails…<br /> Forte motivation à améliorer mon niveau d'anglais.</p>
                        </section>
                    </div>
                </section>
                <hr className='screen-only' />
                <div className='page-break'></div>

                <section className='resume-section interest'>
                    <header><h2>Centres d'intérêt</h2></header>

                    <div>
                        <section>
                            <header>
                                <h3>Vie associative</h3>
                            </header>

                            <ul>
                                <li>Cofondateur en 2014 de l'espace <a href='http://www.coworking-metz.fr/'>Coworking Metz</a></li>
                            </ul>
                        </section>

                        <section>
                            <header>
                                <h3>Pratique sportives</h3>
                            </header>

                            <ul>
                                <li>Je pratique le Tennis de Table en compétition de depuis l'age de 10 ans, meilleur classement 19, 6 saisons en National 3 en championnat par équipe.</li>
                                <li>
                        Pratique de la course à pied
                                </li>
                            </ul>
                        </section>

                        <section>
                            <header>
                                <h3>Lectures, curiosités</h3>
                            </header>

                            <ul>
                                <li>Je suis très curieux, j'aime étudier l'histoire, la sociologie, l'économie, la philosophie, la politique, l'éducation, la linguistique, l'écologie…
                                </li>

                                <li>Passionné par les technologies et les communautés des logiciels libres, le mouvement Open Data, les devises numériques, les systèmes décentralisés…</li>

                                <li>Intéréssé par les méthodes de management, de conduite de projets, de développement personnel…
                                </li>

                                <li>J'aime écrire des articles, contribuer à de la documentation, reporter et corriger des bugs dans des logiciels libres.<br /> Je pratique aussi le développement sur mon temps libre, j'essaie de contribuer à la communauté Python en améliorant
                        des outils existant ou en créant de nouveaux outils. J'ai de nombreux petits projets qui n'ont pas encore été publiés…</li>
                            </ul>
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
