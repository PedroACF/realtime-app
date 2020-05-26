class AppStorage{
    storeToken(token){
        return localStorage.setItem('token', token);
    }

    storeUser(user){
        return localStorage.setItem('user', user);
    }

    store(user, token){
        this.storeUser(user);
        this.storeToken(token);
    }

    clear(){
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    getToken(){
        localStorage.getItem('token');
    }

    getUser(){
        localStorage.getItem('user');
    }
}

export default AppStorage = new AppStorage();