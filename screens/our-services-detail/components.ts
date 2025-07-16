import dynamic from "next/dynamic";

export const components = {
    introduction: dynamic(() => import("./components/Introduction")),
    userInfo: dynamic(() => import("./components/UserInfo")),
    content: dynamic(() => import("./components/Content")),
    alert: dynamic(() => import("./components/Alert")),
    faq: dynamic(() => import("./components/FAQ")),
    usHelp: dynamic(() => import("./components/UsHelp")),
};