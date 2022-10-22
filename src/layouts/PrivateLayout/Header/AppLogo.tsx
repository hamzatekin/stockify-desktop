import { Anchor, Text } from '@mantine/core';
import { AppRoutes } from '@utils/const';
import { Link, useNavigate } from 'react-router-dom';

const AppLogo = () => {
  const navigate = useNavigate();

  return (
    <>
      <Anchor component={Link} to={AppRoutes.HOME}>
        <Text
          style={{ fontFamily: 'Greycliff CF, sans-serif' }}
          weight={700}
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          variant="gradient"
        >
          Stok Takip
        </Text>
      </Anchor>
    </>
  );
};

export default AppLogo;
