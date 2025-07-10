import Head from 'next/head'
import {useEffect, useMemo, useRef, useState} from "react";
import SmallArticle from '../../../../Components/Layout/SmallArticle'
import classes from '../../index.module.css'
import {fetchPressArticle} from "../../../api/press_article";
import CopyToClipboard from "../../../../helpers/functions/copyToClipboard";
import Like from "../../../../Components/Like/Like";
import Link from 'next/link'
import {AddArticleView} from "../../../api/AddArticleView";
import Image from "next/image";
import BreadCrumb from "../../../../Components/BreadCrumb/BreadCrumb";
import NotifModal from "../../../../Components/Layout/NotifModal";

export default function Home({currentArticle}) {

    const article = currentArticle.article
    const related_articles = currentArticle.related_articles;
    const [showClipboardMessage, setShowClipboardMessage] = useState(false);

    const breadCrumb = [
        {
            title: "Basin Merkezi",
            link: "/basin-merkezi"
        },
        {
            title: article.subCatName.title,
            link:article.subCatName.url
        },
        {
            title: article.title,
            link: '#'
        }
    ];

    console.log(article.table_of_content)

    useEffect(() => {
        const content = document.querySelector('body');
        const contentHeight = content.scrollHeight;
        const contentVisibleHeight = window.innerHeight;
        const scrollbarInner = document.body.querySelector('#scrollbar-inner');

        const updateScrollbar = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollbarInnerWidth = (scrollTop / (contentHeight - contentVisibleHeight)) * 100;
            scrollbarInner.style.width = `${scrollbarInnerWidth}%`;

            if (scrollTop === 0) {
                scrollbarInner.style.width = '0%';
            }
        };


        window.addEventListener('scroll', updateScrollbar);

        return () => {
            window.removeEventListener('scroll', updateScrollbar);
        };
    }, []);

    const htmlToText = (html) => {
        return html.replace(/<[^>]*>/g, "");
    };
    const calculateReadingTime = (text) => {
        const wordsPerMinute = 200; // میانگین سرعت خواندن
        const wordCount = text.split(/\s+/).length; // شمارش تعداد کلمات
        return Math.ceil(wordCount / wordsPerMinute); // گرد کردن به بالا
    };
    const textContent = useMemo(() => htmlToText(article.content), [article.content]);
    const readingTime = useMemo(() => calculateReadingTime(textContent), [textContent]);

    useEffect(() => {
        const handleScroll = () => {
            const articleContent = document.querySelector("#article_content");
            if (!articleContent) return;
            const headings = Array.from(articleContent.querySelectorAll("h2"));
            if (headings.length === 0) return;
            let currentSection = headings[0].id;
            let minDistance = Number.POSITIVE_INFINITY;
            headings.forEach(heading => {
                const {top} = heading.getBoundingClientRect();
                const distance = Math.abs(top - 100); // فاصله 100 پیکسل از بالا
                if (distance < minDistance && top < window.innerHeight - 200) {
                    minDistance = distance;
                    currentSection = heading.id;
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, [article.content]);


    const scrollToSection = (heading) => {
        const id = heading.replaceAll("heading-", "").replace(/\s+/g, "-").replace(/-$/, "");
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth",
            });
        }
    };


    const addIdsToHeadings = () => {
        const articleContent = document.querySelector("#article_content");
        if (!articleContent) return;
        const headings = Array.from(articleContent.querySelectorAll("h2"));
        headings.forEach(heading => {
            const id = heading.innerText.trim().replace(/\s+/g, "-");
            heading.id = id;
        });
    };

    useEffect(() => {
        addIdsToHeadings();
    }, [article.content]);

    const [isLikeDisabled, setIsLikeDisabled] = useState(true);
    const [elapsedTime, setElapsedTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime((prev) => prev + 1);
        }, 60000); // افزایش زمان هر دقیقه (60000 میلی‌ثانیه)

        if(article.reading_time){
            if (elapsedTime >= 2) {
                setIsLikeDisabled(false);
                console.log(1)
                clearInterval(interval); // اگر زمان کافی گذشت، تایمر متوقف شود
            }
        } else{
            if (elapsedTime >= 2) {
                setIsLikeDisabled(false);
                console.log(1)
                clearInterval(interval); // اگر زمان کافی گذشت، تایمر متوقف شود
            }
        }

        return () => clearInterval(interval); // پاک کردن تایمر هنگام خروج از صفحه
    }, [elapsedTime, readingTime,article.reading_time]);

    let [showResourceBox,setShowResourceBox]=useState(false);
    let [showAuthorBox,setShowAuthorBox]=useState(false);
    let [linkCount,setLinkCount]=useState(false);
    let [tableOfContent,setTableOfContent]=useState(false);
    let resourceBtnRef=useRef();
    const resourceRef = useRef(null);

    const getHeight = (ref) => (ref.current ? ref.current.scrollHeight : 0);

    useEffect(()=>{
        setShowResourceBox(false)
        setShowAuthorBox(false)
        const addArticleView=async ()=>{
            await AddArticleView(article.id)
        }
        addArticleView()
    },[article])

    return (
        <>

            <BreadCrumb items={breadCrumb} />

            <div className="main-content">
                <div id="scrollbar">
                    <div id="scrollbar-inner"></div>
                </div>
                <div className="container position-relative">
                        <div className=" bigInsightItem" style={{ position: "relative"}}>
                            <Image layout="fill" src={article.media?.url} alt={article.media?.alt} className={'w-100  rounded-12'}/>
                        </div>

                    <div className="mt-4">
                        <h2 className={classes.titleBig}>
                            {article.title}
                        </h2>
                    </div>

                    <div className="mt-4 d-sm-flex ai-center gap-15 fs-12">
                        <div className="mb-sm-2 mb-3">
                            <Link href={article.category[0]?.url}>
                                <a>
                                    <span className={`bg-green text-white rounded-4 px-3 fs-16 ${classes.categoryBox}`}>
                            {article.category[0]?.title}
                            </span>
                                </a>
                            </Link>
                        </div>
                        <div className={'d-flex ai-center gap-10 fs-13 mb-2'}>
                            <div>
                                <Link href={article.author?.url}>
                                    <a>{article.author?.name} {article.author?.last_name} </a>
                                </Link>
                            </div>
                            <svg width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.812 10V0.129999H3.836V10H0.812Z" fill="#05664F"/>
                            </svg>

                            <div className={'d-flex align-items-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                                     className="bi bi-stopwatch mr-1"
                                     viewBox="0 0 16 16">
                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                                    <path
                                        d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                                </svg>
                                {article.reading_time? article.reading_time :readingTime} dakika
                            </div>

                            <svg width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.812 10V0.129999H3.836V10H0.812Z" fill="#05664F"/>
                            </svg>

                            <div>
                                {article.created_at}
                            </div>
                        </div>
                    </div>


                    <div className="border-top mt-4 pt-3">
                        <div className="mt-4">
                            <div className="row">

                                <div className="col-md-3 order-2 order-md-1 mb-0 position-relative z-1 mt-3 mt-md-0">
                                    <div className="position-sticky top-15">

                                        {article.table_of_content?.length > 0 && <div className="d-none d-md-block">

                                            <h2 className="fw-bold fs-18 fs-sm-16">
                                                İçindekiler
                                            </h2>

                                            <div className="steps-article mt-4">
                                                {article.table_of_content?.map(item => {
                                                    const tocId = item.heading.replaceAll("heading-", "").replace(/\s+/g, "-").replace(/-$/, "");
                                                    return (
                                                        <>
                                                            {item.heading && <div key={item.heading}
                                                                                  className={`step-article ${tocId === activeSection ? "step-article-active" : ""}`}>
                                                                <div className="step-article-tail"></div>
                                                                <div className="step-article-icon-container">
                                                                    <div></div>
                                                                </div>
                                                                <div className="step-article-icon-content">
                                                                    <a
                                                                        href={`#${tocId}`}
                                                                        className={`css-1r0daj6 ${tocId === activeSection ? "step-article-active active-link" : ""}`}
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            scrollToSection(item.heading);
                                                                        }}
                                                                    >
                                                                        <div className="css-19memkk">{item.placeholder}</div>
                                                                    </a>
                                                                </div>
                                                            </div> }
                                                        </>

                                                    );
                                                })}


                                            </div>
                                        </div> }

                                        <div className={'mt-3'}>
                                            <div className={'fs-18 fs-md-16 fw-bold'}>
                                                Gönderiyi Paylaş
                                            </div>

                                            <div className={classes.share}>
                                                <ul>
                                                    <li>
                                                        <a rel="nofollow" target="_blank"
                                                           href={`https://twitter.com/intent/tweet?url=${article.url}&text=${article.title}`}>
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a rel="nofollow" target="_blank"
                                                           href={`https://www.facebook.com/sharer/sharer.php?u=${article.url}&quote=${article.title}`}>
                                                            <i className="fab fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a rel="nofollow" target="_blank"
                                                           href={`https://www.linkedin.com/shareArticle?url=${article.url}&title=${article.title}`}>
                                                            <i className="fab fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CopyToClipboard(article.url,setShowClipboardMessage)}><i className="fa fa-link"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/*<div className={'mt-3'}>
                                            <div className={'fs-18 fs-md-16 fw-bold'}>
                                                Bu makale faydalı oldu mu?
                                            </div>

                                            <div className={'d-flex gap-15 mt-3'}>
                                                <div
                                                    className={'w-65 h-65 border border-2 border-dark-green rounded-circle d-grid ai-center jc-center text-center cursor-pointer'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor"
                                                         className="bi bi-hand-thumbs-up mt-2" viewBox="0 0 16 16">
                                                        <path
                                                            d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                                    </svg>
                                                    <div>
                                                        10
                                                    </div>
                                                </div>

                                                <div
                                                    className={'w-65 h-65 border border-2 border-pink rounded-circle d-grid ai-center jc-center text-center cursor-pointer'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor"
                                                         className="bi bi-hand-thumbs-down mt-2" viewBox="0 0 16 16">
                                                        <path
                                                            d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"/>
                                                    </svg>
                                                    <div>
                                                        30
                                                    </div>
                                                </div>
                                            </div>
                                        </div>*/}
                                        <div className={`mt-3 ${classes.resources_box} pt-0`}>
                                            <Like isLikeDisabled={isLikeDisabled} id={article.id} title="Bu sayfa faydalı oldu mu?"
                                                  styled
                                                  feedback_text="Geri bildiriminiz için teşekkürler!" Big/>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-6 order-1 order-md-2">
                                    {/*{sections.map(({id, title}, index) => (
                                        <div key={id} id={id} ref={(el) => (sectionRefs.current[id] = el)}
                                             style={{marginBottom: sections.length - 1 !== index && "80px"}}>
                                            <h3>{title}</h3>
                                            <p>
                                                {description}
                                            </p>
                                        </div>
                                    ))}*/}

                                    <div id="article_content" className={classes.article_content}>
                                        <div className="customTypography" dangerouslySetInnerHTML={{__html: article.content}}></div>
                                    </div>

                                    {article.resource && <div className={`mt-3 ${classes.resources_box_content}`}>
                                        <div className={classes.resources_header}>
                                            <div className={classes.resources_header_btn} onClick={() => setShowResourceBox(!showResourceBox)}>
                            <span>
                                {article.resource ? `${article.resource.split('<li>').length - 1} KAYNAK` : "Kaynak Yok"}
                                <i className={!showResourceBox ? "fa fa-plus" : "fa fa-minus"}></i>
                            </span>
                                            </div>
                                        </div>
                                        <div
                                            id="resources_content"
                                            ref={resourceRef}
                                            style={{
                                                maxHeight: showResourceBox ? `${getHeight(resourceRef)}px` : "0px",
                                                opacity: showResourceBox ? 1 : 0,
                                                overflow: "hidden",
                                                marginTop: showResourceBox ? "20px" : "0px",
                                                transition: " 0.4s"
                                            }}
                                            className={classes.resources_content}
                                        >
                                            <div  dangerouslySetInnerHTML={{__html: article.resource}}></div>
                                        </div>
                                    </div> }
                                </div>

                                <div className="col-md-3 order-3">

                                    <div
                                        className="bg-cream shadow rounded-8 d-grid ai-center jc-center text-center fs-14 fw-bold py-4 position-sticky top-5">
                                        <div
                                            className={'w-65 h-65 border border-2 border-dark-green rounded-circle d-grid ai-center bg-white jc-center text-center cursor-pointer mx-auto'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" fill="currentColor"
                                                 className="bi bi-clipboard-data-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                                                <path
                                                    d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"/>
                                            </svg>
                                        </div>
                                        <div className={'pt-3'}>
                                            Get a Free Consultation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        related_articles && related_articles.length ?

                            <div className="mt-5 border-top pt-4 ">

                                <h2 className={'fs-25 text-muted fs-sm-20 fw-bold pb-4 mb-0'}>
                                    Önerilen Okumalar
                                </h2>

                                <div className="row">
                                    {related_articles.map((item, index) => (<div className={'col-md-6 mb-4'}><SmallArticle {...item} /></div>))}
                                </div>
                            </div>
                            : ''
                    }

                </div>
            </div>
            <NotifModal text={"Bağlantı kopyalandı."} setIsInfoModalOpen={setShowClipboardMessage} isInfoModalOpen={showClipboardMessage} />

        </>
    );
}
