import Loading from '@components/Loading/Loading';
import MaTransition from '@components/MaTransition/MaTransition';
import { Suspense as ReactSuspense } from 'react';

const MaSuspense = ({ children }: SuspenseProps) => {
  return (
    <>
      <ReactSuspense fallback={<Loading />}>
        <MaTransition>{children}</MaTransition>
      </ReactSuspense>
    </>
  );
};

export default MaSuspense;
