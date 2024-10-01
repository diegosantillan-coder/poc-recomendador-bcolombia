export interface WebSocketMessage {
	service: string;
	action: string;
	data: Data;
}

export interface Data {
	user_id: string;
	session_id: string;
	message: string;
}
