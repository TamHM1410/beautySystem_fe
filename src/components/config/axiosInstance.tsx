import axios from "axios";

// Cấu hình cơ bản
const axiosInstance = axios.create({
  baseURL:"http://35.201.219.179:8080/api", // URL gốc của API
  timeout: 10000, // Thời gian timeout (10 giây)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor cho request: Thêm token hoặc xử lý trước khi gửi request
axiosInstance.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage (hoặc bất kỳ nguồn nào khác như Redux)
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Xử lý lỗi trước khi request được gửi
    return Promise.reject(error);
  }
);

// Interceptor cho response: Xử lý phản hồi hoặc lỗi từ server
axiosInstance.interceptors.response.use(
  (response) => {
    // Trả về dữ liệu trực tiếp thay vì toàn bộ response object nếu muốn
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // Xử lý lỗi 401 (Unauthorized) để refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/refresh-token`,
          { refreshToken }
        );
        const newAccessToken = response.data.accessToken;

        // Lưu token mới
        localStorage.setItem("accessToken", newAccessToken);

        // Thêm token mới vào header của request gốc và thử lại
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Nếu refresh token thất bại, đăng xuất người dùng
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; // Chuyển hướng về trang login
        return Promise.reject(refreshError);
      }
    }

    // Xử lý các lỗi khác
    if (error.response) {
      const { status, data } = error.response;
      return Promise.reject({
        status,
        message: data.message || "Something went wrong",
        data,
      });
    } else if (error.request) {
      // Lỗi không nhận được phản hồi từ server
      return Promise.reject({
        status: 0,
        message: "No response from server. Please check your network.",
      });
    }

    return Promise.reject(error);
  }
);

// Hàm retry thủ công (nếu cần)
const retryRequest = async (requestFn:any, maxRetries = 3, delay = 1000) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await requestFn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay * Math.pow(2, i))); // Exponential backoff
    }
  }
};

// Export instance và các phương thức tiện ích
export default axiosInstance;

export const apiGet = (url:string, config = {}) => axiosInstance.get(url, config);
export const apiPost = (url:string, data:any, config = {}) => axiosInstance.post(url, data, config);
export const apiPut = (url:string, data:any, config = {}) => axiosInstance.put(url, data, config);
export const apiDelete = (url:string, config = {}) => axiosInstance.delete(url, config);

// Ví dụ sử dụng retry
export const apiGetWithRetry = (url:string, config = {}) =>
  retryRequest(() => axiosInstance.get(url, config));