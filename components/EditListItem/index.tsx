import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { parseISO, format } from 'date-fns';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import styles from './editlistitem.module.scss';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { JsonItemVal } from 'store';
import Button from '@mui/material/Button';

type EditListItemProps = {
  name: string;
  value: JsonItemVal;
  className?: string;
  onEdit?: (name: string, value: JsonItemVal) => void;
};

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const EditListItem = ({ name, value, className }: EditListItemProps) => {
  const [fieldValue, setFieldValue] = useState(value);
  let type = 'text';

  if (typeof value === 'number') {
    type = 'number';
  } else if (typeof value === 'string' && emailRegex.test(value)) {
    type = 'email';
  } else if (typeof value === 'string' && !isNaN(new Date(value.replaceAll(' ', '')).getTime())) {
    type = 'date';
  }

  return name !== 'id' && name !== '_id' && typeof value !== 'object' ? (
    <div className={className}>
      <div className={styles.header}>
        <span className={styles.name}>{name}:</span> {value}
      </div>
      <div className={styles.row}>
        <div className={styles.control}>
          {(typeof value === 'string' || typeof value === 'number') && (
            <>
              {type === 'number' && (
                <TextField
                  label={name}
                  defaultValue={value}
                  size="small"
                  fullWidth
                  type="number"
                  onChange={(e) => setFieldValue(e.target.value)}
                />
              )}
              {type === 'date' && (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label={'dlfkj'}
                    value={new Date((value as string).replaceAll(' ', ''))}
                    onChange={(date) => setFieldValue(date?.toISOString())}
                    renderInput={(params: TextFieldProps) => <TextField {...params} size="small" fullWidth />}
                  />
                </LocalizationProvider>
              )}
              {(type === 'text' || type === 'email') && (
                <TextField
                  label={name}
                  defaultValue={value}
                  size="small"
                  fullWidth
                  multiline={typeof value === 'string' && value.length > 50}
                  type={type}
                  onChange={(e) => setFieldValue(e.target.value)}
                />
              )}
            </>
          )}
          {typeof value === 'boolean' && (
            <>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label={name}
                  defaultValue={value}
                  name={nanoid()}
                  onChange={(e) => setFieldValue(e.target.value)}
                >
                  <FormControlLabel value={true} control={<Radio />} label="true" />
                  <FormControlLabel value={false} control={<Radio />} label="false" />
                </RadioGroup>
              </FormControl>
            </>
          )}
        </div>
        <div>
          <Button variant="contained" color="success" disabled={value === fieldValue}>
            Save
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default EditListItem;
