const tags = [
  "AEM",
  "Analytics",
  "UX",
  "Information Architecture",
  "Visual Design",
  "SiteCore",
  "CX Strategy",
  "Adobe DAM",
  "Taxonomy",
  "Photography",
  "Adobe Analytics"
]

const activeFilters =[];

export default function dataReducer(state = { tags, activeFilters }, action) {
  switch (action.type) {
    case "FILTER":
      let activeFilters = state.activeFilters;      
      if (activeFilters.includes(action.filter)){
        activeFilters = activeFilters.filter(tag => tag !== action.filter);
      } else {
        activeFilters.push(action.filter);
      }
      
      return {
        ...state,
        activeFilters
      };
    default:
      return state;
  }
}
