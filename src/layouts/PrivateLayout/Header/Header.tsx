import { Box, Burger, Header as MantineHeader, MediaQuery, useMantineTheme } from '@mantine/core';
import useGlobalStore, { globalStoreSelectors } from '../../../store/global-store';
import AppLogo from './AppLogo';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  const theme = useMantineTheme();

  const { isBurguerMenuOpen, toggleBurgerMenu } = useGlobalStore(globalStoreSelectors.burger);

  return (
    <>
      <MantineHeader height={80} sx={{ maxHeight: '100px' }} p="md">
        <Box className="flex justify-between w-full flex-wrap items-center h-full ">
          <div className="flex">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={isBurguerMenuOpen}
                onClick={() => toggleBurgerMenu()}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <div className="flex justify-center items-center">
              <AppLogo />
            </div>
          </div>
          <div className="flex justify-center items-end gap-4">
            <DarkModeButton />
          </div>
        </Box>
      </MantineHeader>
    </>
  );
};

export default Header;
