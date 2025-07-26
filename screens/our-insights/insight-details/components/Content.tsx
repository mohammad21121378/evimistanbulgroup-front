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
                <div id="article_content" className="customTypography" dangerouslySetInnerHTML={{__html:article.content}}>

                 </div>
            </div>

            <BannerForGroup />
        </div>
    );
}