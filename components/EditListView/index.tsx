import EditListItem from 'components/EditListItem';
import { ReactElement } from 'react';
import { JsonItem, JsonItemVal } from 'store';
import styles from './editlistview.module.scss';

type EditListViewProps = {
  list: JsonItem[];
  onEdit?: (index: number, name: string, value: JsonItemVal) => void;
};

const EditListView = ({ list, onEdit }: EditListViewProps): ReactElement =>
  list.length ? (
    <div>
      {list.map((item, i) => {
        return (
          <div className={styles.item} key={(item.id || item._id) as string}>
            {Object.entries(item).map(([key, val]) => (
              <EditListItem
                name={key}
                value={val}
                className={styles.line}
                onEdit={(name, value) => onEdit?.(i, name, value)}
                key={key}
              />
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

export default EditListView;
