requirejs.config({
    baseUrl: '',
    paths: {
        css: "js/requirejs/css.min", //requirejs plugin for load css
        text: "js/requirejs/text", //requirejs plugin for load text
        vue: 'https://unpkg.com/vue/dist/vue'
    },
    shim: {}
});

require(['vue',
        'text!templates/preloader.html',
        'text!templates/phone.html',
        'text!templates/socials.html',
        'text!templates/sidebar.html',
        'text!templates/about.html',
        'text!templates/services.html',
        'text!templates/portfolio.html',
        'text!templates/resume.html',
        'text!templates/blog.html',
        'text!templates/testimonial.html',
        'text!templates/contact.html',
        'text!templates/footer.html',
    ],
    function (Vue, preloader, phone, socials, sidebar, about, services, portfolio, resume, blog, testimonial, contact, footer) {

        var app = new Vue({
            el: '#app',
            data: {
                loaded: false
            },
            mounted: function () {
                this.loaded = true;
                console.log('App is ready!');
            },
            components: {
                'my-preloader': {
                    template: preloader
                },
                'my-phone': {
                    template: phone,
                    data: function () {
                        return {phone: '+380980029369'}
                    }
                },
                'my-socials': {
                    template: socials,
                    data: function () {
                        return {
                            socials: [
                                {
                                    title: 'facebook',
                                    url: 'https://www.facebook.com/profile.php?id=100010324420196',
                                    icon: 'fa-facebook'
                                },
                                {title: 'twitter', url: 'https://twitter.com/bsa2657', icon: 'fa-twitter'},
                                {
                                    title: 'google+',
                                    url: 'https://plus.google.com/110341449488589699610?rel=author',
                                    icon: 'fa-google-plus'
                                },
                                {
                                    title: 'SkypeName="bsa_home"',
                                    url: 'https://login.skype.com/login?client_id=578134&redirect_uri=https%3A%2F%2Fweb.skype.com%2F',
                                    icon: 'fa-skype'
                                }
                            ]
                        }
                    }
                },
                'my-sidebar': {
                    template: sidebar,
                    data: function () {
                        return {myImageSrc: 'images/avatar.jpg'}
                    }
                },
                'my-about': {
                    template: about,
                    data: function () {
                        return {
                            firstName: 'Сергей',
                            lastName: 'Бескоровайный',
                            mySpeciality: 'Front-end и Back-end Разработчик',
                            briefDescriptionSpeciality: 'Занимаюсь разработкой серверных приложений на PHP, Node.js и клиентских приложений на HTML/CSS и Java Script.',
                            skills: [
                                {skill: 'PHP', percent: 85},
                                {skill: 'Node,js', percent: 50},
                                {skill: 'Zend Framework', percent: 75},
                                {skill: 'Bitrix', percent: 60},
                                {skill: 'Silex/Symfony', percent: 60},
                                {skill: 'Laravel', percent: 30},
                                {skill: 'HTML5 & CSS3', percent: 80},
                                {skill: 'JavaScript', percent: 75},
                                {skill: 'JQuery', percent: 65},
                                {skill: 'Vue.js', percent: 60},
                                {skill: 'Twitter Bootstrap', percent: 70},
                                {skill: 'Material Component Framework', percent: 60},
                            ]
                        }
                    },
                    computed: {
                        fullName: function () {
                            return this.firstName + ' ' + this.lastName
                        }
                    }
                },
                'my-services': {
                    template: services,
                    data: function () {
                        return {
                            services: [
                                {
                                    icon: 'fa-database',
                                    name: 'Back-end разработка',
                                    items: ['проектирование архитектуры сервиса;', 'создание ядра сайта;', 'разработка платформы и основного функционала;', 'работа с архитектурой кода;', 'разработка приложений, поддерживающих пользовательский интерфейс и безопасность;', 'работа с базами данных.']
                                },
                                {
                                    icon: 'fa-globe',
                                    name: 'Front-end разработка',
                                    items: ['кросс-браузерная и кросс-платформенная разработка;', 'прогрессивное улучшение и изящная деградация;', 'мобильная разработка;', 'адаптивная и отзывчивая верстка;', 'веб-шрифты;', 'использование различных фреймворков для пользовательского интерфейса;', 'создание одностраничных приложений.']
                                },
                                {
                                    icon: 'fa-money',
                                    name: 'Онлайн Платежи',
                                    items: ['интернет-платежи с банковских карт;', 'интернет-платежи с терминалов;', 'безопасность интернет платежей.']
                                },
                                {
                                    icon: 'fa-search-plus',
                                    name: 'SEO Оптимизация',
                                    items: ['внутренняя оптимизация;', 'оптимизация под Google;', 'оптимизация под Yandex;', 'внешние мероприятия по оптимизации.']
                                },
                            ]
                        }
                    },
                },
                'my-portfolio': {
                    template: portfolio,
                    data: function () {
                        return {
                            portfolio: [
                                {
                                    image: 'images/portfolio-1.jpg',
                                    title: 'Автоматизированная система мониторинга цеха М-5 ПАТ «АЗОТ»',
                                    category_number: '1',
                                    category: 'Intranet',
                                    description: 'Автоматизированная система мониторинга цеха М-5 ПАТ «АЗОТ» служит для сбора и отображения данных в реальном времени.'
                                },
                                {
                                    image: 'images/portfolio-2.jpg',
                                    title: 'Кредит-онлайн «ОЩАДКАСА»',
                                    category_number: '2',
                                    category: 'Websites',
                                    description: 'Кредит-онлайн от <a href="http://kasa.org.ua/" target="_blank">«ОЩАДКАСА»</a> – это удобный, быстрый и надежный способ осуществить Вашу мечту о покупке.'
                                },
                                {
                                    image: 'images/portfolio-3.jpg',
                                    title: 'Получение отчетов со станции сбора данных DX-2000 фирмы Yokogawa',
                                    category_number: '1',
                                    category: 'Intranet',
                                    description: 'Получение отчетов в различных форматах (HTML, PDF, Excel) по протоколу FTP со станции сбора данных DX-2000 фирмы Yokogawa.'
                                },
                                {
                                    image: 'images/portfolio-4.jpg',
                                    title: 'Кредит онлайн «MoneyBoom»',
                                    category_number: '2',
                                    category: 'Websites',
                                    description: '<a href="https://moneyboom.ua/" target="_blank">MoneyBOOM</a> – это услуга онлайн кредитования населения без посещения офиса компании. Мы предлагаем быстрые кредиты до 7000 грн на срок до 30 дней.'
                                },
                                {
                                    image: 'images/portfolio-5.jpg',
                                    title: 'Публічне акціонерне товариство «АЗОТ»',
                                    category_number: '2',
                                    category: 'Websites',
                                    description: 'Публічне акціонерне товариство <a href="http://www.azot.cherkassy.net/" target="_blank">«АЗОТ»</a> – один із вітчизняних виробників мінеральних добрив, виробник капролактаму та іонообмінних смол, аміачної селітри з часткою 36% на внутрішньому ринку.'
                                },
                                {
                                    image: 'images/portfolio-6.jpg',
                                    title: 'Система управления сообщениями в блоге',
                                    category_number: '1',
                                    category: 'Intranet',
                                    description: 'Система управления сообщениями в блоге. Каждое сообщение может включать в себя техт, видео, аудио, изображения и географическую информацию, привязанную к карте Google.'
                                },
                            ],
                            filters: [
                                {dataFilter: 'all', title: 'Показать все'},
                                {dataFilter: '.category-1', title: 'Intranet'},
                                {dataFilter: '.category-2', title: 'Websites'},
                            ]
                        }
                    },
                },
                'my-resume': {
                    template: resume,
                    data: function () {
                        return {
                            resume: [
                                {
                                    icon: 'fa-cogs',
                                    work_period: '11.2009 - Настоящее время',
                                    name: 'Инженер по автоматизации',
                                    description: 'Работал в ПАТ «АЗОТ» г. Черкассы. Украина. ' +
                                    'Занимался обслуживанием системы управления технологическими процессами , ' +
                                    'а также интеграцией и разработкой программного обеспечения.<br/>' +
                                    '<strong>Используемые технологии:</strong> PHP, ZendFramework-1,2, CMS Битрикс, Silex/Symfony, База данных - MySQL, MS-SQL, SQL-Lite.<br/>' +
                                    '<strong>Учавствовал в разработке проектов:</strong> ',
                                    projects: [
                                        'Сайт автоматизированной системы мониторинга цеха М-5 ПАТ «АЗОТ»;',
                                        'Получение отчетов со станции сбора данных DX-2000 фирмы Yokogawa;',
                                        'Сайт системы управления сообщениями в блоге;',
                                        'Сайт ПАТ <a href="http://www.azot.cherkassy.net/" target="_blank">«АЗОТ»</a>;',
                                        'Сайт Кредит-онлайн <a href="http://kasa.org.ua/" target="_blank">«ОЩАДКАСА»</a>;',
                                        'Сайт Кредит онлайн <a href="https://moneyboom.ua/" target="_blank">«MoneyBOOM»</a>;'
                                    ]
                                },
                                {
                                    icon: 'fa-laptop',
                                    work_period: '12.2007 - 11.2009',
                                    name: 'Ведущий программист',
                                    description: 'Работал в компании «КВАРЦ» г. Черкассы. Украина. Занимался планированием, ' +
                                    'интеграцией и разработкой программного обеспечения<br/>.' +
                                    '<strong>Используемые технологии:</strong> РНР, ZendFramework-1, C# .NET, 1С, CMS JOOMLA, База данных - MySQL.<br/>' +
                                    '<strong>Учавствовал в разработке проектов:</strong> ',
                                    projects: [
                                        'Сайт информационно вычислительная система <a href="http://quartal.com.ua/" target="_blank">«КВАРТАЛ»</a>;',
                                        '«Коммунальное Предприятие» - этот проект обеспечивал расчет начислений за коммунальные ' +
                                        'услуги для абонента, передачу данных на интернет портал и прием платежей от абонентов.',
                                    ]
                                },
                                {
                                    icon: 'fa-briefcase',
                                    work_period: '01.2007 - 12.2007',
                                    name: 'Руководитель проекта',
                                    description: 'Работал в ТОВ «Компанія облікові системи» г. Киев Украина. ' +
                                    'Занимался разработкой модуля бухгалтерского учета для системы управления «СК Предприятие».<br/>' +
                                    '<strong>Используемые технологии:</strong> C# .NET, База данных - Oracle<br/>' +
                                    '<strong>Учавствовал в разработке проектов:</strong> ',
                                    projects: [
                                        'Система управления «СК Предприятие» выполнена как сетевое приложение на основе ' +
                                        '3х уровней: UI – уровень пользовательского интерфейса, BC – уровень бизнес логики, ' +
                                        'DA- уровень доступа к базе данных (Oracle).',
                                    ]
                                },
                                {
                                    icon: 'fa-industry',
                                    work_period: '02.1994–12.2006',
                                    name: 'Ведущий инженер программист',
                                    description: 'Работал в отделе автоматизации ОАО «АЗОТ», г. Черкассы. Украина. ' +
                                    'Занимался проектами автоматизации производства, интеграцией и разработкой программного обеспечения.<br/>' +
                                    '<strong>Используемые технологии:</strong> Borland Delphi, PHP, ZendFramework-1, База данных - MySQL<br/>' +
                                    '<strong>Учавствовал в разработке проектов:</strong> ',
                                    projects: [
                                        'Автоматизация цеха по производству азотной кислоты на базе системы управления I/A Series Inc.( Foxboro);',
                                        'Разработал программное обеспечение для поверки измерительных каналов системы коммерческого учета природного газа на ОАО «АЗОТ».'
                                    ]
                                },
                                {
                                    icon: 'fa-university',
                                    work_period: '1975-1980',
                                    name: 'Образование',
                                    description: 'Россия. Новосибирский Электротехнический Институт. Факультет: Электронные Вычислительные Машины (ЭВМ). Специальность: 0608 инженер Электрик.<br/>' +
                                    '<strong>Повышение квалификации/курсы/сертификаты:</strong>',
                                    projects: [
                                        '2016 — The JS Classes site gives the present <a href="https://www.jsclasses.org/certificate/package/522.pdf" target="_blank">CERTIFICATE</a> to SERGEY BESKOROVAYNIY For having ranked Number #2 in the edition of September, 2016 of the JavaScript Innovation Award for the JavaScript package <a href="https://www.jsclasses.org/package/522-JavaScript-Build-reactive-Web-user-interfaces.html" target="_blank">Vue Resume</a>',
                                        '2006 — Сертификат за обучение курса по метрологической аттестации, выданный гос. предприятием «Украинский научно-исследовательский и учебный центр проблем стандартизации, сертификации и качества»;',
                                        '2004 — Сертификат за обучение официального курса фирмы Invensys Systems, Inc.( Foxboro США): 2000 – I/A Series Configuration , Сертифицированный фирмой Invensys центр обучения в Москве;',
                                        '2003 — Сертификат за обучение официального курса фирмы Honeywell США: 427 – Сервер и Станция PlantScape Применение I; 428 – Применение контроллера PlantScape. Сертифицированный фирмой Honeywell центр обучения в Киеве',
                                        '2000 — Certificate Microsoft Approved Course: 832 System Administration for Microsoft SQL Server 7.0; 833 Implementing a Database on Microsoft SQL Server 7.0, Сертифицированный фирмой Microsoft, центр обучения “KVAZAR-Micro” г. Киев',
                                        '1997 — Диплом за обучение распределенной системы управления Centum CS - базовый курс, ООО “Yokogawa Electric Corporation” Япония, сертифицированный фирмой Yokogawa центр обучения в Москве.'
                                    ]
                                },
                            ]
                        }
                    },
                },
                'my-blog': {
                    template: blog,
                    data: function () {
                        return {
                            posts: [
                                {
                                    image: 'images/blog-img-1.jpg',
                                    date: 'February 15, 2016',
                                    title: 'Blog Post with Image',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                },
                                {
                                    image: 'images/blog-img-2.jpg',
                                    date: 'February 15, 2016',
                                    title: 'Standart Blog Post',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                },
                                {
                                    image: 'images/blog-img-3.jpg',
                                    date: 'February 15, 2016',
                                    title: 'Blog Post with Image',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                },
                            ]
                        }
                    },
                },
                'my-testimonial': {
                    template: testimonial,
                    data: function () {
                        return {
                            testimonials: [
                                {
                                    image: 'images/client-1.jpg',
                                    name: 'Robert Green',
                                    position: 'Businessman',
                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                                },
                                {
                                    image: 'images/client-2.jpg',
                                    name: 'Robert Green',
                                    position: 'Businessman',
                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                                },
                                {
                                    image: 'images/client-3.jpg',
                                    name: 'Robert Green',
                                    position: 'Businessman',
                                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
                                },
                            ]
                        }
                    },
                },
                'my-contact': {
                    template: contact,
                    data: function () {
                        return {
                            address: 'ул.Ярославская 34 кв.159, г.Черкассы, Украина, 18029',
                            phone: '+380 98 002 9369',
                            email: 'bsa2657@yandex.ru',
                            website: 'http://bsa-git.github.io/',
                            google_maps_url: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83109.89941469842!2d32.090707699999996!3d49.38650455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1502776343031',// 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658281952!2d75.78663299928208!3d30.900473636616745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C+Punjab+141001!5e0!3m2!1sen!2sin!4v1461389509410',
                            form: {
                                name: '',
                                email: '',
                                message: ''
                            }
                        }
                    },
                    // define methods under the `methods` object
                    methods: {
                        send: function (event) {
                            alert('Hello ' + this.form.name + '!')
                        }
                    }
                },
                'my-footer': {
                    template: footer,
                    data: function () {
                        return {
                            copyright: '2016 Osahan',
                            developer: 'Osahan Studio',
                            social: 'https://www.facebook.com/iamgurdeeposahan'
                        }
                    }
                },
            }
        });

        require(['js/scripts.min.js']);
    });
