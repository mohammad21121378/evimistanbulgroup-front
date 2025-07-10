import React, { useState, useEffect, ReactNode } from "react";
import styles from "./symptom-selector.module.css"
import { SymptomSelectorItemProps } from "./types";
import { getValue } from "./getValue";


const SymptomSelectorItem = ({
    symptom,
    handleSelect,
    selectedSymptoms,
    itemIsAll = false,
    parentId,
    isLabel
}: SymptomSelectorItemProps) => {

    const symptomId = String(symptom.id)

    const value = getValue(symptomId, parentId);


    const isSelected = Array.isArray(selectedSymptoms) && selectedSymptoms.includes(value);

    return (
        <div>
            <label
                key={value}
                className={`${styles["symptom-item"]} ${isSelected ? styles.selected : ""}`}
            >
                {
                    !isLabel &&
                    <>

                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleSelect(symptom, parentId)}
                        />

                        <span className={styles.checkbox}></span>
                    </>
                }
                <span className={`${styles.text} ${isLabel && styles.isLabel}`}> {itemIsAll && 'All '} {symptom.name}</span>
                {!!symptom.count && <span className={styles.count}>{symptom.count}</span>}
            </label>
        </div>
    );
};

export default SymptomSelectorItem;

