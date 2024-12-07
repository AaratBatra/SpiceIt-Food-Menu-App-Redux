import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  const onPageChange = jest.fn();

  it('disables "First" and "Previous" buttons on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByText('First')).toBeDisabled();
    expect(screen.getByText('Prev')).toBeDisabled();
  });

  it('disables "Next" and "Last" buttons on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByText('Next')).toBeDisabled();
    expect(screen.getByText('Last')).toBeDisabled();
  });

  it('calls onPageChange when "Next" button is clicked', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange when "First" button is clicked', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('First'));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });
});
