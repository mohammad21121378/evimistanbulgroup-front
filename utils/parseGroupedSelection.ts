type ItemWithIdName = {
    id: number;
    name: string;
    slug: string;
    children?: ItemWithIdName[];
  };
  
  function unescapeSlugName(slugPart: string): string {

    // return slugPart
    //   .replace(/--/g, '\0')
    //   .replace(/-/g, ' ')
    //   .replace(/\0/g, '-')
    //   .trim();

    return slugPart
  }
  
  export function parseGroupedSelection(
    rawSegment: string,
    dataSource: ItemWithIdName[],
    options?: { groupKeyAsPrefix?: boolean }
  ): string[] {
    const result: string[] = [];
  
    const decoded = decodeURIComponent(rawSegment);

    const groups = decoded.split(/(?<=\])\s*,\s*|,\s*(?=[^\]]*(?:\[|$))/);
  
    groups.forEach(part => {
      if (!part.trim()) return;
  
      const bracketIdx = part.indexOf('[');
      let groupRaw: string;
      let childrenRaw: string | undefined;
  
      if (bracketIdx !== -1) {
        groupRaw = part.slice(0, bracketIdx);
        childrenRaw = part.slice(bracketIdx + 1, part.lastIndexOf(']'));
      } else {
        groupRaw = part;
      }
  
      const groupName = unescapeSlugName(groupRaw);
      const group = dataSource.find(item => item.slug.toLowerCase() === groupName.toLowerCase());
      if (!group) return;
  
      const children = childrenRaw
        ? childrenRaw
            .replace(/"/g, '')
            .split(/\s*,\s*/)
            .map(c => unescapeSlugName(c))
            .filter(c => c !== '')
        : [];
  
      const isEmpty = children.length === 0;
  
      if (isEmpty) {
        if (group.children?.length) {
          group.children.forEach(child => {
            const value = options?.groupKeyAsPrefix
              ? `${group.slug}.${child.id}`
              : `${group.id}.${child.id}`;
            result.push(value);
          });
        }
        result.push(String(group.id));
      } else {
        children.forEach(childName => {
          const child = group.children?.find(c => c.slug.toLowerCase() === childName.toLowerCase());
          if (child) {
            const value = options?.groupKeyAsPrefix
              ? `${group.slug}.${child.id}`
              : `${group.id}.${child.id}`;
            result.push(value);
          }
        });
      }
    });
  
    return result;
  }
  