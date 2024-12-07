import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

// Thunk to fetch available areas
export const fetchAreas = createAsyncThunk("foodMenu/fetchAreas", async () => {
	const response = await axios.get(`${API_BASE_URL}list.php?a=list`);
	return response.data.meals.map((area) => area.strArea);
});

// Thunk to fetch food items filtered by area
export const fetchFoodByArea = createAsyncThunk(
	"foodMenu/fetchFoodByArea",
	async (area) => {
		const response = await axios.get(`${API_BASE_URL}filter.php?a=${area}`);
		return response.data.meals;
	}
);

const initialState = {
	menu: [], // Food items all
    pageMenu: [], // Paginated food items of current page
    carouselMenu: [],
	areas: [], // Available areas from API
	selectedArea: "Indian", // Default area
	sortOption: "A-Z", // Default sorting option
	pagination: {
		currentPage: 1,
		itemsPerPage: 8, // Number of items to display per page
		totalPages: 0,
	},
	isLoading: false,
	error: null,
};

const foodMenuSlice = createSlice({
	name: "foodMenu",
	initialState,
	reducers: {
		// Change sorting order (A-Z or Z-A)
		setSortOption(state, action) {
			state.sortOption = action.payload;
			state.menu = [...state.menu].sort((a, b) => {
				if (action.payload === "A-Z")
					return a.strMeal.localeCompare(b.strMeal);
				if (action.payload === "Z-A")
					return b.strMeal.localeCompare(a.strMeal);
				return 0;
			});
            const startIndex = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;
            const endIndex = startIndex + state.pagination.itemsPerPage;
            state.pageMenu = state.menu.slice(startIndex, endIndex);
		},
		// Change pagination page
		setCurrentPage(state, action) {
			const newPage = action.payload;
			state.pagination.currentPage = newPage;

			// Calculate the paginated menu
			const startIndex = (newPage - 1) * state.pagination.itemsPerPage;
			const endIndex = startIndex + state.pagination.itemsPerPage;
			state.pageMenu = state.menu.slice(startIndex, endIndex);
		},
	},
	extraReducers: (builder) => {
		builder
			// Handle fetching of areas
			.addCase(fetchAreas.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchAreas.fulfilled, (state, action) => {
				state.areas = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchAreas.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			})
			// Handle fetching of food items by area
			.addCase(fetchFoodByArea.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchFoodByArea.fulfilled, (state, action) => {
				state.menu = action.payload;
                state.selectedArea = action.meta.arg;
				const newMenu = action.payload;
				// Store the new menu and update pagination
				state.menu = newMenu;
				state.pagination.totalPages = Math.ceil(
					newMenu.length / state.pagination.itemsPerPage
				);
                state.pageMenu = newMenu.slice(0, state.pagination.itemsPerPage); // first page
                state.carouselMenu = [];
                for (let i=0; i<3; i++) {
                    let randomIndex = Math.floor(Math.random() * newMenu.length);
                    state.carouselMenu.push(newMenu[randomIndex].strMealThumb);
                }
				state.isLoading = false;
			})
			.addCase(fetchFoodByArea.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			});
	},
});

export const { setSortOption, setCurrentPage } = foodMenuSlice.actions;

export default foodMenuSlice.reducer;
