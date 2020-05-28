class Token{
    isValid(token){
        return true;
    }

    payload(token){
        const payload = token.split('.')[1];
        return this.decode(payload)
    }

    decode(payload){
        return JSON.parse(atob(payload));
    }
}

export default Token = new Token();