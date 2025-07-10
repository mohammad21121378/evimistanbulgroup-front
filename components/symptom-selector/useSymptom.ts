import { useMemo, useState } from "react";
import { Symptom } from "./types";
import { filterAndSortSymptoms } from "./filterAndSortSymptoms";
import { getValue } from "./getValue";

export function useSymptom(
    symptoms: Symptom[],
    multiple: boolean,

) {

    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");


    const filtered = useMemo(() => {
        return filterAndSortSymptoms(symptoms, searchTerm)
    }, [symptoms, searchTerm]);

    const symptomMap = useMemo(() => {
        const map: Record<string, Symptom> = {};
        symptoms.forEach(symptom => {
            map[symptom.id] = symptom;
        });
        return map;
    }, [symptoms]);


    const handleSelect = (symptom: Symptom, parentId?: string) => {
        const value = parentId ? `${parentId}.${symptom.id}` : String(symptom.id);
      
        setSelectedSymptoms(prev => {
          let updated: string[];
      
          if (prev.includes(value)) {
            // حذف
            updated = prev.filter(id => id !== value);
          } else {
            // اضافه
            updated = multiple ? [...prev, value] : [value];
          }
          
          if (parentId) {
            const parentIdStr = String(parentId);
            const parentSymptom = symptoms.find(sym => String(sym.id) === parentIdStr);
            const siblingIds = parentSymptom?.children?.map(child => `${parentIdStr}.${child.id}`) ?? [];
      
            const allSiblingsSelected = siblingIds.every(id => updated.includes(id));
      
            if (allSiblingsSelected) {
              // همه فرزندان انتخاب شدن ⇒ والد رو هم اضافه کن
              if (!updated.includes(parentIdStr)) {
                updated.push(parentIdStr);
              }
            } else {
              // اگر یکی حذف شده باشه ⇒ والد هم باید حذف بشه
              updated = updated.filter(id => id !== parentIdStr);
            }
          }
      
          return updated;
        });
      };
      


      const handleSelectSymptomAndChildren = (symptom: Symptom) => {
        const parentId = String(symptom.id);
        const childrenIds = symptom.children?.map(child => `${parentId}.${child.id}`) ?? [];
      
        setSelectedSymptoms(prev => {
          const isAllSelected =
            prev.includes(parentId) &&
            childrenIds.every(id => prev.includes(id));
      
          if (isAllSelected) {
            // اگر همه انتخاب بودند، همه را حذف کن
            return prev.filter(id => id !== parentId && !childrenIds.includes(id));
          } else {
            // اضافه کن والد و همه فرزندان را
            const cleaned = prev.filter(id => id !== parentId && !childrenIds.includes(id));
            return multiple ? [...cleaned, parentId, ...childrenIds] : [parentId, ...childrenIds];
          }
        });
      };
      

    return {
        filtered,
        selectedSymptoms,
        setSelectedSymptoms,
        handleSelect,
        searchTerm,
        setSearchTerm,
        handleSelectSymptomAndChildren
    };
}