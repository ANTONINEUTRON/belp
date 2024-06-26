
export interface Review{
    id: string | undefined;
    projectId: string;
    walletAddr: string;
    message: string;
    likes: number;
    tips: number;
    responses: Object;
}