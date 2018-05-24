/**
 * 这里用来处理和localstorage相关的持久化数据
 */
import storage from './storage';

const _private = {
    getStorageKey: key      => { return 'mc_user_' + key; },
    getCredential: ()       => storage.get(_private.getStorageKey('credential')),
    setCredential: value    => storage.set(_private.getStorageKey('credential'), value),
    getUserToken: ()        => storage.get(_private.getStorageKey('token')),
    setUserToken: value     => storage.set(_private.getStorageKey('token'), value)
};

export default {
    // 获取安全凭证
    getCredential: () => _private.getCredential(),

    // 设置安全凭证
    setCredential (payload) { _private.setCredential(payload); },

    // 获取安全凭证
    getUserToken: () => _private.getUserToken(),

    // 设置安全凭证
    setUserToken (payload) { _private.setUserToken(payload); },

    // 清空本地localstorage里存的所有数据
    clear () {
        this.setCredential(null);
    }
};
