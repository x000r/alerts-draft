import ApiService from './ApiService'

export default {
    getMsg (uri) {
        return ApiService().get(uri)
    }
}