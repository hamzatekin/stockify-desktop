import { Box } from '@mantine/core';
import dayjs from 'dayjs';
import { DataTable } from 'mantine-datatable';
import { useState } from 'react';

const StockTable = () => {
  const [records, setRecords] = useState([]);

  return (
    <>
      <Box sx={{ height: 300 }}>
        <DataTable
          withBorder
          records={records}
          columns={[
            {
              accessor: 'name',
              render: ({ firstName, lastName }) => `${firstName} ${lastName}`,
            },
            { accessor: 'department.name' },
            { accessor: 'department.company.name' },
            {
              accessor: 'birthDate',
              render: ({ birthDate }) => dayjs(birthDate).format('MMM DD YYYY'),
            },
            {
              accessor: 'age',
              render: ({ birthDate }) => dayjs().diff(birthDate, 'y'),
            },
          ]}
        />
      </Box>
    </>
  );
};

export default StockTable;
