import {useDispatch, useSelector, type TypedUseSelectorHook} from "react-redux";
import {AppDispatch, RootState} from "@/app/store/store";

type DispatchFunction = () => AppDispatch
export const useCartDispatch: DispatchFunction = useDispatch
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector