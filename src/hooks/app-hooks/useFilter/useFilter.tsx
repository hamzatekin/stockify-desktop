import { useMemo, useState } from 'react';

const useFilter = <T,>(list: T[] | undefined, fieldToFilter: string) => {
  const [filterValue, setFilterValue] = useState('');

  const filteredList = useMemo(() => {
    if (filterValue) {
      if (Array.isArray(list)) {
        return list?.filter((listItem: any) =>
          listItem[fieldToFilter]
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        );
      }
    }

    return list;
  }, [filterValue, list]);

  return { filteredList, filterValue, setFilterValue };
};

export default useFilter;
