import classNames from 'classnames';
import styles from './ChatListing.module.css'

type Prop = {
    msg: {
        role: string;
        content: string;
    }
}

export default function ChatListing({ msg }: Prop) {
    return (
        <div className={classNames(
            styles.parentBox,
            { [styles.userSender]: msg.role === 'user' }
        )}>
            <div className={styles.box}>
                <div className={styles.textBox} aria-label="GPT response">
                    {msg.content === '...' ? (
                        <span className={styles["typing-loader"]}>
                            <span>.</span><span>.</span><span>.</span>
                        </span>
                    ) : (
                        msg.content
                    )}
                </div>
                <div className={styles.icon}></div>
            </div>
        </div>
    );
}


{/* <div class="_948d9e0a _6eaadaa8 f78bf4dd">
<div class="c10ad9ac"><div class="_48df1e90 _2ec67beb" aria-label="GPT response">Alright! Let's start a new conversation. What can I help you with?</div><div class="_32e50f9f"></div></div></div> */}


// type Prop = {
//     msg: {
//         role: string;
//         text: string;
//     }
// }

// export default function ChatListing({msg}: Prop) {
//     return (
//         <div
//             className={`max-w-[80%] text-sm px-3 py-2 rounded-xl
//             ${msg.role === 'user'
//                 ? 'bg-blue-500 text-white self-end ml-auto'
//                 : 'bg-zinc-200 -700 text-zinc-800  self-start'
//                 }`}
//         >
//             {msg.text}
//         </div>
//     );
// }