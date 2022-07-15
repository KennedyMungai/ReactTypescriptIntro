interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const reducer = (state: RepositoriesState, action: any) => {
    switch (action.type) {
        case 'search_repositories':
            return {loading: true, error: null, data: []}
        case 'search_repositories_success':

        case 'search_repositories_error':
            
        default:
            return state;
    }
};

export default reducer;