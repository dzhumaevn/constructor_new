import loaderReducer, { setLoadingProgress, setLoadingStatusActionCreator } from "./loaderReducer";

describe('loaderReducer tests', () => {
  const initialState = { isLoading: false, progressValue: 0 };

  test('isLoading should be true', () => {
    const loaderState = loaderReducer(initialState, setLoadingStatusActionCreator(true));
    expect(loaderState.isLoading).toBeTruthy();
  });

  test('initial progressValue state should be 0', () => {
    const loaderState = loaderReducer(initialState, setLoadingStatusActionCreator(true));
    expect(loaderState.progressValue).toBe(0);
  });

  test('progressValue state should be 77', () => {
    const loaderState = loaderReducer(initialState, setLoadingProgress(200, 13));
    expect(loaderState.progressValue).toBe(7);
  });
});