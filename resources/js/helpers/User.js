import Token from './Token';
import AppStorage from './AppStorage';

class User{
    login(form){
        axios.post('/api/login', form)
            .then(res=>this.responseAfterLogin(res)).catch(err=>{
            console.log(err.response.data);
        });
    }

    responseAfterLogin(res){
        const { data: { access_token, username } = {} } = res;
        if(Token.isValid(access_token)){
            AppStorage.store(username, access_token);
        }
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            return Token.isValid(storedToken);
        }
        return false;
    }

    loggedIn(){
        return this.hasToken();
    }

    logOut(){
        //TODO: falta aggregar la cabecera con el token
        if(this.loggedIn()){
            axios.post('/api/logout', {})
                .then(res=>{
                    AppStorage.clear();
                }).catch(err=>{
                console.log(err.response.data);
            });
        }
    }
}

export default User = new User();