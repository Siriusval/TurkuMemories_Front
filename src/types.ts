export type Memory = {
    id: number;
    title: string;
    description: string;
    position: Object;
    createdAt: string;
    updateAt: string;
    userId: number;
    categoryId: number;
};

export type Memories = {
    count: number;
    rows: Memory[];
};
