import { apiClient, authApiClient } from '../utils/api';

const handleError = (message, err) => {
  console.error(err);
  alert(message);
};

const createEditDate = () => {
  const today = new Date().toISOString().split('T')[0];
  return `${today} (수정됨)`;
};

export const createPost = async (data, client = authApiClient) => {
  try {
    const response = await client.post('/posts', { ...data });
  } catch (err) {
    handleError('로그인 후 작성해 주세요!', err);
  }
};

export const getPosts = async (client = apiClient) => {
  try {
    const response = await client.get('/posts');
    return response.data;
  } catch (err) {
    handleError('소원 목록 조회에 실패했습니다.', err);
  }
};

export const getPostById = async (id, client = apiClient) => {
  try {
    const response = await client.get(`/posts/${id}`);
    return response.data;
  } catch (err) {
    handleError('소원 조회에 실패했습니다.', err);
  }
};

export const updatePost = async (id, payload, client = authApiClient) => {
  try {
    const response = await client.patch(`/posts/${id}`, {
      ...payload,
      createdAt: createEditDate(),
    });
    alert('수정 성공');
  } catch (err) {
    handleError('작성자만 수정할 수 있습니다!', err);
  }
};

export const deletePost = async (id, client = authApiClient) => {
  try {
    const response = await client.delete(`/posts/${id}`);
    alert('삭제 성공');
  } catch (err) {
    handleError('작성자만 삭제할 수 있습니다!', err);
  }
};
