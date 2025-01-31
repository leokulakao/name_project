import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';
import { LabelService } from '../label.service';
import * as actions from './../action/label.action';
import { Router } from '@angular/router';
import { LabelSandbox } from '../label.sandbox';
import { LabelResponceModel } from '../models/labelResponce.model';
// import { AllUsersResponceModel } from '../models/allUsersResponce.model';

@Injectable()
export class LabelEffects {
    constructor(
        private actions$: Actions,
        public router: Router,
        private labelService: LabelService,
        private labelSandbox: LabelSandbox
    ) { }

    @Effect()
    getAllLabels$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.GET_ALL_LABELS),
        map((action: actions.GetAllLabelsAction) => action.payload),
        switchMap(state => {
            return this.labelService.getAllLabels(state).pipe(
                map(data => {
                    return new actions.GetAllLabelsSuccessAction(data);
                }
                ),
                catchError(error =>
                    of(new actions.GetAllLabelsFailAction(error))
                )
            );
        })
    );

    @Effect()
    getLabelById$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.GET_LABEL_BY_ID),
        map((action: actions.GetLabelByIdAction) => action.payload),
        switchMap(state => {
            return this.labelService.getLabelById(state).pipe(
                map(data => {
                    console.log(data);
                    return new actions.GetLabelByIdSuccessAction(data);
                }
                ),
                catchError(error =>
                    of(new actions.GetLabelByIdFailAction(error))
                )
            );
        })
    );

    @Effect()
    addLabel$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.ADD_LABEL),
        map((action: actions.AddLabelAction) => action.payload),
        switchMap(state => {
            return this.labelService.addLabel(state).pipe(
                map(data => new actions.AddLabelSuccessAction(data)
                ),
                catchError(error =>
                    of(new actions.AddLabelFailAction(error))
                )
            );
        })
    );

    @Effect()
    deleteLabel$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.DELETE_LABEL),
        map((action: actions.DeleteLabelAction) => action.payload),
        switchMap(state => {
            return this.labelService.deleteLabel(state).pipe(
                map(data => new actions.DeleteLabelSuccessAction(data)
                ),
                catchError(error =>
                    of(new actions.DeleteLabelFailAction(error))
                )
            );
        })
    );
}
