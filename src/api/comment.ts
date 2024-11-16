import { Comment } from '../types/Comment';
import { client } from '../utils/fetchClient';

export const getComments = (postId: number) => {
  return client.get<Comment[]>(`/comments?postId=${postId}`);
};

export function deleteComment(commentId: number) {
  return client.delete(`/comments/${commentId}`);
}

export function addComment({ postId, name, email, body }: Comment) {
  return client.post<Comment>('/comments', { postId, name, email, body });
}