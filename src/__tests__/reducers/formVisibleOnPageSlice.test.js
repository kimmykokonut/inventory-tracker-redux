import formVisibleOnPageSliceReducer, { setFormFalse, setFormTrue } from "../../redux/formVisibleOnPageSlice";
import { describe, expect, test } from 'vitest';

describe('formVisibleOnPageSliceReducer', () => {
  test('should handle setFormFalse action', () => {
    const newState = formVisibleOnPageSliceReducer(false, setFormTrue());
    expect (newState).toEqual(true);
  });
});