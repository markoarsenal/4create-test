import React from 'react';
import type { NextPage } from 'next';
import Dropzone from 'components/Dropzone';
import { store } from 'store';
import { useRouter } from 'next/dist/client/router';

const Home: NextPage = () => {
  const { push } = useRouter();

  return (
    <Dropzone
      onUpload={(json) => {
        store.setJSON(json);
        void push('/edit');
      }}
    />
  );
};

export default Home;
