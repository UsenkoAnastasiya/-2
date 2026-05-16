class ApiProxy {
  constructor(baseUrl, authMethod = "apiKey", token = "demo-token") {
    this.baseUrl = baseUrl;
    this.authMethod = authMethod;
    this.token = token;
  }

  getHeaders() {
    if (this.authMethod === "apiKey") {
      return { "X-Api-Key": this.token };
    }
    if (this.authMethod === "jwt") {
      return { Authorization: `Bearer ${this.token}` };
    }
    if (this.authMethod === "oauth") {
      return { Authorization: `OAuth ${this.token}` };
    }
    return {};
  }

  async request(url, options = {}) {
    const fullUrl = this.baseUrl + url;
    const headers = { ...this.getHeaders(), ...options.headers };

    console.log(`[Proxy] ${options.method || "GET"} ${fullUrl}`);
    console.log(`[Proxy] Headers:`, headers);

    const response = await fetch(fullUrl, { ...options, headers });

    if (!response.ok) {
      console.log(`[Proxy] ERROR: ${response.status}`);
      throw new Error(`Request failed: ${response.status}`);
    }

    console.log(`[Proxy] Success: ${response.status}`);
    return response.json();
  }
}

export const proxy = new ApiProxy(
  "https://world.openfoodfacts.org",
  "none",
  "demo-token",
);
