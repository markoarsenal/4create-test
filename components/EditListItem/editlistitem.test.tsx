import { fireEvent, render, screen } from '@testing-library/react';
import EditListItem from './';

describe('EditListItem', () => {
  it('should render properly', () => {
    render(<EditListItem name="foo" value="bar" />);
    expect(screen.getByTestId('edit-list-item')).toBeInTheDocument();
  });

  it('should render input:text', () => {
    render(<EditListItem name="foo" value="bar" />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('bar');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render input:number', () => {
    render(<EditListItem name="foo" value={12} />);
    const input = screen.getByRole('spinbutton');

    expect(input).toHaveValue(12);
    expect(input).toHaveAttribute('type', 'number');
  });

  it('should render input:email', () => {
    render(<EditListItem name="foo" value="some-strange-and-fake-email@fake.fake" />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('some-strange-and-fake-email@fake.fake');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('should render input:date', () => {
    render(<EditListItem name="foo" value="2021-06-23T09:18:40-02:00" />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('06/23/2021');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render input:radio', () => {
    render(<EditListItem name="foo" value={true} />);
    const inputs = screen.getAllByRole('radio');

    expect(inputs).toHaveLength(2);
    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();
  });

  it('should call onEdit handler for input:text', () => {
    const onEditHandler = jest.fn();
    render(<EditListItem name="foo" value="bar" onEdit={onEditHandler} />);

    const input = screen.getByRole('textbox');
    const btn = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'bar2' } });
    fireEvent.click(btn);

    expect(input).toHaveValue('bar2');
    expect(onEditHandler).toHaveBeenCalledWith('foo', 'bar2');
  });

  it('should call onEdit handler for input:number', () => {
    const onEditHandler = jest.fn();
    render(<EditListItem name="foo" value={12} onEdit={onEditHandler} />);

    const input = screen.getByRole('spinbutton');
    const btn = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 21 } });
    fireEvent.click(btn);

    expect(input).toHaveValue(21);
    expect(onEditHandler).toHaveBeenCalledWith('foo', 21);
  });
});
