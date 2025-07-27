import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion";

type Props = {
    list: string[];
    ListWrapper?: 'ol' | 'ul'
}

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    },
  },
};

export default function ListContent({ list, ListWrapper="ul" }: Props) {
    return (
        <ListWrapper className="list-disc text-xl leading-relaxed list-outside pl-6 space-y-8 font-normal">
            {list.map((item, index) =>
                <motion.li key={index} variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <Markdown options={{ forceInline: true }}>{item}</Markdown>
                </motion.li>
            )}
        </ListWrapper>
    )
}