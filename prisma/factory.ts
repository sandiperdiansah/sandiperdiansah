export const factory = <T>(count: number, callback: (index: number) => T): T[] => {
    return Array.from({ length: count }, (_, index) => {
        return callback(index);
    });
};
