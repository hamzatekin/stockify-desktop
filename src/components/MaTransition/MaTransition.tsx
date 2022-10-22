import { Transition } from '@mantine/core';

const MaTransition = ({
  children,
  mounted = true,
  transition = 'slide-right',
  duration = 500,
  timingFunction = 'ease',
}: MaTransitionProps) => {
  return (
    <>
      <Transition
        mounted={mounted}
        transition={transition}
        duration={duration}
        timingFunction={timingFunction}
      >
        {(styles) => <div style={styles}>{children}</div>}
      </Transition>
    </>
  );
};

export default MaTransition;
