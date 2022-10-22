import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';

const NavLink = ({ icon, color, label, to }: MainLinkProps) => {
  const navigate = useNavigate();

  return (
    <>
      <UnstyledButton
        component={Link}
        to={to}
        onClick={() => navigate(to)}
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </>
  );
};

export default NavLink;
