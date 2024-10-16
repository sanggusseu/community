import { apiClient, authApiClient } from '../utils/api';

const handleError = (message, err) => {
  console.error(message);
  throw new Error(err);
};

const getTodayDate = (isUpdated = false) => {
  const today = new Date().toISOString().split('T')[0];
  return isUpdated ? `${today} (수정됨)` : today;
};

export const createPost = async (data, client = authApiClient) => {
  try {
    const response = await client.post('/posts', { ...data });
  } catch (err) {
    handleError('로그인 후 작성해 주세요!', err);
  }
};

export const getPosts = async (page = 1, limit = 8, client = apiClient) => {
  try {
    const response = await client.get(`/posts?_page=${page}&_limit=${limit}`);
    const totalCount = response.headers['x-total-count'];
    return { data: response.data, totalCount };
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

export const getFilteredPosts = async (
  query,
  value,
  page = 1,
  limit = 8,
  client = apiClient,
) => {
  try {
    const response = await client.get(
      `/posts?_page=${page}&_limit=${limit}&${query}_like=${value}`,
    );
    const totalCount = response.headers['x-total-count'];
    return { data: response.data, totalCount };
  } catch (err) {
    handleError('소원 조회에 실패했습니다.', err);
  }
};

export const updatePost = async (id, payload, client = authApiClient) => {
  try {
    const response = await client.patch(`/posts/${id}`, {
      ...payload,
      createdAt: getTodayDate(true),
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
