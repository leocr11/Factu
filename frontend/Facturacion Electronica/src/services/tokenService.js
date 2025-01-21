class TokenService {
    constructor() {
      this.tokenKey = 'factus_token';
      this.refreshTokenKey = 'factus_refresh_token';
    }
  
    async getValidToken() {
      const token = localStorage.getItem(this.tokenKey);
      if (!token) return null;
  
      // Si el token está próximo a expirar, intentar renovarlo
      if (this.isTokenExpiringSoon(token)) {
        return await this.refreshToken();
      }
  
      return token;
    }
  
    setTokens(accessToken, refreshToken) {
      localStorage.setItem(this.tokenKey, accessToken);
      localStorage.setItem(this.refreshTokenKey, refreshToken);
    }
  
    clearTokens() {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.refreshTokenKey);
    }
  
    isTokenExpiringSoon(token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expirationTime = payload.exp * 1000;
        const currentTime = Date.now();
        // Consideramos que está próximo a expirar si queda menos de 5 minutos
        return expirationTime - currentTime < 5 * 60 * 1000;
      } catch (error) {
        return true;
      }
    }
  
    async refreshToken() {
      const refreshToken = localStorage.getItem(this.refreshTokenKey);
      if (!refreshToken) return null;
  
      try {
        const response = await fetch(`${process.env.REACT_APP_FACTUS_API_URL}/auth/refresh`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken }),
        });
  
        if (!response.ok) throw new Error('Error refreshing token');
  
        const { accessToken, newRefreshToken } = await response.json();
        this.setTokens(accessToken, newRefreshToken);
        return accessToken;
      } catch (error) {
        this.clearTokens();
        return null;
      }
    }
  }
  
  export const tokenService = new TokenService();