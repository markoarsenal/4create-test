import EditListItem from 'components/EditListItem';
import { ReactElement } from 'react';
import { JsonItem } from 'store';
import styles from './editlistview.module.scss';

type EditListViewProps = {
  list: JsonItem[];
};

const EditListView = ({ list }: EditListViewProps): ReactElement => {
  return list.length ? (
    <div>
      {list.map((item) => {
        return (
          <div className={styles.item} key={(item.id || item._id) as string}>
            {Object.entries(item).map(([key, val]) => (
              <EditListItem name={key} value={val} className={styles.line} key={key} />
            ))}
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <div>No data :(</div>
      <div>Please upload a JSON file...</div>
    </div>
  );
};

export default EditListView;
