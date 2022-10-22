import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const DarkModeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <div className="flex h-full items-end">
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={35}
        >
          {colorScheme === 'dark' ? (
            <BsFillSunFill size={16} />
          ) : (
            <BsFillMoonFill size={16} />
          )}
        </ActionIcon>
      </div>
    </>
  );
};

export default DarkModeButton;
