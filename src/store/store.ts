import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Job {
    id: number;
    company: string;
    logo: string;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}

interface JobsState {
    filteredJobs: any [];
    jobs: Job[];
    searchTerm: string; // Lägg till searchTerm i state
}

const initialState: JobsState = {
    jobs: [],
    filteredJobs: [],
    searchTerm: '', // Sätt searchTerm till en tom sträng som standard
};

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs(state, action: PayloadAction<Job[]>) {
            state.jobs = action.payload;
        },
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
    },
});

export const { setJobs, setSearchTerm } = jobsSlice.actions;

// Skapa en selector för att hämta searchTerm från state
export const selectSearchTerm = (state: RootState) => state.jobs.searchTerm;
export interface RootState {
    auth: any;
    jobs: JobsState;
}

export default configureStore({
    reducer: {
        jobs: jobsSlice.reducer,
    },
});




