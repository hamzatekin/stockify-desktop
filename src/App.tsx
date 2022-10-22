import Mantine from '@components/Mantine/Mantine';
import ReactQuery from '@components/ReactQuery/ReactQuery';
import Layouts from '@layouts/Layout';
import { useEffect, useState } from 'react';

declare const window: any;

function App() {
  const [fromMain, setFromMain] = useState<string | null>(null);

  // const sendMessageToElectron = () => {
  //   if (window.Main) {
  //     window.Main.sendMessage("Hello I'm from React World");
  //   } else {
  //     setFromMain('You are in a Browser, so no Electron functions are available');
  //   }
  // };

  useEffect(() => {
    if (window.Main)
      window.Main.on('message', (message: string) => {
        setFromMain(message);
      });
  }, [fromMain]);

  return (
    <>
      <Mantine>
        <ReactQuery>
          <Layouts />
        </ReactQuery>
      </Mantine>
    </>
  );
}

export default App;
