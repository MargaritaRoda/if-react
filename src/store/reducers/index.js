import { userReducer } from './user.reducer';
import { availableHotelsFilterReducer } from './availableHotelsFilter.reducer';
import { topSectionFormReducer } from './topSectionForm.reducer';

export const rootReducer = {
  user: userReducer,
  availableHotelsFilter: availableHotelsFilterReducer,
  topSectionForm: topSectionFormReducer,
};
