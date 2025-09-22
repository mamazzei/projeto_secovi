package br.maua.corporativo.projeto.backend.controllers;

public class LoginResponse {
    private String token;

    private long expiresIn;

	private long userId;

    public String getToken() {
        return token;
    }

	// Getters and setters...
	public void setToken(String token) {
		this.token = token;
	}

	public long getExpiresIn() {
		return expiresIn;
	}

	public void setExpiresIn(long expiresIn) {
		this.expiresIn = expiresIn;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	
}