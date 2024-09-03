export interface QuestionRequest {
	request: Request;
}

export interface Request {
	user_id: string;
	session_id: string;
	prompt: string;
}
