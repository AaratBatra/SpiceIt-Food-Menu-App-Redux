import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FoodMenu from "./FoodMenu";
import { setCurrentPage } from "@/store/slices/foodMenuSlice"; // Should work after fixing moduleNameMapper

const mockStore = configureStore([]);

describe("FoodMenu Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      foodMenu: {
        menu: [
          {
            idMeal: "1",
            strMeal: "Biryani",
            strMealThumb: "biryani-thumb.jpg",
          },
          {
            idMeal: "2",
            strMeal: "Apple Pie",
            strMealThumb: "apple-pie-thumb.jpg",
          },
          {
            idMeal: "3",
            strMeal: "Chow Mein",
            strMealThumb: "chow-mein-thumb.jpg",
          },
          {
            idMeal: "4",
            strMeal: "Dosa",
            strMealThumb: "dosa-thumb.jpg",
          },
          {
            idMeal: "5",
            strMeal: "Egg Curry",
            strMealThumb: "egg-curry-thumb.jpg",
          },
        ],
        pageMenu: [
          {
            idMeal: "1",
            strMeal: "Biryani",
            strMealThumb: "biryani-thumb.jpg",
          },
          {
            idMeal: "2",
            strMeal: "Apple Pie",
            strMealThumb: "apple-pie-thumb.jpg",
          },
        ],
        pagination: {
          currentPage: 1,
          itemsPerPage: 2,
          totalPages: 3,
        },
      },
    });
    store.dispatch = jest.fn(); // Mock the dispatch function
  });

  it("displays food items for the current page", () => {
    render(
      <Provider store={store}>
        <FoodMenu />
      </Provider>
    );

    // Check if food items for the first page (Biryani, Apple Pie) are rendered
    expect(screen.getByText("Biryani")).toBeInTheDocument();
    expect(screen.getByText("Apple Pie")).toBeInTheDocument();
    // chow mein is for next page so that should not show
    expect(screen.queryByText("Chow Mein")).not.toBeInTheDocument();
  });

  it('changes page when "Next" is clicked', () => {
    render(
      <Provider store={store}>
        <FoodMenu />
      </Provider>
    );

    // Simulate a click on the "Next" button
    const nextPageButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextPageButton);

    // Check if dispatch was called with the correct action to set the current page to 2
    expect(store.dispatch).toHaveBeenCalledWith(setCurrentPage(2));
  });
});
