
export interface Review{
    id: string | undefined;
    projectId: string;
    walletAddr: string;
    message: string;
    likes: number;
    tips: number;
    shares: number;
    responses: Object;
    created_at: string;
}