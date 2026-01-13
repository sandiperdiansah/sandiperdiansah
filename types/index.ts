export type DefaultActionResponse<T> = {
    message?: string;
    data?: T;
    error?: {
        general?: string;
        fieldErrors?: Record<string, string[]>;
    };
};

export type DefaultPaginationResponse<T> = {
    data: T[];
    meta: {
        page: number;
        limit: number;
        totalItems: number;
        totalPages: number;
    };
};

export type DefaultFindAllResponse<T> = DefaultActionResponse<
    DefaultPaginationResponse<T>
>;

export type DefaultFindOneResponse<T> = DefaultActionResponse<T>;
export type DefaultCreateResponse<T> = DefaultActionResponse<T>;
export type DefaultUpdateResponse<T> = DefaultActionResponse<T>;
export type DefaultDeleteResponse<T> = DefaultActionResponse<T>;
