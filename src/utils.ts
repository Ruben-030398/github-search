import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFetchBaseQueryErrorType = (error: any): error is FetchBaseQueryError => 'status' in error