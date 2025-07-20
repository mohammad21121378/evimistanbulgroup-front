import React, { useEffect } from "react";
import styles from "./symptom-selector.module.css"
import SymptomSelectorItem from "./symptom-selector-item";
import { Symptom, SymptomItem, SymptomSelectorProps } from "./types";
import { useSymptom } from "./useSymptom";
import DropdownWithChildren from "../dropdown-with-children/DropdownWithChildren";
import isEqual from "lodash.isequal";


const SymptomSelector = ({ symptoms, search = true, multiple = true, title = "Klinik Belirtilen", setSelected, selected = false, defaultIsOpen = false, placeholder = 'Search...', allowForSelectAllChildren = false, parentIsLabel = false, svgtitle, svgArrow=true }: SymptomSelectorProps) => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const { filtered, selectedSymptoms, setSelectedSymptoms, handleSelect, handleSelectSymptomAndChildren, searchTerm, setSearchTerm } = useSymptom(symptoms, multiple)


    // useEffect(() => {
    //     if (!setSelected) return;
    //     setSelected(selectedSymptoms)
    // }, [selectedSymptoms]);


    useEffect(() => {
        if (!setSelected) return;
        if (!isEqual(selectedSymptoms, selected)) {
            setSelected(selectedSymptoms);
        }
    }, [selectedSymptoms]);

    useEffect(() => {
        if (!selected || selected.length === 0) return;
        const initialSelections = selected.map(item => item.toString());
        setSelectedSymptoms(initialSelections);
    }, [selected]);

    return (
        <DropdownWithChildren svgArrow={svgArrow} title={title} svg={svgtitle} key={title}>
                    {search && <div className={styles["input-wrapper"]}>
                        <input
                            type="text"
                            placeholder={placeholder}
                            className={styles["search-input"]}
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <span className={styles["search-icon"]}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.3333 17.5L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12153 12.809 4.07292 11.7604C3.02431 10.7118 2.5 9.43056 2.5 7.91667C2.5 6.40278 3.02431 5.12153 4.07292 4.07292C5.12153 3.02431 6.40278 2.5 7.91667 2.5C9.43056 2.5 10.7118 3.02431 11.7604 4.07292C12.809 5.12153 13.3333 6.40278 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L17.5 16.3333L16.3333 17.5ZM7.91667 11.6667C8.95833 11.6667 9.84375 11.3021 10.5729 10.5729C11.3021 9.84375 11.6667 8.95833 11.6667 7.91667C11.6667 6.875 11.3021 5.98958 10.5729 5.26042C9.84375 4.53125 8.95833 4.16667 7.91667 4.16667C6.875 4.16667 5.98958 4.53125 5.26042 5.26042C4.53125 5.98958 4.16667 6.875 4.16667 7.91667C4.16667 8.95833 4.53125 9.84375 5.26042 10.5729C5.98958 11.3021 6.875 11.6667 7.91667 11.6667Z"
                                    fill="#49454F"
                                />
                            </svg>
                        </span>
                    </div>}
                    <div className={styles["symptom-list"]}>
                        {filtered
                            .map((symptom) => (
                                <div key={symptom.id}>

                                    <SymptomSelectorItem
                                        handleSelect={handleSelectSymptomAndChildren}
                                        selectedSymptoms={selectedSymptoms}
                                        symptom={symptom}
                                        isLabel={parentIsLabel}
                                    />

                                    <div className="pl-5 space-y-1 my-1">

                                        {Array.isArray(symptom.children) &&
                                            <>

                                                {
                                                    allowForSelectAllChildren &&

                                                    <SymptomSelectorItem
                                                        key={`all-${symptom.id}`}
                                                        handleSelect={handleSelectSymptomAndChildren}
                                                        selectedSymptoms={selectedSymptoms}
                                                        symptom={symptom}
                                                        itemIsAll
                                                    />
                                                }

                                                {

                                                    symptom.children.sort((a, b) => a.name.localeCompare(b.name)).map((child) => (
                                                        <SymptomSelectorItem
                                                            key={child.id}
                                                            handleSelect={handleSelect}
                                                            selectedSymptoms={selectedSymptoms}
                                                            symptom={child}
                                                            parentId={`${symptom.id}`}
                                                        />
                                                    ))
                                                }

                                            </>
                                        }
                                    </div>
                                </div>
                            ))}
                    </div>
        </DropdownWithChildren>
    );
};

export default SymptomSelector
