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
    resourceRef,
}: Props) {

    return (
        <div className="col-span-7 order-1 order-md-2">
            <div  className={classes.article_content}>
                <div id="article_content" className="customTypography" dangerouslySetInnerHTML={{ __html: article.content }} />
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