import { TestItemStateType } from '../../../classes/TestItemStateType';
import { ResponseType } from '../../../classes/ResponseType';

export const startGetValue = (state: TestItemStateType) => ({
    isLoading: true,
    isSuccess: false,
    isError: false,
    textboxSuccessData: new ResponseType(),
    textboxErrorData: new ResponseType()
});

export const successGetValue = (state: TestItemStateType) => ({
    isLoading: false,
    isSuccess: true,
    isError: false,
    textboxSuccessData: new ResponseType(),
    textboxErrorData: new ResponseType()
});

export const errorGetValue = (state: TestItemStateType) => ({
    isLoading: false,
    isSuccess: false,
    isError: true,
    textboxSuccessData: new ResponseType(),
    textboxErrorData: new ResponseType()
});
