import React from 'react';
import type { NextPage } from 'next';
import EditListView from 'components/EditListView';
import { observer } from 'mobx-react-lite';
import { store } from 'store';

const Edit: NextPage = () => (
  <EditListView list={store.json} onEdit={(i, name, val) => store.updateItem(i, name, val)} />
);

export default observer(Edit);
