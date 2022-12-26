import Loading from './Loading.vue'

let vm = {}

export default {
    install(Vue, opts) {
        opts = opts || {}

        const loadingPlugin = Vue.extend(Loading)

        vm = new loadingPlugin({
            data: opts
        }).$mount()

        document.body.appendChild(vm.$el)

        Vue.prototype.$loading = (loading) => vm.loading = loading
    }
}