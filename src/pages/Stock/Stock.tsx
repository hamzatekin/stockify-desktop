import { Select, NumberInput, TextInput } from '@mantine/core';
import { invoke } from '@tauri-apps/api';
import { useEffect, useState } from 'react';
import { AutocompleteItem } from '@mantine/core';

const VAT_OPTIONS: AutocompleteItem[] = [
  { value: 'VAT_1', label: '1' },
  { value: 'VAT_8', label: '8' },
  { value: 'VAT_18', label: '18' },
];

const Stock = () => {
  const [stockName, setStockName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [barcode, setBarcode] = useState('');
  const [vat, setVat] = useState<string | null>('');

  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllStocks = async () => {
      const result = await invoke('get_all_stocks');
      console.log('result', result);
    };
    getAllStocks();
  }, []);

  return (
    <>
      <div className="flex w-full gap-3">
        <TextInput
          value={stockName}
          onChange={(ev) => setStockName(ev.target.value)}
          placeholder="Stok Adı giriniz."
          label="Stok adı"
          withAsterisk
        />
        <NumberInput
          defaultValue={0}
          value={quantity}
          onChange={(value) => value && setQuantity(value)}
          placeholder="Stok miktarı giriniz."
          label="Miktar"
          withAsterisk
        />
        <TextInput
          value={barcode}
          onChange={(ev) => setBarcode(ev.target.value)}
          placeholder="Barkod no giriniz."
          label="Barkod No"
          withAsterisk
        />
        <Select
          label="KDV oranı"
          placeholder="Kdv Oranı giriniz"
          value={vat}
          onChange={setVat}
          data={VAT_OPTIONS}
        />
      </div>
    </>
  );
};

export default Stock;
