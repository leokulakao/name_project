import { createSelector } from 'reselect';

import * as fromLink from './link.reducer';
import { AppState } from '../../state.interface';

export const getState = (State: AppState) => State.link;

export const addLink = createSelector(getState, fromLink.addLink);
export const addLinkLoading = createSelector(getState, fromLink.addLinkLoading);
export const addLinkLoaded = createSelector(getState, fromLink.addLinkLoaded);
export const addLinkFail = createSelector(getState, fromLink.addLinkFail);

export const getLinkById = createSelector(getState, fromLink.getLinkById);
export const getLinkByIdLoading = createSelector(getState, fromLink.getLinkByIdLoading);
export const getLinkByIdLoaded = createSelector(getState, fromLink.getLinkByIdLoaded);
export const getLinkByIdFail = createSelector(getState, fromLink.getLinkByIdFail);

export const deleteLink = createSelector(getState, fromLink.deleteLink);
export const deleteLinkLoading = createSelector(getState, fromLink.deleteLinkLoading);
export const deleteLinkLoaded = createSelector(getState, fromLink.deleteLinkLoaded);
export const deleteLinkFail = createSelector(getState, fromLink.deleteLinkFail);
