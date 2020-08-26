import {Selector, t} from 'testcafe';

class ModuleLogin {
    
    get EmailLogin() { return Selector('body.loginBod:nth-child(2) div.containerMid:nth-child(3) section.loginBox.animated.fadeInLeft.fadeIn form:nth-child(3) > input.logInput:nth-child(2)');}
    get PasswordLogin() { return Selector('body.loginBod:nth-child(2) div.containerMid:nth-child(3) section.loginBox.animated.fadeInLeft.fadeIn form:nth-child(3) > input.logInput:nth-child(3)');}
    get ButtonLogin() { return Selector('body.loginBod:nth-child(2) div.containerMid:nth-child(3) section.loginBox.animated.fadeInLeft.fadeIn form:nth-child(3) > button.btn.green.large:nth-child(5)');}

    async setLoginTrue() {
        
        await t
     
            .typeText(this.EmailLogin, "karid.uribe@grability.com")
            .typeText(this.PasswordLogin, "karidximena")
            .click(this.ButtonLogin)
            .wait(5000);
            
            
    }
}

export default new ModuleLogin();  