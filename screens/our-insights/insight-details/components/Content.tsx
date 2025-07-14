import { Article } from "@/types/Article";
import classes from "./styles.module.css";
import BannerForGroup from "@/components/banner-for-group";

interface Props {
    article: Article;
    showResourceBox: boolean;
    setShowResourceBox: (v: boolean) => void;
    resourceRef: any;
}

export default function Content({

    article,
    showResourceBox,
    setShowResourceBox,
    resourceRef

}: Props) {

    return (
        <div className="md:col-span-6">

            <div  className={classes.article_content}>
                <div id="article_content" className="customTypography">
                <h2>Atomic Design Nedir?</h2>
        <p>Atomic Design, komponent tabanlı düşünceyi modüler ve hiyerarşik bir şekilde ele alan bir yöntemdir. Bu yapı, bileşenleri beş ana katmanda toplar: Atoms, Molecules, Organisms, Templates, ve Pages.</p>

        <h2>Feature-Based Dosya Yapısı</h2>
        <p>Günümüzde büyük frontend projeleri için, geleneksel "by-layer" (components, pages, services) yapısı yerine, "feature-based" yapı önerilir. Bu sayede her özelliğe özel bağımsız birimler elde edilir ve yeniden kullanılabilirlik artar.</p>

        <h2>State Yönetimi ve Yerelleştirme</h2>
        <p>State yönetimi için global çözümler (Redux, Zustand) veya yerel çözümler tercih edilebilir. Ayrıca next-intl veya react-i18next gibi kütüphanelerle çok dilli içerik yönetimi sağlanabilir.</p>

        <h2>Performans Optimizasyonları</h2>
        <p>Next.js ile lazy-loading, dynamic imports, resim optimizasyonu ve SSR/SSG kullanımı sayesinde uygulama performansı artırılabilir. Ayrıca Lighthouse ile denetleme yapılabilir.</p>

        <h2>Test Edilebilirlik</h2>
        <p>Jest ve React Testing Library ile UI bileşenlerinin bağımsız ve güvenilir testleri yazılabilir. Bu sayede refactor işlemleri daha güvenli olur.</p>

        <h2>Sonuç</h2>
        <p>Modern frontend mimarisi; modülerlik, okunabilirlik, performans ve ölçeklenebilirliği birlikte sunar. Doğru yapılar ile geliştirilen projeler sürdürülebilir hale gelir.</p>
                    </div>
            </div>

            {article.resource && (
                <div className={`mt-3 ${classes.resources_box_content}`}>
                    <div className={classes.resources_header}>
                        <div
                            className={classes.resources_header_btn}
                            onClick={() => setShowResourceBox(!showResourceBox)}
                        >
                            <span>
                                {`${article.resource.split("<li>").length - 1} KAYNAK`}
                                <i className={!showResourceBox ? "fa fa-plus" : "fa fa-minus"}></i>
                            </span>
                        </div>
                    </div>
                    <div
                        ref={resourceRef}
                        style={{
                            maxHeight: showResourceBox ? resourceRef.current?.scrollHeight : 0,
                            overflow: "hidden",
                            transition: "0.4s",
                            opacity: showResourceBox ? 1 : 0,
                        }}
                        className={classes.resources_content}
                        dangerouslySetInnerHTML={{ __html: article.resource }}
                    />
                </div>
            )}

            <BannerForGroup />
        </div>
    );
}