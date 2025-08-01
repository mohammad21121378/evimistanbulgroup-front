// type ItemWithIdName = {
//     id: number;
//     name: string;
//     children?: ItemWithIdName[];
//   };

// function escapeSlugName(name: string): string {
//     // فاصله => `-`, `-` واقعی => `--`
//     return name.replace(/-/g, "--").replace(/\s+/g, "-");
//   }
  
//   function unescapeSlugName(slugPart: string): string {
//     // اول -- را موقتاً به placeholder تبدیل می‌کنیم تا از تبدیل تصادفی جلوگیری شود،
//     // سپس - به فاصله، و بعد placeholder را به - برمی‌گردانیم.
//     return slugPart
//       .replace(/--/g, "\0")
//       .replace(/-/g, " ")
//       .replace(/\0/g, "-")
//       .trim();
//   }
  
//   // --- برگرداندن شکل گروهی برای encode (معکوس parseGroupedSelection) ---
//   export function buildGroupedSelection(
//     selections: string[],
//     dataSource: ItemWithIdName[],
//     options?: { groupKeyAsPrefix?: boolean }
//   ): string | null {
//     // ورودی‌ها مثل: "12.34" یا "GroupName.56" یا "12"
//     type GroupInfo = {
//       groupItem: ItemWithIdName;
//       childIds: Record<string, true>;
//       hasGroupAlone: boolean;
//     };
  
//     const groupMap: Map<string, GroupInfo> = new Map();
  
//     const resolveGroup = (raw: string): ItemWithIdName | undefined => {
//       // اگر عددیه، بر اساس id
//       if (/^\d+$/.test(raw)) {
//         return dataSource.find(d => d.id === parseInt(raw, 10));
//       }
//       // در غیر این صورت بر اساس نام (case-insensitive)
//       return dataSource.find(d => d.slug === raw);
//     };
  
//     const resolveChild = (group: ItemWithIdName, rawChild: string): ItemWithIdName | undefined => {
//       if (!group.children) return undefined;
//       if (/^\d+$/.test(rawChild)) {
//         return group.children.find(c => c.id === parseInt(rawChild, 10));
//       }
//       return group.children.find(c => c.slug === rawChild);
//     };
  
//     selections.forEach(sel => {
//       const parts = sel.split(".");
//       let groupRaw: string;
//       let childRaw: string | null = null;
  
//       if (parts.length === 2) {
//         [groupRaw, childRaw] = parts;
//       } else {
//         groupRaw = parts[0];
//       }
  
//       const groupItem = resolveGroup(groupRaw);
//       if (!groupItem) return;
  
//       const key = String(groupItem.id);
//       if (!groupMap.has(key)) {
//         groupMap.set(key, { groupItem, childIds: new Set(), hasGroupAlone: false });
//       }
//       const info = groupMap.get(key)!;
  
//       if (childRaw) {
//         const child = resolveChild(groupItem, childRaw);
//         if (child) {
//             info.childIds[String(child.id)] = true;
//         }
//       } else {
//         // بدون فرزند => علامت اینکه خود گروه انتخاب شده
//         info.hasGroupAlone = true;
//       }
//     });
  
//     // حالا برای هر گروه تصمیم می‌گیریم چطور سریالایز کنیم
//     const parts: string[] = [];
  
//     groupMap.forEach(info => {
//       const { groupItem, childIds, hasGroupAlone } = info;
  
//       const allChildrenIds = new Set(
//         (groupItem.children ?? []).map(c => String(c.id))
//       );
  
//       const isFullGroup =
//         hasGroupAlone ||
//         (allChildrenIds.size > 0 &&
//           childIds.size === allChildrenIds.size &&
//           [...childIds].every(id => allChildrenIds.has(id)));
  
//       if (isFullGroup && !childIds.size) {
//         // فقط گروه بدون برچسب فرزند -> مثل "GroupName" ساده
//         parts.push(escapeSlugName(groupItem.slug));
//       } else if (isFullGroup && childIds.size > 0 && hasGroupAlone) {
//         // اگر هم گروه و هم تمام بچه‌ها هست، باز هم ساده "GroupName"
//         parts.push(escapeSlugName(groupItem.slug));
//       } else if (childIds.size > 0) {
//         // بچه‌های جزئی
//         const childNames = [...childIds]
//           .map(id => {
//             const child = groupItem.children?.find(c => String(c.id) === id);
//             return child ? escapeSlugName(child.slug) : id;
//           })
//           .filter(Boolean);
//         parts.push(`${escapeSlugName(groupItem.slug)}[${childNames.join(",")}]`);
//       } else if (hasGroupAlone) {
//         // فقط گروه (بدون فرزندان) - باز هم ساده
//         parts.push(escapeSlugName(groupItem.slug));
//       }
//     });
  
//     if (parts.length === 0) return null;
//     return parts.join(",");
//   }


type ItemWithIdName = {
    id: number;
    name: string;
    slug: string;
    children?: ItemWithIdName[];
  };
  
  function escapeSlugName(name: string): string {
    // فاصله => `-`, `-` واقعی => `--`
    // return name.replace(/-/g, "--").replace(/\s+/g, "-");
    return name
  }
  
  
  export function buildGroupedSelection(
    selections: string[],
    dataSource: ItemWithIdName[],
    options?: { groupKeyAsPrefix?: boolean }
  ): string | null {
    type GroupInfo = {
      groupItem: ItemWithIdName;
      childIds: Record<string, true>;
      hasGroupAlone: boolean;
    };
  
    const groupMap: Map<string, GroupInfo> = new Map();
  
    const resolveGroup = (raw: string): ItemWithIdName | undefined => {
      if (options?.groupKeyAsPrefix) {
        // raw ممکنه اسم گروه باشه
        return dataSource.find(d => d.slug === raw);
      } else {
        // اول سعی می‌کنیم روی آیدی، بعد اسم
        if (/^\d+$/.test(raw)) {
          const byId = dataSource.find(d => d.id === parseInt(raw, 10));
          if (byId) return byId;
        }
        return dataSource.find(d => d.slug === raw);
      }
    };
  
    const resolveChild = (group: ItemWithIdName, rawChild: string): ItemWithIdName | undefined => {
      if (!group.children) return undefined;
      // parseGroupedSelection همیشه child.id می‌ذاره (نه اسم)، ولی ایمن می‌گیریم:
      if (/^\d+$/.test(rawChild)) {
        return group.children.find(c => c.id === parseInt(rawChild, 10));
      }
      return group.children.find(c => c.slug === rawChild);
    };
  
    selections.forEach(sel => {
      const parts = sel.split(".");
      let groupRaw: string;
      let childRaw: string | null = null;
  
      if (parts.length === 2) {
        [groupRaw, childRaw] = parts;
      } else {
        groupRaw = parts[0];
      }
  
      const groupItem = resolveGroup(groupRaw);
      if (!groupItem) return;
  
      const key = String(groupItem.id);
      if (!groupMap.has(key)) {
        groupMap.set(key, { groupItem, childIds: {}, hasGroupAlone: false });
      }
      const info = groupMap.get(key)!;
  
      if (childRaw) {
        const child = resolveChild(groupItem, childRaw);
        if (child) {
          info.childIds[String(child.id)] = true;
        }
      } else {
        info.hasGroupAlone = true;
      }
    });
  
    const parts: string[] = [];
  
    groupMap.forEach(info => {
      const { groupItem, childIds, hasGroupAlone } = info;
  
      const allChildrenIds = (groupItem.children ?? []).map(c => String(c.id));
      const childIdsKeys = Object.keys(childIds);
  
      const isFullGroup =
        hasGroupAlone ||
        (allChildrenIds.length > 0 &&
          childIdsKeys.length === allChildrenIds.length &&
          childIdsKeys.every(id => allChildrenIds.includes(id)));
  
      if (isFullGroup) {
        // اگر خود گروه انتخاب شده یا تمام فرزندانش، فقط نام/آی‌دی گروه می‌آید
        parts.push(escapeSlugName(groupItem.slug));
      } else if (childIdsKeys.length > 0) {
        // بچه‌های جزئی
        const childNames = childIdsKeys
          .map(id => {
            const child = groupItem.children?.find(c => String(c.id) === id);
            return child ? escapeSlugName(child.slug) : id;
          })
          .filter(Boolean);
        parts.push(`${escapeSlugName(groupItem.slug)}[${childNames.join(",")}]`);
      } else if (hasGroupAlone) {
        parts.push(escapeSlugName(groupItem.slug));
      }
    });
  
    if (parts.length === 0) return null;
    return parts.join(",");
  }
  