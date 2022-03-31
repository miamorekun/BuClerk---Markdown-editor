class Http {
    entryPoint: string = "http://localhost:8080/api/v1"

    get(url: string, options?: RequestInit): Promise<Response> {
        return fetch(this.entryPoint + url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            ...options
        })
    }

    post(url: string, options?: RequestInit): Promise<Response> {
        return fetch(this.entryPoint + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            ...options
        })
    }
}

const HttpInstance = new Http()
export {HttpInstance as Http}
