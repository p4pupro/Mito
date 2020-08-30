export type ResultResponse = {
    code: number;
    type: string;
    description: string;
};

export type Response = {
    result: ResultResponse;
    records: number;
    rows: []
};
  
export type WrongResultResponse = {
    timestamp: string;
    status: string;
    message: string;
    path: string;
};