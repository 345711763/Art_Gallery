import {fireEvent, render, screen} from "@testing-library/react";
import SearchAppBar from "./index";
import userEvent from '@testing-library/user-event';

describe("test Appbar component", () => {
  test("Appbar Header should be 'Art Gallery'", () => {
    const { getByTestId } = render(<SearchAppBar/>);
    expect(getByTestId('appbar-header').innerHTML).toBe('Art Gallery')
  })
  test( "Search Button should be rendered", () => {
    const { queryByTestId } = render(<SearchAppBar/>);
    expect(queryByTestId('appbar-searchButton')).toBeInTheDocument();
  })
  test("Input should be rendered", () => {
    const { queryByTestId } = render(<SearchAppBar/>);
    expect(queryByTestId('appbar-searchInput')).toBeInTheDocument()
  })
  test("Input should display 'Cat' when user type in 'Cat'", () => {
    const onSearchChange = jest.fn();
    const { getByTestId, getByDisplayValue } = render(<SearchAppBar onSearchChange={onSearchChange}/>);
    const inputEl = getByTestId('appbar-searchInput');
    userEvent.type(inputEl, 'Cat');
    expect(onSearchChange).toHaveBeenCalledTimes(3);
    expect(getByDisplayValue('Cat')).toBeInTheDocument();
  })
  test("Clicking on search button should trigger onSearch callback", () => {
    const onSearch = jest.fn();
    const { getByTestId } = render(<SearchAppBar onSearch={onSearch} />);
    const searchButton= getByTestId('appbar-searchButton');
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);
    expect(onSearch).toBeCalledTimes(1);
  })
  // test("Pressing 'Enter' should trigger onSearch callback", () => {
  //   const onSearch = jest.fn();
  //   const { getByTestId } = render(<SearchAppBar onSearch={onSearch} />);
  //   const inputEl = getByTestId('appbar-searchInput');
  //   expect(inputEl).toBeInTheDocument();
  //   fireEvent.focus(inputEl);
  //   fireEvent.keyPress(inputEl, {
  //     key: 'Enter',
  //     code: 13
  //   })
  //   expect(onSearch).toHaveBeenCalledTimes(1);
  // })
})
