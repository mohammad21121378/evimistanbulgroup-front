// "use client";

// import { forwardRef, useId, ChangeEvent, ReactNode } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./Checkbox.module.css";
// import ErrorInput from "../ErrorInput";

// type CheckboxProps = {
//   label?: string | ReactNode;
//   error?: string;
//   className?: string;
//   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
//   disabled?: boolean;
//   checked?: boolean;
//   required?: boolean;
//   parentClassName?: string;
//   showError?: boolean;
// };

// const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
//   (
//     {
//       label,
//       error,
//       className,
//       onChange,
//       disabled = false,
//       checked,
//       required,
//       parentClassName,
//       showError = true,
//       ...rest
//     },
//     ref
//   ) => {
//     const id = useId();

//     return (
//       <div className={`${styles.container} ${parentClassName || ""}`}>
//         <label htmlFor={id} className={styles.label}>
//           <div className={`${styles.box} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}>
//             <input
//               type="checkbox"
//               id={id}
//               ref={ref}
//               className={styles.input}
//               disabled={disabled}
//               onChange={onChange}
//               checked={checked}
//               required={required}
//               {...rest}
//             />
//             <AnimatePresence>
//               {checked && (
//                 <motion.svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   key="check"
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0, opacity: 0 }}
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#F97316"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className={styles.checkIcon}
//                 >
//                   <polyline points="20 6 9 17 4 12" />
//                 </motion.svg>
//               )}
//             </AnimatePresence>
//           </div>
//           {label && <span className={styles.text}>{label}</span>}
//         </label>
//       </div>
//     );
//   }
// );

// Checkbox.displayName = "Checkbox";

// export default Checkbox;


"use client";

import {
  forwardRef,
  useEffect,
  useId,
  useState,
  ReactNode,
  ChangeEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Checkbox.module.css";
import ErrorInput from "../ErrorInput";

type CheckboxProps = {
  label?: ReactNode;
  error?: string;
  defaultChecked?: boolean;
  required?: boolean;
  disabled?: boolean;
  parentClassName?: string;
  showError?: boolean;
  isSubmitted: boolean;
  onChange?: (value: boolean) => void;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      defaultChecked = false,
      required = false,
      disabled = false,
      parentClassName,
      showError = true,
      isSubmitted,
      onChange,
    },
    ref
  ) => {
    const id = useId();
    const [checked, setChecked] = useState(defaultChecked);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      setChecked(newChecked);
      onChange?.(newChecked);
    };
    
    useEffect(() => {
      if (defaultChecked !== checked) setChecked(defaultChecked);
    }, [defaultChecked]);

    return (
      <div className={`${styles.container} ${parentClassName || ""}`}>
        <label htmlFor={id} className={styles.label}>
          <div
            className={`${styles.box} ${error && isSubmitted ? styles.error : ""} ${
              disabled ? styles.disabled : ""
            }`}
          >
            <input
              ref={ref}
              id={id}
              type="checkbox"
              className={styles.input}
              disabled={disabled}
              checked={checked}
              required={required}
              onChange={handleChange}
            />
            <AnimatePresence>
              {checked && (
                <motion.svg
                  key="check"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.checkIcon}
                >
                  <polyline points="20 6 9 17 4 12" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
          {label && <span className={styles.text}>{label}</span>}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
